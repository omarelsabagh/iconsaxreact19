'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM8.73 7.66c.81 0 1.48.66 1.48 1.48 0 .81-.66 1.48-1.48 1.48-.81 0-1.48-.66-1.48-1.48s.66-1.48 1.48-1.48Zm.12 8.14c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.85 15.8Zm6.42.54c-.81 0-1.48-.66-1.48-1.48 0-.81.66-1.48 1.48-1.48.81 0 1.48.66 1.48 1.48s-.66 1.48-1.48 1.48Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m8.32 15.27 6.54-6.54M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.269 16.089a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z",
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
    d: "M8.322 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.55 6.55c-.15.15-.34.22-.53.22ZM8.73 7.66c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48a1.49 1.49 0 0 0-1.48-1.48ZM15.269 13.39c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48s-.66-1.48-1.48-1.48Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m8.57 15.27 6.54-6.54M8.98 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.52 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.568 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.55 6.55c-.15.15-.34.22-.53.22ZM8.98 11.108c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98Zm0-2.45a.48.48 0 0 0-.48.48c0 .27.21.48.48.48s.48-.21.48-.48a.48.48 0 0 0-.48-.48ZM15.519 16.839c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98Zm0-2.45a.48.48 0 0 0-.48.48c0 .27.21.48.48.48s.48-.21.48-.48-.21-.48-.48-.48Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "m8.32 15.27 6.54-6.54M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.269 16.089a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var PercentageCircle = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
PercentageCircle.displayName = 'PercentageCircle';

module.exports = PercentageCircle;
