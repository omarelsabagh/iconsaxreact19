'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65C3.63 5.9 2 6.84 2 8.34ZM11.762 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83c1.29-.75 1.29-2.63 0-3.38l-3.17-1.83-3.18-1.83c-1.29-.75-2.92.19-2.92 1.69Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.68 6.65c-1.3-.75-2.93.19-2.93 1.69v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-2.18-1.26",
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
    d: "M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65C3.63 5.9 2 6.84 2 8.34Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.762 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83c1.29-.75 1.29-2.63 0-3.38l-3.17-1.83-3.18-1.83c-1.29-.75-2.92.19-2.92 1.69Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34ZM11.76 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-3.17-1.83-3.17-1.82c-1.3-.77-2.93.17-2.93 1.67Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.95 18.359c-.46 0-.93-.12-1.35-.37a2.663 2.663 0 0 1-1.35-2.34v-7.32c0-.98.5-1.85 1.35-2.34.85-.49 1.86-.49 2.7 0l6.34 3.66c.29.17.52.37.7.59.11.13.17.3.17.47v2.56c0 .17-.06.34-.17.47-.18.22-.41.42-.68.58l-6.36 3.68c-.42.24-.88.36-1.35.36Zm0-11.22c-.21 0-.41.05-.6.16-.38.22-.6.61-.6 1.04v7.32c0 .43.22.82.6 1.04.38.22.82.22 1.2 0l6.34-3.66c.04-.02.08-.05.11-.08v-1.93a.834.834 0 0 0-.12-.08l-6.33-3.65c-.19-.11-.39-.16-.6-.16Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.708 18.359c-.46 0-.93-.12-1.35-.37a2.663 2.663 0 0 1-1.35-2.34v-7.32c0-.98.5-1.85 1.35-2.34.85-.49 1.86-.49 2.7 0l6.34 3.66c.84.49 1.35 1.36 1.35 2.34 0 .98-.5 1.85-1.35 2.34l-6.34 3.66c-.42.25-.89.37-1.35.37Zm0-11.22c-.21 0-.41.05-.6.16-.38.22-.6.6-.6 1.04v7.32c0 .43.22.82.6 1.04.38.22.83.22 1.2 0l6.34-3.66c.38-.22.6-.61.6-1.04 0-.43-.22-.82-.6-1.04l-6.34-3.66c-.19-.11-.39-.16-.6-.16Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.762 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-3.17-1.83-3.17-1.82c-1.3-.77-2.93.17-2.93 1.67Z",
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

var Forward = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Forward.displayName = 'Forward';

module.exports = Forward;
