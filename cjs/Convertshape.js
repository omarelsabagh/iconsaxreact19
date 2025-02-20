'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 5.15v3.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 12 13 11.1 13 8.85v-3.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15ZM11 15.15v3.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-3.7C2 12.9 2.9 12 5.15 12h2.7c2.25 0 3.15.9 3.15 3.15ZM14.78 22a.752.752 0 0 1-.64-1.14l.97-1.62c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.18.3a5.728 5.728 0 0 0 4.29-5.54c0-.41.34-.75.75-.75s.74.34.74.76c0 3.98-3.24 7.22-7.22 7.22ZM2.75 9.97c-.41 0-.75-.33-.75-.75C2 5.24 5.24 2 9.22 2c.28 0 .52.15.66.38.13.24.13.52-.01.76L8.9 4.75c-.22.36-.68.48-1.03.26a.749.749 0 0 1-.26-1.03l.18-.3C5.33 4.32 3.5 6.56 3.5 9.22c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.85 2h-2.7C13.9 2 13 2.9 13 5.15v3.7c0 2.25.9 3.15 3.15 3.15h2.7C21.1 12 22 11.1 22 8.85V5.96M5.15 22h2.7c2.25 0 3.15-.9 3.15-3.15v-3.7C11 12.9 10.1 12 7.85 12h-2.7C2.9 12 2 12.9 2 15.15v3.01M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75",
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
    d: "M22 5.15v3.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 12 13 11.1 13 8.85v-3.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15ZM11 15.15v3.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-3.7C2 12.9 2.9 12 5.15 12h2.7c2.25 0 3.15.9 3.15 3.15Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.78 22a.752.752 0 0 1-.64-1.14l.97-1.62c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.18.3a5.728 5.728 0 0 0 4.29-5.54c0-.41.34-.75.75-.75s.74.34.74.76c0 3.98-3.24 7.22-7.22 7.22ZM2.75 9.97c-.41 0-.75-.33-.75-.75C2 5.24 5.24 2 9.22 2c.28 0 .52.15.66.38.13.24.13.52-.01.76L8.9 4.75c-.22.36-.68.48-1.03.26a.749.749 0 0 1-.26-1.03l.18-.3C5.33 4.32 3.5 6.56 3.5 9.22c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 5.15v3.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 12 13 11.1 13 8.85v-3.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15ZM11 15.15v3.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-3.7C2 12.9 2.9 12 5.15 12h2.7c2.25 0 3.15.9 3.15 3.15ZM22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.85 12.75h-2.7c-2.66 0-3.9-1.24-3.9-3.9v-3.7c0-2.66 1.24-3.9 3.9-3.9h2.7c2.66 0 3.9 1.24 3.9 3.9v3.7c0 2.66-1.24 3.9-3.9 3.9Zm-2.7-10c-1.84 0-2.4.56-2.4 2.4v3.7c0 1.84.56 2.4 2.4 2.4h2.7c1.84 0 2.4-.56 2.4-2.4v-3.7c0-1.84-.56-2.4-2.4-2.4h-2.7ZM7.85 22.75h-2.7c-2.66 0-3.9-1.24-3.9-3.9v-3.7c0-2.66 1.24-3.9 3.9-3.9h2.7c2.66 0 3.9 1.24 3.9 3.9v3.7c0 2.66-1.24 3.9-3.9 3.9Zm-2.7-10c-1.84 0-2.4.56-2.4 2.4v3.7c0 1.84.56 2.4 2.4 2.4h2.7c1.84 0 2.4-.56 2.4-2.4v-3.7c0-1.84-.56-2.4-2.4-2.4h-2.7ZM15 22.75a.745.745 0 0 1-.64-1.13l1.05-1.75c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.27-3.49 7.75-7.76 7.75ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.745.745 0 0 1 .64 1.13L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 5.15v3.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 12 13 11.1 13 8.85v-3.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15ZM11 15.15v3.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-3.7C2 12.9 2.9 12 5.15 12h2.7c2.25 0 3.15.9 3.15 3.15Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75",
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

var Convertshape = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Convertshape.displayName = 'Convertshape';

module.exports = Convertshape;
