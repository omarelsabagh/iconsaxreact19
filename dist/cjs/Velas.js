'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M21 3.148H3c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM4.04 6.238h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0L3.11 7.948c-.48-.74.05-1.71.93-1.71z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 3.031h20M3.7 9l-.59-.93c-.48-.74.06-1.71.93-1.71h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0l-5.26-8.18",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 3.148H3c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM4.04 6.238h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0L3.1 7.948c-.47-.74.06-1.71.94-1.71Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 3h20M4 6.4h16c.9 0 1.4 1 .9 1.7l-8 12.4c-.4.7-1.4.7-1.9 0L3 8.1c-.4-.8.2-1.7 1-1.7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 3.781H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 21.72c-.64 0-1.22-.32-1.57-.85L2.47 8.48c-.37-.57-.39-1.3-.07-1.9.33-.6.95-.97 1.63-.97h15.93c.68 0 1.31.37 1.63.97.33.6.3 1.33-.07 1.9l-7.96 12.39c-.34.53-.92.85-1.56.85ZM4.04 7.11c-.19 0-.29.13-.32.19-.03.06-.09.21.01.37l7.96 12.39c.09.14.23.17.3.17.07 0 .21-.02.3-.17l7.96-12.39c.1-.16.04-.31.01-.37a.344.344 0 0 0-.32-.19H4.04Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 3.031h20",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M4.04 6.36h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0L3.11 8.07c-.48-.74.05-1.71.93-1.71Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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

var Velas = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Velas.displayName = 'Velas';

module.exports = Velas;
