'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M8 21.75h-.05a.753.753 0 01-.7-.75c0-.57.07-1.1.22-1.59L9.26 6.89c.06-.41.44-.69.85-.64.41.06.7.44.64.85l-1.42 9.91c1.24-.75 2.59-.76 2.67-.76 3.72 0 6.75-3.03 6.75-6.75S15.72 2.75 12 2.75 5.25 5.78 5.25 9.5c0 1.1.27 2.19.78 3.15.19.37.05.82-.31 1.01-.37.19-.82.05-1.01-.31a8.307 8.307 0 01-.95-3.85c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25c-.09 0-2.21.04-2.97 1.75-.03.08-.07.16-.09.24l-.19 1.36a.78.78 0 01-.76.65zM14 21.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.09.1.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.5 9.5c0 4.14-3.36 7.5-7.5 7.5 0 0-2.69 0-3.66 2.2-.21.49-.34 1.08-.34 1.8l2-14",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.37 13a7.527 7.527 0 0 1-.87-3.5 7.503 7.503 0 0 1 13.52-4.48",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 21v0",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 21.75h-.05a.753.753 0 0 1-.7-.75c0-.57.07-1.1.22-1.59L9.26 6.89c.06-.41.44-.69.85-.64.41.06.7.44.64.85l-1.42 9.91c1.24-.75 2.59-.76 2.67-.76 3.72 0 6.75-3.03 6.75-6.75S15.72 2.75 12 2.75 5.25 5.78 5.25 9.5c0 1.1.27 2.19.78 3.15.19.37.05.82-.31 1.01-.37.19-.82.05-1.01-.31a8.307 8.307 0 0 1-.95-3.85c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25c-.09 0-2.21.04-2.97 1.75-.03.08-.07.16-.09.24l-.19 1.36a.78.78 0 0 1-.76.65Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M14 21.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.09.1.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.4 13c-.6-1-.9-2.2-.9-3.5C4.5 5.4 7.9 2 12 2s7.5 3.4 7.5 7.5S16.1 17 12 17c0 0-2.7 0-3.7 2.2-.2.5-.3 1.1-.3 1.8l2-14",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14 21v0",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 21.75h-.05a.753.753 0 0 1-.7-.75c0-.57.07-1.1.22-1.59L9.26 6.89c.06-.41.44-.69.85-.64.41.06.7.44.64.85l-1.42 9.91c1.24-.75 2.59-.76 2.67-.76 3.72 0 6.75-3.03 6.75-6.75S15.72 2.75 12 2.75 5.25 5.78 5.25 9.5c0 1.1.27 2.19.78 3.15.19.37.05.82-.31 1.01-.37.19-.82.05-1.01-.31a8.307 8.307 0 0 1-.95-3.85c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25c-.09 0-2.21.04-2.97 1.75-.03.08-.07.16-.09.24l-.19 1.36a.78.78 0 0 1-.76.65ZM14 21.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.09.1.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.37 13a7.527 7.527 0 0 1-.87-3.5C4.5 5.36 7.86 2 12 2c4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5 0 0-2.69 0-3.66 2.2-.21.49-.34 1.08-.34 1.8l2-14",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M13 21v0",
    stroke: color,
    strokeWidth: "2",
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

var Polkadot = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Polkadot.displayName = 'Polkadot';

module.exports = Polkadot;
