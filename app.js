ignoreRequireCSS()
const {port, nodeBabel} = require("./argv.js")
if (nodeBabel) {
    require("child_process").spawnSync("node", ["./babel.js"])
}
const figlet = require('figlet');
const Koa = require("koa")
const serve = require('koa-static');
const ssr = require("./dist/server.js").default
const {KoaMiddleware} = require("./i18n/koa")

const app = new Koa()
app.use( async (ctx, next) => {
    const res = await next()
    const log = {
        time: new Date(),
        method: ctx.method,
        url: ctx.url,
        host: ctx.get("host"),
        statusCode: ctx.status,
        xForwardedFor: ctx.get('x-forwarded-for') || undefined,
        ip: ctx.request.ip
    }
    console.log(JSON.stringify(log))
    return res
})
app.use(serve(__dirname+"/.tmp/client"))
app.use(KoaMiddleware)
app.use(ssr)

app.listen(port, () => {
    console.log(figlet.textSync('Cold Wind', {
        font: 'Colossal',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }));
    console.log(`nodeBabel = ${nodeBabel}, Server listen on http://0.0.0.0:${port}`)
})

function ignoreRequireCSS() {
    require.extensions['.css'] = function (module, filename) {
        // Do nothing.
    };
    require.extensions['.less'] = function (module, filename) {
        // Do nothing.
    };
    require.extensions['.svg'] = function (module, filename) {
        // Do nothing.
    };
}