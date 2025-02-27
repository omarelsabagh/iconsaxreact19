'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m15.25 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2L14 11.05 8.45 6.89a.76.76 0 0 0-1.05.15c-.25.33-.18.8.15 1.05l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2L14 12.92l7.55 5.65c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35l-7.2-5.39Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.5 3C7.43 3 9 4.57 9 6.5S7.43 10 5.5 10 2 8.43 2 6.5M5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM22 6 8.65 15.98M22 17.97 8.65 7.98",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "m15.25 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2L14 11.05 8.45 6.9a.75.75 0 0 0-.9 1.2l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2l6.26-4.68 7.55 5.65c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35l-7.21-5.4Z",
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
    d: "M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 6L8.65 15.98M22 17.97L8.65 7.98"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.5 10.75A4.26 4.26 0 0 1 1.25 6.5 4.26 4.26 0 0 1 5.5 2.25 4.26 4.26 0 0 1 9.75 6.5a4.26 4.26 0 0 1-4.25 4.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75S3.98 9.25 5.5 9.25 8.25 8.02 8.25 6.5 7.02 3.75 5.5 3.75ZM5.5 21.75a4.26 4.26 0 0 1-4.25-4.25 4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.65 16.73a.75.75 0 0 1-.45-1.35L21.55 5.4a.75.75 0 0 1 .9 1.2L9.1 16.58c-.13.1-.29.15-.45.15Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 18.719a.76.76 0 0 1-.45-.15L8.2 8.589a.75.75 0 0 1 .9-1.2l13.35 9.98a.75.75 0 0 1-.45 1.35Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
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
    d: "M22 6 8.65 15.98M22 17.97 8.65 7.98"
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

var Scissor = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Scissor.displayName = 'Scissor';

module.exports = Scissor;
