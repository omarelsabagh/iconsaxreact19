'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17.02 2.718-3.48 1.74c-.97.48-2.1.48-3.07 0l-3.49-1.75C4 1.218.85 4.438 2.41 7.388l.82 1.54c.11.21.29.38.51.48l12.65 5.69c.52.23 1.13.02 1.39-.48l3.81-7.24c1.55-2.94-1.59-6.16-4.57-4.66ZM15.6 16.31l-8.28-3.73c-.93-.42-1.87.58-1.39 1.48l3.04 5.77c1.29 2.45 4.79 2.45 6.08 0l1.07-2.04c.28-.55.04-1.22-.52-1.48Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.071 7.698c-1.45-2.75 1.48-5.74 4.26-4.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0l-3.67-6.97",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17.02 2.718-3.48 1.74c-.97.48-2.1.48-3.07 0l-3.49-1.75C4 1.218.85 4.438 2.41 7.388l.82 1.54c.11.21.29.38.51.48l12.65 5.69c.52.23 1.13.02 1.39-.48l3.81-7.24c1.55-2.94-1.59-6.16-4.57-4.66Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "m15.6 16.31-8.28-3.73c-.93-.42-1.87.58-1.39 1.48l3.04 5.77c1.29 2.45 4.79 2.45 6.08 0l1.07-2.04c.28-.55.04-1.22-.52-1.48Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.17 19.29 3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.002 21.749a3.93 3.93 0 0 1-3.49-2.11l-6.1-11.59c-.82-1.55-.55-3.35.67-4.6 1.22-1.25 3.02-1.55 4.58-.77l3.24 1.62c.68.34 1.5.34 2.19 0l3.24-1.62c1.57-.78 3.37-.48 4.59.77 1.22 1.25 1.49 3.05.67 4.6l-6.1 11.59a3.93 3.93 0 0 1-3.49 2.11Zm-6.12-18c-.71 0-1.33.34-1.73.75-.6.62-1.03 1.69-.42 2.85l6.1 11.59c.43.82 1.24 1.31 2.16 1.31.92 0 1.73-.49 2.16-1.31l6.1-11.59c.61-1.16.19-2.24-.42-2.85-.6-.61-1.66-1.06-2.84-.48l-3.24 1.62c-1.11.55-2.42.55-3.53 0l-3.23-1.62c-.38-.19-.76-.27-1.11-.27Z",
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
    d: "M9.17 19.29L3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0z"
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

var DirectDown = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
DirectDown.displayName = 'DirectDown';

module.exports = DirectDown;
