'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.25 5.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4ZM10.25 16.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.15 11.751a.48.48 0 0 1 .48.48v1.39c0 2.28-.73 3.01-3.01 3.01h-1.39a.48.48 0 0 1-.48-.48c0-2.66-1.24-3.9-3.9-3.9a.48.48 0 0 1-.48-.48v-1.39c0-2.28.73-3.01 3.01-3.01h1.39a.48.48 0 0 1 .48.48c0 2.66 1.24 3.9 3.9 3.9Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 5.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 11 13 10.1 13 7.85v-2.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15ZM11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.96 6.751c.41-.09.89-.13 1.42-.13H13v1.23c0 2.25.9 3.15 3.15 3.15h1.23v2.62c0 2.69-1.07 3.76-3.76 3.76H11v-1.23c0-2.25-.9-3.15-3.15-3.15H6.62v-2.62",
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
    d: "M21.25 5.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4ZM10.25 16.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.63 11.751v1.87c0 2.28-.73 3.01-3.01 3.01h-1.87v-.48c0-2.66-1.24-3.9-3.9-3.9h-.48v-1.87c0-2.28.73-3.01 3.01-3.01h1.87v.48c0 2.66 1.24 3.9 3.9 3.9h.48Z",
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
    d: "M22 5.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 11 13 10.1 13 7.85v-2.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15zM11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.38 11v2.62c0 2.69-1.07 3.76-3.76 3.76H11v-1.23C11 13.9 10.1 13 7.85 13H6.62v-2.62c0-2.69 1.07-3.76 3.76-3.76H13v1.23c0 2.25.9 3.15 3.15 3.15h1.23z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.85 11.75h-2.7c-2.66 0-3.9-1.24-3.9-3.9v-2.7c0-2.66 1.24-3.9 3.9-3.9h2.7c2.66 0 3.9 1.24 3.9 3.9v2.7c0 2.66-1.24 3.9-3.9 3.9Zm-2.7-9c-1.84 0-2.4.56-2.4 2.4v2.7c0 1.84.56 2.4 2.4 2.4h2.7c1.84 0 2.4-.56 2.4-2.4v-2.7c0-1.84-.56-2.4-2.4-2.4h-2.7ZM7.85 22.75h-2.7c-2.66 0-3.9-1.24-3.9-3.9v-2.7c0-2.66 1.24-3.9 3.9-3.9h2.7c2.66 0 3.9 1.24 3.9 3.9v2.7c0 2.66-1.24 3.9-3.9 3.9Zm-2.7-9c-1.84 0-2.4.56-2.4 2.4v2.7c0 1.84.56 2.4 2.4 2.4h2.7c1.84 0 2.4-.56 2.4-2.4v-2.7c0-1.84-.56-2.4-2.4-2.4h-2.7Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.621 18.131h-2.62c-.41 0-.75-.34-.75-.75v-1.23c0-1.84-.56-2.4-2.4-2.4h-1.23c-.41 0-.75-.34-.75-.75v-2.62c0-3.12 1.39-4.51 4.51-4.51h2.62c.41 0 .75.34.75.75v1.23c0 1.84.56 2.4 2.4 2.4h1.23c.41 0 .75.34.75.75v2.62c0 3.12-1.39 4.51-4.51 4.51Zm-1.87-1.5h1.87c2.28 0 3.01-.73 3.01-3.01v-1.87h-.48c-2.66 0-3.9-1.24-3.9-3.9v-.48h-1.87c-2.28 0-3.01.73-3.01 3.01v1.87h.48c2.66 0 3.9 1.24 3.9 3.9v.48Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 5.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 11 13 10.1 13 7.85v-2.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15ZM11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M17.38 11.001v2.62c0 2.69-1.07 3.76-3.76 3.76H11v-1.23c0-2.25-.9-3.15-3.15-3.15H6.62v-2.62c0-2.69 1.07-3.76 3.76-3.76H13v1.23c0 2.25.9 3.15 3.15 3.15h1.23Z",
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

var BackwardItem = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
BackwardItem.displayName = 'BackwardItem';

module.exports = BackwardItem;
