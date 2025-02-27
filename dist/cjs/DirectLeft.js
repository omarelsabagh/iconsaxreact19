'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m21.292 17.022-1.74-3.48c-.48-.97-.48-2.1 0-3.07l1.74-3.48c1.49-2.99-1.72-6.13-4.67-4.57l-1.54.82c-.21.11-.38.29-.48.51l-5.7 12.64c-.23.52-.02 1.13.48 1.39l7.24 3.81c2.95 1.56 6.16-1.59 4.67-4.57ZM7.69 15.6l3.73-8.28c.42-.93-.58-1.87-1.48-1.39L4.17 8.96c-2.45 1.29-2.45 4.79 0 6.08l2.04 1.07c.55.29 1.22.06 1.48-.51Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.3 3.071c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66l6.97-3.67",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m21.292 17.022-1.74-3.48c-.48-.97-.48-2.1 0-3.07l1.74-3.48c1.49-2.99-1.72-6.13-4.67-4.57l-1.54.82c-.21.11-.38.29-.48.51l-5.7 12.64c-.23.52-.02 1.13.48 1.39l7.24 3.81c2.95 1.56 6.16-1.59 4.67-4.57Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "m7.69 15.6 3.73-8.28c.42-.93-.58-1.87-1.48-1.39L4.17 8.96c-2.45 1.29-2.45 4.79 0 6.08l2.04 1.07c.55.29 1.22.06 1.48-.51Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m4.71 9.17 11.59-6.1c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.81 22.061c-.63 0-1.26-.15-1.86-.47l-11.59-6.1a3.93 3.93 0 0 1-2.11-3.49c0-1.47.81-2.81 2.11-3.49l11.59-6.1c1.55-.81 3.35-.55 4.6.67 1.25 1.22 1.55 3.02.77 4.58l-1.62 3.24c-.34.68-.34 1.5 0 2.19l1.62 3.24c.78 1.56.48 3.36-.77 4.58-.77.76-1.74 1.15-2.74 1.15Zm-.01-18.62c-.36 0-.75.09-1.15.3l-11.59 6.1c-.82.43-1.31 1.24-1.31 2.16 0 .92.49 1.73 1.31 2.16l11.59 6.1c1.16.61 2.24.19 2.85-.42.62-.6 1.06-1.67.48-2.84l-1.62-3.24a3.982 3.982 0 0 1 0-3.53l1.62-3.24c.59-1.17.14-2.24-.48-2.84-.4-.39-1-.71-1.7-.71Z",
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
    d: "M4.71 9.17l11.59-6.1c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66z"
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

var DirectLeft = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
DirectLeft.displayName = 'DirectLeft';

module.exports = DirectLeft;
