'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.59 5h-.34V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3h-3.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3h-.34C7.36 5 6.5 5.86 6.5 6.91V12c0 2.2 1.5 4 4 4h.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-6h.75c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.5 7.96V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12c0 2.2 1.5 4 4 4h3c2.5 0 4-1.8 4-4M9.5 2v3M14.5 2v3M12 22v-6",
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
    d: "M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.25 2v3h-1.5V2c0-.41.34-.75.75-.75s.75.34.75.75ZM15.25 2v3h-1.5V2c0-.41.34-.75.75-.75s.75.34.75.75ZM12.75 16v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6h1.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16ZM9.5 2v3M14.5 2v3M12 22v-6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.5 16.75h-3c-2.75 0-4.75-2-4.75-4.75V6.92c0-1.47 1.2-2.67 2.67-2.67h7.17c1.47 0 2.67 1.2 2.67 2.67V12c-.01 2.75-2.01 4.75-4.76 4.75Zm-5.08-11c-.64 0-1.17.52-1.17 1.17V12c0 1.62 1 3.25 3.25 3.25h3c2.25 0 3.25-1.63 3.25-3.25V6.92c0-.64-.52-1.17-1.17-1.17H8.42Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM14.5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M9.5 2v3M14.5 2v3M12 22v-6",
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

var Electricity = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Electricity.displayName = 'Electricity';

module.exports = Electricity;
