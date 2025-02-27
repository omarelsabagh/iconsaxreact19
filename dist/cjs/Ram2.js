'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.01 20.97a1 1 0 0 1-1 1.01H8.994a1 1 0 0 1-1-.993L7.98 19a2 2 0 0 1 2-2h4.01c1.1 0 1.99.89 2 1.99l.02 1.98Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.5 10v2.17c0 .53.21 1.04.59 1.42l.82.82c.38.38.59.89.59 1.42V17c0 2.3-.909 3.993-2.894 4.666-.302.102-.597-.136-.598-.454L17 18.979c-.02-1.64-1.37-2.98-3-2.98H9.99c-1.66 0-3 1.35-3 3v2.225c0 .317-.294.556-.595.456C4.386 21.015 3.5 19.312 3.5 17V7c0-2.407.952-4.167 3.145-4.764.3-.082.58.16.576.471L7.19 4.9c-.01.47.16.92.48 1.26.33.34.76.53 1.27.54.514 0 .972-.212 1.285-.559a.318.318 0 0 1 .445-.01c.32.34.76.54 1.27.55.514 0 .984-.227 1.304-.59.105-.12.32-.13.426-.01.32.34.76.54 1.27.55.96 0 1.73-.75 1.75-1.72l.04-2.224c.005-.304.28-.535.575-.457 2.204.586 3.195 2.358 3.195 4.77v1c0 .55-.45 1-1 1s-1 .45-1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.228 2.003a.5.5 0 0 1 .503.509L9.69 4.96c-.01.41-.34.74-.75.74h-.01a.751.751 0 0 1-.74-.77V2.507a.5.5 0 0 1 .496-.5l.542-.004ZM12.231 2a.5.5 0 0 1 .5.508L12.69 4.95c-.01.4-.34.73-.75.73h-.01a.749.749 0 0 1-.74-.76V2.5a.5.5 0 0 1 .5-.5h.541ZM15.234 2.007a.5.5 0 0 1 .497.508L15.69 4.89c-.01.41-.34.74-.75.74h-.01a.749.749 0 0 1-.74-.76V2.503a.5.5 0 0 1 .503-.5l.541.004Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.99 21.97 7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99M8.94 4.949l.05-2.89M11.94 4.949l.05-2.89M14.94 4.92l.05-2.88",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 11v6c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7c-3.53 0-5 2-5 5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M18.5 10v2.17c0 .53.21 1.04.59 1.42l.82.82c.38.38.59.89.59 1.42V17c0 3-1.53 5-5 5h-7c-3.53 0-5-2-5-5V7c0-2.92 1.4-4.9 4.74-4.99C8.32 2 8.41 2 8.5 2h7c.08 0 .16 0 .24.01 3.3.08 4.76 2.06 4.76 4.99v1c0 .55-.45 1-1 1s-1 .45-1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m9.74 2-.05 2.96c-.01.41-.34.74-.75.74h-.01a.751.751 0 0 1-.74-.77l.05-2.92C8.32 2 8.41 2 8.5 2h1.24ZM12.74 2l-.05 2.95c-.01.4-.34.73-.75.73h-.01a.749.749 0 0 1-.74-.76L11.24 2h1.5ZM15.74 2.01l-.05 2.88c-.01.41-.34.74-.75.74h-.01a.749.749 0 0 1-.74-.76L14.24 2h1.26c.08 0 .16 0 .24.01ZM16.02 21.98c-.17.01-.34.02-.51.02h-7c-.18 0-.35 0-.51-.02L7.98 19a2 2 0 0 1 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 7v10c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7C4.97 2 3.5 4 3.5 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.99 21.97 7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99M8.94 4.95l.05-2.89M11.94 4.95l.05-2.89M14.94 4.92l.05-2.88",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.5 22.75h-7c-3.71 0-5.75-2.04-5.75-5.75V7c0-3.71 2.04-5.75 5.75-5.75h7c3.65 0 5.75 2.1 5.75 5.75v1c0 .96-.79 1.75-1.75 1.75-.14 0-.25.11-.25.25v2.17c0 .33.13.65.37.88l.83.83c.52.52.81 1.21.81 1.94V17c-.01 3.65-2.11 5.75-5.76 5.75Zm-7-20C5.64 2.75 4.25 4.14 4.25 7v10c0 2.86 1.39 4.25 4.25 4.25h7c2.82 0 4.25-1.43 4.25-4.25v-1.17c0-.33-.13-.65-.37-.88l-.83-.83c-.52-.52-.81-1.21-.81-1.94V10c0-.96.79-1.75 1.75-1.75.14 0 .25-.11.25-.25V7c0-2.82-1.43-4.25-4.25-4.25H8.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.01 22.718c-.41 0-.75-.33-.75-.74l-.03-2.99c0-.69-.57-1.24-1.25-1.24h-4a1.249 1.249 0 0 0-1.25 1.25l.01 2.97a.749.749 0 1 1-1.5 0l-.01-2.97c0-.74.28-1.43.8-1.95s1.21-.81 1.95-.81h4.01c1.51 0 2.74 1.23 2.75 2.73l.03 2.98c0 .43-.34.77-.76.77 0 0 .01 0 0 0ZM8.94 5.7h-.01a.751.751 0 0 1-.74-.77l.05-2.89c.01-.41.34-.74.75-.74H9c.41.01.74.35.74.76l-.05 2.9c-.01.41-.34.74-.75.74ZM11.94 5.699h-.01a.762.762 0 0 1-.74-.76l.05-2.89c.01-.41.34-.74.75-.74H12c.41.01.74.35.74.76l-.05 2.89c-.01.41-.34.74-.75.74ZM14.94 5.671h-.01a.762.762 0 0 1-.74-.76l.05-2.89c.01-.41.34-.74.75-.74H15c.41.01.74.35.74.76l-.05 2.89c-.01.41-.34.74-.75.74Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 7v10c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7C4.97 2 3.5 4 3.5 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7.99 21.97 7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99M8.94 4.949l.05-2.89M11.94 4.949l.05-2.89M14.94 4.92l.05-2.88",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });
  }
};

var Ram2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var _ref7$variant = _ref7.variant,
      variant = _ref7$variant === void 0 ? 'Linear' : _ref7$variant,
      _ref7$color = _ref7.color,
      color = _ref7$color === void 0 ? 'currentColor' : _ref7$color,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? '24' : _ref7$size,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement("svg", _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
Ram2.displayName = 'Ram2';

module.exports = Ram2;
