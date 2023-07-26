"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeadNav;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./HeadNav.less");
var _react2 = require("../../i18n/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HeadNav() {
  var __ = (0, _react2.useI18n)();
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "head_nav_wrap"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "head_nav"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo_panel"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: "logo_link",
    to: "/"
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav_panel"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/"
  }, " ", __("home"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/tag/chinese"
  }, " ", __("chinese"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/tag/japanese"
  }, " ", __("japanese"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/tag/the_west"
  }, " ", __("the west"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/tag/masturbating"
  }, " ", __("masturbating"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/tag/homosexual"
  }, " ", __("homosexual"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/tag/spurt"
  }, " ", __("spurt"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/tag/cartoon"
  }, " ", __("cartoon")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user_panel"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login",
    className: "login"
  }, "\u767B\u5F55"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/registry",
    className: "registry"
  }, "\u514D\u8D39\u6CE8\u518C"))));
}