'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.32 3H5.09C3.1 3 2.1 4.01 2.1 6.02V22h5.4v-3.75a.749.749 0 1 1 1.5 0V22h5.3V6.02c0-2.01-.99-3.02-2.98-3.02Zm-.57 9.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M23 21.251h-2.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H1c-.41 0-.75.34-.75.75s.34.75.75.75h18.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H23c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M1 22h22M19.78 22.01v-4.46M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2ZM2.1 6.02C2.1 4.01 3.1 3 5.09 3h6.23c1.99 0 2.98 1.01 2.98 3.02V22M2.1 22.002v-11.99M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75",
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
    opacity: ".4",
    d: "M2.1 22.002V6.032c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02v15.97",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.75 9H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM10.75 12.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.25 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M23 21.251h-2.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H1c-.41 0-.75.34-.75.75s.34.75.75.75h18.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H23c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M1 22h22M19.78 22.01v-4.46M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2ZM2.1 22V6.03c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02V22M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75",
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
    d: "M23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.781 22.76c-.41 0-.75-.34-.75-.75v-4.46c0-.41.34-.75.75-.75s.75.34.75.75v4.46c0 .41-.33.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.8 18.299c-1.63 0-2.95-1.32-2.95-2.95v-2.27a2.949 2.949 0 1 1 5.9 0v2.27c0 1.63-1.32 2.95-2.95 2.95Zm0-6.66c-.8 0-1.45.65-1.45 1.45v2.27a1.451 1.451 0 0 0 2.9 0v-2.27c0-.8-.65-1.45-1.45-1.45ZM14.3 22.752c-.41 0-.75-.34-.75-.75V6.032c0-1.59-.67-2.27-2.23-2.27H5.09c-1.57 0-2.25.68-2.25 2.27v15.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.032c0-2.43 1.33-3.77 3.75-3.77h6.23c2.41 0 3.73 1.34 3.73 3.77v15.97c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.75 9H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM10.75 12.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.25 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M1 22h22",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M19.78 22.01v-4.46",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2ZM2.1 22.002V6.032c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02v15.97",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75",
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

var Building4 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Building4.displayName = 'Building4';

module.exports = Building4;
