"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireWildcard(require("react"));
require("./App.less");
var _react2 = require("../../i18n/react");
var _reactRouter = require("react-router");
var _HeadNav = _interopRequireDefault(require("./HeadNav"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Home = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/Home/Home'));
  });
});
var About = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/About'));
  });
});
var Counter = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/Counter'));
  });
});
var NotFound = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../containers/NotFound'));
  });
});
function App(_ref) {
  var i18nLib = _ref.i18nLib;
  return /*#__PURE__*/_react["default"].createElement(_react2.I18nProvider, {
    i18nLib: i18nLib
  }, /*#__PURE__*/_react["default"].createElement(_HeadNav["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "body_warp"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouter.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_react.Suspense, null, /*#__PURE__*/_react["default"].createElement(Home, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/about",
    element: /*#__PURE__*/_react["default"].createElement(_react.Suspense, null, /*#__PURE__*/_react["default"].createElement(About, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "/counter",
    element: /*#__PURE__*/_react["default"].createElement(_react.Suspense, null, /*#__PURE__*/_react["default"].createElement(Counter, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
    path: "*",
    element: /*#__PURE__*/_react["default"].createElement(_react.Suspense, null, /*#__PURE__*/_react["default"].createElement(NotFound, null))
  }))));
}