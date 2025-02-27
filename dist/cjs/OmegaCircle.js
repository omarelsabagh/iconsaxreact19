'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 15.25h-3.1c-.3 0-.57-.17-.69-.45a.75.75 0 0 1 .13-.81l1.62-1.79c.67-.75 1.05-1.7 1.05-2.68 0-1-.41-1.94-1.16-2.65A4.182 4.182 0 0 0 12 7.75c-1.06 0-2.1.41-2.85 1.12-.75.71-1.16 1.65-1.16 2.65 0 .98.37 1.93 1.05 2.68l1.61 1.8a.753.753 0 0 1-.56 1.26H7c-.41 0-.75-.34-.75-.75s.34-.76.75-.76h1.41l-.49-.54a5.507 5.507 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74 1.04-.99 2.41-1.53 3.88-1.53 1.47 0 2.84.54 3.88 1.53 1.03.98 1.63 2.35 1.63 3.74 0 1.35-.51 2.66-1.43 3.69l-.49.54H17c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17 16.5h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2C14.48 7.48 13.27 7 12 7c-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7",
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
    d: "M17 17.25h-3.1c-.3 0-.57-.17-.69-.45a.75.75 0 0 1 .13-.81l1.62-1.79c.67-.75 1.05-1.7 1.05-2.68 0-1-.41-1.94-1.16-2.65A4.182 4.182 0 0 0 12 7.75c-1.06 0-2.1.41-2.85 1.12-.75.71-1.16 1.65-1.16 2.65 0 .98.37 1.93 1.05 2.68l1.62 1.79a.753.753 0 0 1-.56 1.26H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.41l-.49-.54a5.507 5.507 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74A5.595 5.595 0 0 1 12 6.25c1.46 0 2.84.54 3.88 1.53 1.03.98 1.63 2.35 1.63 3.74 0 1.35-.51 2.66-1.43 3.69l-.49.54H17c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17 16.5h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2C14.48 7.48 13.27 7 12 7c-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17 17.25h-3.1c-.3 0-.57-.17-.69-.45a.75.75 0 0 1 .13-.81l1.62-1.79c.67-.75 1.05-1.7 1.05-2.68 0-1-.41-1.94-1.16-2.65A4.182 4.182 0 0 0 12 7.75c-1.06 0-2.1.41-2.85 1.12-.75.71-1.16 1.65-1.16 2.65 0 .98.37 1.93 1.05 2.68l1.62 1.79a.753.753 0 0 1-.56 1.26H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.41l-.49-.54a5.507 5.507 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74A5.595 5.595 0 0 1 12 6.25c1.46 0 2.84.54 3.88 1.53 1.03.98 1.63 2.35 1.63 3.74 0 1.35-.51 2.66-1.43 3.69l-.49.54H17c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M17 16.5h-3.1l1.62-1.79c.8-.89 1.24-2.02 1.24-3.18 0-1.2-.5-2.35-1.39-3.2C14.48 7.48 13.27 7 12 7c-1.26 0-2.47.48-3.37 1.33-.89.85-1.39 2-1.39 3.2 0 1.17.44 2.3 1.24 3.18l1.62 1.79H7",
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

var OmegaCircle = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
OmegaCircle.displayName = 'OmegaCircle';

module.exports = OmegaCircle;
