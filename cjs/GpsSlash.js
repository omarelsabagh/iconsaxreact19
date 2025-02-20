'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22.75 11.999c0 .41-.34.75-.75.75h-2.04c-.35 3.81-3.4 6.86-7.21 7.21v2.04c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.04c-.61-.05-1.21-.18-1.78-.37-.71-.24-.93-1.14-.4-1.67l2.81-2.81c.04.01.07.01.11.01 1.73 0 3.12-1.39 3.12-3.12 0-.04 0-.07-.01-.11l2.81-2.81c.53-.53 1.43-.31 1.67.4.19.57.32 1.16.37 1.78H22c.41-.01.75.33.75.74ZM21.77 2.23c-.3-.3-.79-.3-1.09 0l-3.61 3.61c-1.2-.99-2.7-1.64-4.33-1.79V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.04c-3.81.36-6.86 3.4-7.21 7.21H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.04c.15 1.63.8 3.13 1.79 4.33l-3.61 3.61c-.3.3-.3.79 0 1.09.16.14.35.22.55.22.2 0 .39-.08.54-.23L21.77 3.31c.31-.3.31-.78 0-1.08ZM8.88 12c0-1.72 1.4-3.12 3.12-3.12.58 0 1.12.17 1.58.45l-4.25 4.25c-.28-.46-.45-1-.45-1.58Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M4.77 10.012c-.18.63-.27 1.3-.27 1.99 0 2.01.79 3.84 2.08 5.19M17.21 6.6A7.494 7.494 0 0 0 12 4.5c-1.92 0-3.67.72-5 1.91M12 4V2M4 12H2M12 20v2M20 12h2M14.12 9.88l-4.24 4.24a2.996 2.996 0 1 1 4.24-4.24ZM22 2 2 22",
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
    d: "m18.939 8.059-3.83 3.83c.01.04.01.07.01.11 0 1.72-1.4 3.12-3.12 3.12-.04 0-.07 0-.11-.01l-3.83 3.83a7.77 7.77 0 0 0 3.94 1.06c4.41 0 8-3.59 8-8 0-1.43-.38-2.78-1.06-3.94ZM17.65 6.35 14.2 9.8c-.56-.57-1.34-.92-2.2-.92-1.72 0-3.12 1.4-3.12 3.12 0 .86.35 1.64.92 2.2l-3.45 3.45A7.975 7.975 0 0 1 4 12c0-4.41 3.59-8 8-8 2.2 0 4.2.9 5.65 2.35Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m14.199 9.799-4.4 4.4c-.57-.56-.92-1.34-.92-2.2 0-1.72 1.4-3.12 3.12-3.12.86 0 1.64.35 2.2.92ZM12.75 2v2.04h-.01C12.5 4.01 12.25 4 12 4s-.5.01-.74.04h-.01V2c0-.41.34-.75.75-.75s.75.34.75.75ZM4 12c0 .25.01.51.04.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.04c-.03.24-.04.5-.04.75ZM12.75 19.96V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.04h.01c.24.03.49.04.74.04s.5-.01.74-.04h.01ZM22.75 12c0 .41-.34.75-.75.75h-2.04c.03-.24.04-.5.04-.75s-.01-.51-.04-.75H22c.41 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M17.21 6.6A7.503 7.503 0 0 0 6.58 17.19M12 4V2M4 12H2M12 20v2M20 12h2",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m14.12 9.88-4.24 4.24a2.996 2.996 0 1 1 4.24-4.24ZM22 2 2 22",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 20.248c-1.15 0-2.26-.23-3.3-.69a.76.76 0 0 1-.39-.99.76.76 0 0 1 .99-.39c.85.37 1.76.56 2.7.56 3.72 0 6.75-3.03 6.75-6.75 0-.94-.19-1.85-.56-2.7a.751.751 0 1 1 1.38-.6c.46 1.04.69 2.15.69 3.3-.01 4.56-3.71 8.26-8.26 8.26ZM6.58 17.94c-.2 0-.39-.08-.54-.23A8.217 8.217 0 0 1 3.75 12c0-4.55 3.7-8.25 8.25-8.25 2.15 0 4.18.82 5.73 2.31.3.29.31.76.02 1.06-.29.3-.76.31-1.06.02A6.729 6.729 0 0 0 12 5.25c-3.72 0-6.75 3.03-6.75 6.75 0 1.75.67 3.41 1.88 4.67.29.3.28.77-.02 1.06-.15.14-.34.21-.53.21Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.88 14.87c-.19 0-.38-.07-.53-.22-.71-.71-1.1-1.65-1.1-2.65 0-2.07 1.68-3.75 3.75-3.75 1 0 1.94.39 2.65 1.1.29.29.29.77 0 1.06l-4.24 4.24c-.15.15-.34.22-.53.22ZM12 9.75c-1.24 0-2.25 1.01-2.25 2.25 0 .34.08.67.22.97l3-3c-.3-.14-.63-.22-.97-.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.21 6.6A7.503 7.503 0 006.58 17.19M12 4V2M4 12H2"
  }), /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M12 20v2M20 12h2"
  })), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M14.12 9.88l-4.24 4.24a2.996 2.996 0 114.24-4.24zM22 2L2 22"
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

var GpsSlash = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
GpsSlash.displayName = 'GpsSlash';

module.exports = GpsSlash;
