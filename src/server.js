import {renderToPipeableStream} from 'react-dom/server'
import React from 'react'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {StaticRouter} from "react-router-dom/server";
import thunk from 'redux-thunk'
import {actions, rootReducer} from './reducers'
import App from "./app/App";
import fs from 'fs'
import path from 'path'
import ejs from 'ejs'

const DISABLE_SSR = false

const renderToPipeableStreamHtmlFlag = "|renderToPipeableStream|"

export default async function(ctx, next) {
    const requestPath = ctx.req.url
    const __ = ctx.i18n.__
    const extname = path.extname(requestPath)
    if (extname) {
        return  next()
    }

    const templateHtml = fs.readFileSync(path.resolve("./.tmp/client/assets/template.html"), "utf-8")
    if (templateHtml.split(renderToPipeableStreamHtmlFlag).length !== 2) {
        throw Error(`invalid html template, html: ${templateHtml}`)
    }

    ctx.res.setHeader('Content-type', 'text/html');
    if (DISABLE_SSR) {
        const pageHtml = ejs.render(templateHtml,
            {preloadedStateString: "undefined", i18nLibString:"undefined", siteName: __("site_name"), slogan:__("slogan")  },
            {delimiter:"$"})
        ctx.body = pageHtml
        return
    }

    const store = createStore(rootReducer, applyMiddleware(thunk))
    if (/^\/counter/i.test(requestPath)) {
        await store.dispatch(actions.counterActions.incrementAsync())
    }

    return await new Promise((resolve, reject) => {
        const stream = renderToPipeableStream(
            <Provider store={store}>
                <StaticRouter location={requestPath}>
                    <App i18nLib={ctx.i18n.getLib()}/>
                </StaticRouter>
            </Provider>, {
                onError(err) {
                    ctx.status = 500
                    ctx.body = err.toString()
                    console.error(err)
                    reject(err)
                },
                onShellReady() {
                },
                onAllReady() {
                    ctx.status = 200
                    let preloadedStateString, i18nLibString
                    if (process.env.NODE_ENV !== "production") {
                        preloadedStateString = JSON.stringify(store.getState())
                        i18nLibString = JSON.stringify(ctx.i18n.getLib())
                    } else {
                        preloadedStateString = `"${Buffer.from(JSON.stringify(store.getState())).toString("base64")}"`
                        i18nLibString = `"${Buffer.from(JSON.stringify(ctx.i18n.getLib())).toString("base64")}"`
                    }

                    const pageHtml = ejs.render(templateHtml,
                        {preloadedStateString, i18nLibString, siteName: __("site_name"), slogan:__("slogan")  },
                        {delimiter:"$"})
                    const htmlParts = pageHtml.split(renderToPipeableStreamHtmlFlag)

                    ctx.res.write(htmlParts[0])
                    stream.pipe(ctx.res)
                    ctx.res.end(htmlParts[1]);
                    resolve()
                },
            }
        )
    })
}