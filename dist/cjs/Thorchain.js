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
    d: "M16.38 17.57l-10.3 4.34c-1.07.45-2-.88-1.21-1.73l7.81-8.48 4.05 4.12c.54.54.36 1.46-.35 1.75zM19.171 3.771l-6.49 7.93-4.05-4.1c-.54-.55-.36-1.47.35-1.76l8.94-3.75c1.04-.44 1.97.81 1.25 1.68z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m12.68 11.701 6.49-7.93c.71-.87-.22-2.12-1.26-1.68l-8.94 3.75c-.71.3-.89 1.21-.35 1.76l1.28 1.3m-3.82 13.01 10.3-4.34c.71-.3.89-1.21.35-1.76l-4.06-4.11-7.81 8.48c-.78.85.15 2.18 1.22 1.73Z",
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
    d: "m16.38 17.57-10.3 4.34c-1.07.45-2-.88-1.21-1.73l7.81-8.48 4.05 4.12c.54.54.36 1.46-.35 1.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m19.17 3.771-6.491 7.93-4.05-4.1c-.54-.55-.36-1.47.35-1.76l8.94-3.75c1.04-.44 1.97.81 1.25 1.68Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m12.7 11.7 4.1 4.1c.5.6.3 1.5-.4 1.8L6.1 21.9c-1.1.5-2-.9-1.2-1.7l7.8-8.5Zm0 0L8.6 7.6c-.5-.5-.3-1.5.4-1.8l8.9-3.7c1.1-.4 2 .8 1.3 1.7l-6.5 7.9Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.64 22.749c-.58 0-1.12-.28-1.48-.79-.51-.72-.45-1.65.15-2.29l7.33-7.96-3.55-3.59c-.43-.43-.61-1.05-.49-1.65.12-.6.53-1.09 1.09-1.33l8.94-3.75c.79-.33 1.66-.09 2.18.59.51.69.49 1.59-.05 2.26l-6.07 7.41 3.58 3.63c.43.43.61 1.05.49 1.65-.12.6-.53 1.09-1.09 1.33l-10.3 4.34c-.24.1-.48.15-.73.15Zm7.05-9.96-7.27 7.9c-.16.17-.08.33-.03.42.06.08.19.21.4.11l10.3-4.34c.14-.06.18-.18.2-.24.01-.06.02-.19-.09-.3l-3.51-3.55Zm-3.53-5.72 3.47 3.51 5.96-7.28c.14-.17.07-.33.01-.41-.06-.08-.18-.2-.4-.11l-8.94 3.75a.36.36 0 0 0-.2.24c-.02.06 0 .19.1.3Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m6.08 21.911 10.3-4.34c.71-.3.89-1.21.35-1.76l-4.06-4.11-7.81 8.48c-.78.85.15 2.18 1.22 1.73Zm2.55-14.31 4.05 4.1 6.49-7.93c.71-.87-.22-2.12-1.26-1.68l-8.94 3.75c-.7.29-.88 1.21-.34 1.76Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
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

var Thorchain = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Thorchain.displayName = 'Thorchain';

module.exports = Thorchain;
