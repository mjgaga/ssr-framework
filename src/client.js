import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from "react-router-dom";
import { createLogger } from 'redux-logger'
import { decode } from 'js-base64';
import {rootReducer} from './reducers'
import App from './app/App.js';

const logger = createLogger();

let _is_= undefined, _i18n_lib_
if (typeof window.__PRELOADED_STATE__ === "string") {
    const initStore = decode(window.__PRELOADED_STATE__)
    _is_ = JSON.parse(initStore)
} else if (typeof window.__PRELOADED_STATE__ === "object") {
    _is_ = window.__PRELOADED_STATE__
}

if (typeof window.__I18N_LIB__ === "string") {
    const initStore = decode(window.__I18N_LIB__)
    _i18n_lib_ = JSON.parse(initStore)
} else if (typeof window.__I18N_LIB__ === "object") {
    _i18n_lib_ = window.__I18N_LIB__
}

const store = createStore(rootReducer,  _is_, applyMiddleware(thunk, logger))

ReactDOM.hydrateRoot(document.getElementById('root'),
    <Provider store={store}>
        <BrowserRouter>
            <App i18nLib={_i18n_lib_} />
        </BrowserRouter>
    </Provider>)