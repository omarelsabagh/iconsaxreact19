'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m16.51 5.01-1.96-1.96c-1.4-1.4-3.7-1.4-5.1 0L7.49 5.01c-.39.39-.39 1.03 0 1.42l3.81 3.81c.39.39 1.02.39 1.41 0l3.81-3.81c.38-.39.38-1.03-.01-1.42ZM5.01 7.492l-1.96 1.96c-1.4 1.4-1.4 3.7 0 5.1l1.96 1.96c.39.39 1.02.39 1.41 0l3.81-3.81a.996.996 0 0 0 0-1.41l-3.8-3.8c-.39-.39-1.03-.39-1.42 0ZM20.95 9.452l-1.96-1.96a.996.996 0 0 0-1.41 0l-3.81 3.81a.996.996 0 0 0 0 1.41l3.81 3.81c.39.39 1.02.39 1.41 0l1.96-1.96c1.4-1.41 1.4-3.71 0-5.11ZM7.49 18.99l1.96 1.96c1.4 1.4 3.7 1.4 5.1 0l1.96-1.96a.996.996 0 0 0 0-1.41l-3.81-3.81a.996.996 0 0 0-1.41 0l-3.81 3.81c-.38.38-.38 1.02.01 1.41Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m6.74 18.242-3.68-3.68c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.4 1.4 3.7 0 5.11l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0M6.25 6.25l11.5 11.5M15.5 8.5l-9.25 9.25",
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
    d: "m20.95 14.55-2.67 2.67-1.06 1.06-2.67 2.67c-1.4 1.4-3.7 1.4-5.1 0l-2.67-2.67-1.06-1.06-2.67-2.67c-1.4-1.4-1.4-3.7 0-5.1l2.67-2.67 1.06-1.06 2.67-2.67c1.4-1.4 3.7-1.4 5.1 0l2.67 2.67 1.06 1.06 2.67 2.67c1.4 1.4 1.4 3.7 0 5.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m13.06 11.999 5.22 5.22-1.06 1.06-5.22-5.22-5.22 5.22-1.06-1.06 5.22-5.22-5.22-5.22 1.06-1.06 5.22 5.22 5.22-5.22 1.06 1.06-5.22 5.22Z",
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
    d: "M20.95 14.55l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11zM6.25 6.25l11.5 11.5M17.75 6.25l-11.5 11.5"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75c-1.17 0-2.26-.45-3.08-1.27l-6.39-6.39a4.334 4.334 0 0 1-1.27-3.08c0-1.16.45-2.26 1.27-3.08l6.39-6.39c.82-.82 1.92-1.27 3.08-1.27 1.16 0 2.26.45 3.08 1.27l6.39 6.39c.82.82 1.27 1.92 1.27 3.08 0 1.16-.45 2.26-1.27 3.08l-6.39 6.39c-.82.82-1.91 1.27-3.08 1.27Zm0-20c-.77 0-1.49.3-2.02.83L3.59 9.97c-.54.54-.83 1.26-.83 2.02s.3 1.49.83 2.02l6.39 6.39c1.07 1.07 2.97 1.07 4.04 0l6.39-6.39c.54-.54.83-1.25.83-2.02s-.3-1.49-.83-2.02l-6.39-6.39c-.53-.53-1.25-.83-2.02-.83Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.75 18.501c-.19 0-.38-.07-.53-.22l-11.5-11.5a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l11.5 11.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6.25 18.501c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l11.5-11.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-11.5 11.5c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m20.95 14.55-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m6.25 6.25 11.5 11.5M17.75 6.25l-11.5 11.5"
  })));
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

var MainComponent = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MainComponent.displayName = 'MainComponent';

module.exports = MainComponent;
