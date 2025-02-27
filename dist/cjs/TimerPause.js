'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.89 3.45H9.11c-.4 0-.72-.32-.72-.72 0-.4.32-.73.72-.73h5.78c.4 0 .72.32.72.72 0 .4-.32.73-.72.73ZM14 19.968v-2.94c0-1.81 1.22-3.03 3.03-3.03h2.94c.23 0 .45.02.66.06.02-.24.04-.48.04-.73 0-4.79-3.89-8.68-8.67-8.68-4.78 0-8.67 3.89-8.67 8.68 0 4.78 3.89 8.67 8.67 8.67.85 0 1.66-.14 2.44-.36a3.22 3.22 0 0 1-.44-1.67Zm-1.25-6.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.97 15h-2.93c-1.28 0-2.04.76-2.04 2.03v2.94c0 1.27.76 2.03 2.04 2.03h2.93c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm-2.05 5.06c0 .32-.26.58-.59.58a.58.58 0 0 1-.58-.58v-3.12c0-.32.26-.58.58-.58.33 0 .59.26.59.58v3.12Zm2.33 0c0 .32-.26.58-.58.58-.32 0-.59-.26-.59-.58v-3.12c0-.32.27-.58.59-.58.32 0 .58.26.58.58v3.12Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.01 5.46c1.2-.61 2.55-.96 3.99-.96 4.83 0 8.75 3.92 8.75 8.75M12 21.998c-4.83 0-8.75-3.92-8.75-8.75 0-1.98.66-3.8 1.76-5.26M12 8v5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 2h6",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 17v4M16 17v4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM14.89 3.45H9.11c-.4 0-.72-.32-.72-.72 0-.4.32-.73.72-.73h5.78c.4 0 .72.32.72.72 0 .4-.32.73-.72.73Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M15 19.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94c.19 0 .36.02.53.06.11-.56.17-1.14.17-1.73 0-4.78-3.89-8.67-8.67-8.67-4.78 0-8.67 3.89-8.67 8.67C3.33 18.11 7.22 22 12 22c1.21 0 2.36-.25 3.41-.7-.26-.34-.41-.78-.41-1.33Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.97 15h-2.93c-1.28 0-2.04.76-2.04 2.03v2.93c0 1.27.76 2.03 2.03 2.03h2.93c1.27 0 2.03-.76 2.03-2.03v-2.93C22 15.76 21.24 15 19.97 15Zm-2.05 5.06a.58.58 0 0 1-1.16 0v-3.11a.58.58 0 0 1 1.16 0v3.11Zm2.33 0a.58.58 0 0 1-1.16 0v-3.11a.58.58 0 0 1 1.16 0v3.11Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75M12 8v5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 2h6",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 17v4M16 17v4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75c-5.24 0-9.5-4.26-9.5-9.5s4.26-9.5 9.5-9.5 9.5 4.26 9.5 9.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM19 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75ZM16 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 8v5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M9 2h6",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M19 17v4M16 17v4",
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

var TimerPause = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
TimerPause.displayName = 'TimerPause';

module.exports = TimerPause;
