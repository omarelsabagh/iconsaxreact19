'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.001 14.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76ZM20 18.75a.75.75 0 0 1-.6-1.2A9.17 9.17 0 0 0 21.25 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 0 1 1.2-.9c1.41 1.87 2.15 4.1 2.15 6.45 0 2.35-.74 4.58-2.15 6.45-.15.2-.37.3-.6.3ZM4 18.75c-.23 0-.45-.1-.6-.3-1.41-1.87-2.15-4.1-2.15-6.45 0-2.35.74-4.58 2.15-6.45a.75.75 0 0 1 1.2.9A9.17 9.17 0 0 0 2.75 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 0 1-.6 1.2ZM16.801 16.349a.75.75 0 0 1-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 0 1 1.2-.9 6.73 6.73 0 0 1 1.35 4.05c0 1.47-.47 2.88-1.35 4.05-.15.2-.37.3-.6.3ZM7.2 16.349c-.23 0-.45-.1-.6-.3a6.709 6.709 0 0 1-1.35-4.05c0-1.47.47-2.88 1.35-4.05a.75.75 0 0 1 1.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 0 1-.6 1.2Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M20 18c1.26-1.67 2-3.75 2-6s-.74-4.33-2-6M4 17.999a9.926 9.926 0 0 1-1.98-6.62M4 6c-.38.51-.72 1.06-1 1.64M16.8 15.598c.75-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6M7.2 8.398c-.75 1-1.2 2.25-1.2 3.6s.45 2.6 1.2 3.6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.001 14.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M20 18.75a.75.75 0 0 1-.6-1.2A9.17 9.17 0 0 0 21.25 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 0 1 1.2-.9c1.41 1.87 2.15 4.1 2.15 6.45 0 2.35-.74 4.58-2.15 6.45-.15.2-.37.3-.6.3ZM4 18.75c-.23 0-.45-.1-.6-.3-1.41-1.87-2.15-4.1-2.15-6.45 0-2.35.74-4.58 2.15-6.45a.75.75 0 0 1 1.2.9A9.17 9.17 0 0 0 2.75 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 0 1-.6 1.2ZM16.801 16.349a.75.75 0 0 1-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 0 1 1.2-.9 6.73 6.73 0 0 1 1.35 4.05c0 1.47-.47 2.88-1.35 4.05-.15.2-.37.3-.6.3ZM7.2 16.349c-.23 0-.45-.1-.6-.3a6.73 6.73 0 0 1-1.35-4.05c0-1.47.47-2.88 1.35-4.05a.75.75 0 0 1 1.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 0 1-.6 1.2Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 18c1.26-1.67 2-3.75 2-6s-.74-4.33-2-6M4 6c-1.26 1.67-2 3.75-2 6s.74 4.33 2 6M16.8 15.6c.75-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6M7.2 8.4C6.45 9.4 6 10.65 6 12s.45 2.6 1.2 3.6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 14.75c-1.52 0-2.75-1.23-2.75-2.75S10.48 9.25 12 9.25s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM20 18.75a.75.75 0 0 1-.6-1.2A9.17 9.17 0 0 0 21.25 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 0 1 1.2-.9c1.41 1.87 2.15 4.1 2.15 6.45 0 2.35-.74 4.58-2.15 6.45-.15.2-.37.3-.6.3ZM4 18.75c-.23 0-.45-.1-.6-.3-1.41-1.87-2.15-4.1-2.15-6.45 0-2.35.74-4.58 2.15-6.45a.75.75 0 0 1 1.2.9A9.17 9.17 0 0 0 2.75 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 0 1-.6 1.2ZM16.801 16.349a.75.75 0 0 1-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 0 1 1.2-.9 6.73 6.73 0 0 1 1.35 4.05c0 1.47-.47 2.88-1.35 4.05-.15.2-.37.3-.6.3ZM7.2 16.349c-.23 0-.45-.1-.6-.3a6.73 6.73 0 0 1-1.35-4.05c0-1.47.47-2.88 1.35-4.05a.75.75 0 0 1 1.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 0 1-.6 1.2Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20 18c1.26-1.67 2-3.75 2-6s-.74-4.33-2-6M4 6c-1.26 1.67-2 3.75-2 6s.74 4.33 2 6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M16.8 15.598c.75-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6M7.2 8.398c-.75 1-1.2 2.25-1.2 3.6s.45 2.6 1.2 3.6",
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

var Brodcast = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Brodcast.displayName = 'Brodcast';

module.exports = Brodcast;
