'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-.39 12.84c0 1.09-.85 1.94-1.94 1.94H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.7-1.63.96-1.71 2.77h1.91c1.09 0 1.94.85 1.94 1.94v1.49h-.01Zm6.14 0c0 1.09-.85 1.94-1.94 1.94h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.72-1.63.98-1.71 2.79h1.91c1.09 0 1.94.85 1.94 1.94v1.47Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68ZM7 12.159c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68ZM13.14 12.159c0-2.79.52-3.26 2.09-4.19",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.19 16.779h1.49c1.09 0 1.94-.85 1.94-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94H7.77c.08-1.81.5-2.08 1.71-2.79.36-.21.47-.67.26-1.03a.746.746 0 0 0-.65-.37c-.13 0-.26.03-.38.1-1.79 1.06-2.46 1.75-2.46 4.83v2.67c0 1.09.87 1.96 1.94 1.96ZM14.319 16.779h1.49c1.09 0 1.94-.85 1.94-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94h-1.91c.08-1.81.5-2.08 1.71-2.79.36-.21.47-.67.26-1.03a.746.746 0 0 0-.65-.37c-.13 0-.26.03-.38.1-1.79 1.06-2.46 1.75-2.46 4.83v2.67c.01 1.09.88 1.96 1.94 1.96Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68ZM7 12.16c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68ZM13.14 12.16c0-2.79.52-3.26 2.09-4.19",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.68 16.782H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49a1.933 1.933 0 0 1-1.94 1.93Zm-1.93-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44H7.75v.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83a.76.76 0 0 1 1.03.26c.21.35.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75ZM15.809 16.782h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49c0 1.07-.85 1.93-1.94 1.93Zm-1.92-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44h-1.93v.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.14 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83.36-.21.82-.09 1.03.26.21.36.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68ZM7 12.159c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68ZM13.14 12.159c0-2.79.52-3.26 2.09-4.19"
  })), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var QuoteDownCircle = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
QuoteDownCircle.displayName = 'QuoteDownCircle';

module.exports = QuoteDownCircle;
