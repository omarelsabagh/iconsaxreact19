'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.998 19.75h-2.68c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81h-2.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04l-7.99 6.99c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81h2.68c.41 0 .75.34.75.75s-.34.75-.75.75ZM20 15h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2Zm-1.49 4.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1ZM5.469 2c-1.93 0-3.5 1.57-3.5 3.5S3.539 9 5.469 9s3.5-1.57 3.5-3.5S7.409 2 5.469 2Zm.04 4.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.469 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    stroke: color,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.969 22h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2M12.002 5h2.68c1.85 0 2.71 2.29 1.32 3.51l-7.99 6.99c-1.39 1.21-.53 3.5 1.31 3.5h2.68",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.488 5.5h.011M18.488 18.5h.011",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M5.469 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 15h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.001 19.75h-2.68c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81h-2.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04l-7.99 6.99c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81h2.68c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.512 19.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1ZM5.512 6.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.47 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM16.97 15h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2Z",
    stroke: color,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.486 5.5h.012M18.486 18.5h.012",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.512 6.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1ZM18.512 19.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.469 9.75a4.26 4.26 0 0 1-4.25-4.25 4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25c0 2.34-1.9 4.25-4.25 4.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75ZM19.969 22.75h-3c-1.52 0-2.75-1.23-2.75-2.75v-3c0-1.52 1.23-2.75 2.75-2.75h3c1.52 0 2.75 1.23 2.75 2.75v3c0 1.52-1.23 2.75-2.75 2.75Zm-3-7c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-3ZM12.001 19.75h-2.68c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81h-2.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04l-7.99 6.99c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81h2.68c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeWidth: "1.5",
    d: "M5.47 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM16.97 15h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2z",
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5.486 5.5h.011M18.486 18.5h.011"
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

var Routing2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Routing2.displayName = 'Routing2';

module.exports = Routing2;
