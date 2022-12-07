"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Modal.css");
var _reactRouterDom = require("react-router-dom");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function Modal(_ref) {
  var close = _ref.close;
  return /*#__PURE__*/React.createElement("div", {
    className: "blocker",
    onClick: close
  }, /*#__PURE__*/React.createElement("div", {
    id: "confirmation",
    className: "modal"
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCircleCheck,
    className: "circle-check"
  }), /*#__PURE__*/React.createElement("p", null, "Employee Created !"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "close-modal",
    onClick: close
  }, "Close")));
}
var _default = Modal;
exports.default = _default;