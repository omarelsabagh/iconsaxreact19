'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2C6.5 2 2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89C22 6.58 17.5 2 12 2Zm0 4.62c1.31 0 2.38 1.07 2.38 2.38 0 1.31-1.07 2.38-2.38 2.38-1.31 0-2.38-1.07-2.38-2.38 0-1.31 1.07-2.38 2.38-2.38Zm4.45 7.98A7.423 7.423 0 0 1 12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 0 1 .9-1.2 5.94 5.94 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 16.072v4.01c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89c0-5.6-4.5-10.18-10-10.18s-10 4.58-10 10.18",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 14a6.66 6.66 0 0 0 8 0M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
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
    d: "M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 0 1 .9-1.2 5.94 5.94 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2A7.423 7.423 0 0 1 12 16.07ZM12 11.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 14a6.66 6.66 0 0 0 8 0M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.33 22.75c-.42 0-.85-.15-1.18-.45l-2-1.83c-.08-.07-.24-.07-.33 0L9.83 22.3c-.66.61-1.69.6-2.35 0l-2-1.83c-.08-.07-.24-.07-.33 0l-.99.91c-.91.83-1.63.7-1.98.54-.35-.16-.94-.6-.94-1.85v-7.89c0-6.03 4.82-10.93 10.75-10.93s10.75 4.9 10.75 10.93v7.89c0 1.25-.59 1.7-.94 1.85-.35.15-1.07.29-1.98-.54l-1-.91c-.08-.07-.24-.07-.32 0l-2 1.83c-.32.3-.74.45-1.17.45ZM12 18.91c.42 0 .85.15 1.17.45l2 1.83c.08.07.24.07.32 0l2-1.83c.66-.6 1.69-.6 2.35 0l1 .91c.17.15.28.22.35.24.03-.07.06-.21.06-.45v-7.89c0-5.2-4.15-9.43-9.25-9.43s-9.25 4.23-9.25 9.43v7.89c0 .24.04.38.06.45.07-.03.19-.09.35-.24l1-.91c.66-.6 1.69-.6 2.35 0l2 1.83c.08.07.24.07.32 0l2-1.83c.32-.3.75-.45 1.17-.45Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 0 1 .9-1.2 5.94 5.94 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2A7.423 7.423 0 0 1 12 16.07ZM12 11.75c-1.52 0-2.75-1.23-2.75-2.75S10.48 6.25 12 6.25 14.75 7.48 14.75 9s-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M8 14a6.66 6.66 0 0 0 8 0M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
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

var Ghost = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Ghost.displayName = 'Ghost';

module.exports = Ghost;
