'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22.75 17.5c0 .41-.34.75-.75.75h-7v.25c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3v-.25c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h7c.41 0 .75.34.75.75ZM22.75 6.5c0 .41-.34.75-.75.75h-3v.25c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7V5.5c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h3c.41 0 .75.34.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 17.5h-7M5 17.5H2M22 6.5h-3M9 6.5H2M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2ZM17 3.5c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2h2.03",
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
    d: "M22.75 17.5c0 .41-.34.75-.75.75h-7v.25c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3v-.25c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h7c.41 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M22.75 6.5c0 .41-.34.75-.75.75h-3v.25c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7V5.5c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h3c.41 0 .75.34.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 17.5h-7M5 17.5H2M22 6.5h-3M9 6.5H2M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2ZM11 3.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2Z",
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
    d: "M22 18.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 18.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM22 7.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM9 7.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 21.25H7c-1.72 0-2.75-1.03-2.75-2.75v-2c0-1.72 1.03-2.75 2.75-2.75h6c1.72 0 2.75 1.03 2.75 2.75v2c0 1.72-1.03 2.75-2.75 2.75Zm-6-6c-.89 0-1.25.36-1.25 1.25v2c0 .89.36 1.25 1.25 1.25h6c.89 0 1.25-.36 1.25-1.25v-2c0-.89-.36-1.25-1.25-1.25H7ZM17 10.25h-6c-1.72 0-2.75-1.03-2.75-2.75v-2c0-1.72 1.03-2.75 2.75-2.75h6c1.72 0 2.75 1.03 2.75 2.75v2c0 1.72-1.03 2.75-2.75 2.75Zm-6-6c-.89 0-1.25.36-1.25 1.25v2c0 .89.36 1.25 1.25 1.25h6c.89 0 1.25-.36 1.25-1.25v-2c0-.89-.36-1.25-1.25-1.25h-6Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M22 17.5h-7M5 17.5H2M22 6.5h-3M9 6.5H2",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2ZM11 3.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2Z",
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

var Candle2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Candle2.displayName = 'Candle2';

module.exports = Candle2;
