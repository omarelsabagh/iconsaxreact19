'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 21.251h-1.25v-10.25c0-2.42-1.33-3.75-3.75-3.75h-4.25v-1.23c.58.14 1.16.22 1.75.22.94 0 1.88-.18 2.78-.54.28-.11.47-.39.47-.7v-3c0-.25-.12-.48-.33-.62a.76.76 0 0 0-.7-.08c-1.43.57-3.01.57-4.44 0a.76.76 0 0 0-.7.08c-.21.14-.33.37-.33.62v5.25H7c-2.42 0-3.75 1.33-3.75 3.75v10.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-14.76 0H4.75v-8.5h2.49v8.5Zm4 0h-2.5v-8.5h2.5v8.5Zm4 0h-2.5v-8.5h2.5v8.5Zm4.01 0h-2.51v-8.5h2.51v8.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2ZM12 5v3M4 15.91V22h16V11c0-2-1-3-3-3H7c-2 0-3 1-3 3v1M4 12h15.42",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.99 12v10M11.99 12v10M15.99 12v10",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M17.42 1.381a.76.76 0 0 0-.7-.08c-1.43.57-3.01.57-4.44 0a.76.76 0 0 0-.7.08c-.21.14-.33.37-.33.62v6c0 .41.34.75.75.75s.75-.34.75-.75v-1.98c.58.14 1.16.22 1.75.22.94 0 1.88-.18 2.78-.54.28-.11.47-.39.47-.7v-3c0-.25-.12-.48-.33-.62Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 21.25h-1.25V11c0-2.42-1.33-3.75-3.75-3.75H7c-2.42 0-3.75 1.33-3.75 3.75v10.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-2.75-8.5v8.5h-2.51v-8.5h2.51Zm-8.01 8.5h-2.5v-8.5h2.5v8.5Zm1.5-8.5h2.5v8.5h-2.5v-8.5Zm-7.99 0h2.49v8.5H4.75v-8.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2ZM12 5v3M17 8H7c-2 0-3 1-3 3v11h16V11c0-2-1-3-3-3ZM4.58 12h14.84",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.99 12v10M11.99 12v10M15.99 12v10",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 6.23c-.94 0-1.88-.18-2.78-.54a.753.753 0 0 1-.47-.7v-3c0-.25.12-.48.33-.62a.76.76 0 0 1 .7-.08c1.43.57 3.01.57 4.44 0a.76.76 0 0 1 .7.08c.21.14.33.37.33.62v3c0 .31-.19.58-.47.7-.9.36-1.84.54-2.78.54Zm-1.75-1.76c1.14.35 2.36.35 3.5 0V3.02c-1.15.28-2.35.28-3.5 0v1.45Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 8.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20 22.75H4c-.41 0-.75-.34-.75-.75V11c0-2.42 1.33-3.75 3.75-3.75h10c2.42 0 3.75 1.33 3.75 3.75v11c0 .41-.34.75-.75.75Zm-15.25-1.5h14.5V11c0-1.58-.67-2.25-2.25-2.25H7c-1.58 0-2.25.67-2.25 2.25v10.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.42 12.75H4.58c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.84c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.74 12h-1.5v10h1.5V12ZM12.74 12h-1.5v10h1.5V12ZM16.74 12h-1.5v10h1.5V12Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2ZM12 5v3M17 8H7c-2 0-3 1-3 3v11h16V11c0-2-1-3-3-3ZM4.58 12h14.84",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7.99 12v10M11.99 12v10M15.99 12v10",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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

var Courthouse = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Courthouse.displayName = 'Courthouse';

module.exports = Courthouse;
