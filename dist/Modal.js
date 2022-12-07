"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Modal.css");
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  var close = _ref.close;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "blocker",
    onClick: close,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "confirmation",
      className: "modal",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCircleCheck,
        className: "circle-check"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "Employee Created !"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
        to: "/",
        className: "close-modal",
        onClick: close,
        children: "Close"
      })]
    })
  });
}
var _default = Modal;
exports.default = _default;