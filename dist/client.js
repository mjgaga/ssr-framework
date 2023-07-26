"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var _reactRouterDom = require("react-router-dom");
var _reduxLogger = require("redux-logger");
var _jsBase = require("js-base64");
var _reducers = require("./reducers");
var _App = _interopRequireDefault(require("./app/App.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var logger = (0, _reduxLogger.createLogger)();
var _is_ = undefined,
  _i18n_lib_;
if (typeof window.__PRELOADED_STATE__ === "string") {
  var initStore = (0, _jsBase.decode)(window.__PRELOADED_STATE__);
  _is_ = JSON.parse(initStore);
} else if (_typeof(window.__PRELOADED_STATE__) === "object") {
  _is_ = window.__PRELOADED_STATE__;
}
if (typeof window.__I18N_LIB__ === "string") {
  var _initStore = (0, _jsBase.decode)(window.__I18N_LIB__);
  _i18n_lib_ = JSON.parse(_initStore);
} else if (_typeof(window.__I18N_LIB__) === "object") {
  _i18n_lib_ = window.__I18N_LIB__;
}
var store = (0, _redux.createStore)(_reducers.rootReducer, _is_, (0, _redux.applyMiddleware)(_reduxThunk["default"], logger));
_client["default"].hydrateRoot(document.getElementById('root'), /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_App["default"], {
  i18nLib: _i18n_lib_
}))));