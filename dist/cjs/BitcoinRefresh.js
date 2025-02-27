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
    d: "M23.53 12.048a.754.754 0 00-1.06 0l-.46.46v-.51c0-5.52-4.49-10.01-10.01-10.01-3.05 0-5.9 1.37-7.81 3.75-.26.32-.21.8.12 1.06.32.25.79.2 1.05-.12A8.476 8.476 0 0112 3.488c4.69 0 8.51 3.82 8.51 8.51v.5l-.46-.46a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.74 1.74a.776.776 0 00.53.22.753.753 0 00.53-.22l1.74-1.74c.29-.28.29-.76 0-1.05zM19.69 17.2a.738.738 0 00-1.05.12A8.476 8.476 0 0112 20.51c-4.69 0-8.51-3.82-8.51-8.51v-.5l.46.46c.15.15.34.22.53.22s.38-.08.52-.23c.29-.29.29-.77 0-1.06L3.27 9.15c-.07-.06-.16-.12-.25-.16a.707.707 0 00-.57 0c-.09.04-.17.1-.24.16L.47 10.89c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.46-.46V12c0 5.52 4.49 10.01 10.01 10.01 3.05 0 5.9-1.37 7.81-3.75a.75.75 0 00-.12-1.06z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M15.45 11.64c.27-.4.42-.87.42-1.39 0-1.33-1.17-2.5-2.5-2.5h-.82v-1c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1H9c-.41 0-.75.34-.75.75v7c0 .41.34.75.75.75h2.05v1c0 .41.34.75.75.75s.75-.34.75-.75v-1H14c1.52 0 2.75-1.12 2.75-2.5 0-.89-.52-1.67-1.3-2.11zm-5.7-2.39h3.62c.55 0 1 .55 1 1 0 .55-.45 1-1 1H9.75v-2zm4.25 5.5H9.75v-2H14c.69 0 1.25.45 1.25 1s-.56 1-1.25 1z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4.47 11.42 2.73 9.68 1 11.42M19.53 12.578l1.74 1.74 1.74-1.74M12 2.738c-2.92 0-5.53 1.36-7.23 3.47",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.26 14.32V12c0-3.68-2.15-6.86-5.26-8.36M12 21.26c2.92 0 5.53-1.36 7.23-3.47M2.74 9.68V12c0 3.65 2.11 6.81 5.19 8.32",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9V8.5ZM9 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75H9V12ZM11.8 15.5v1.75M11.8 6.75V8.5",
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
    d: "M23.53 12.048a.754.754 0 0 0-1.06 0l-.46.46v-.51c0-5.52-4.49-10.01-10.01-10.01-3.05 0-5.9 1.37-7.81 3.75-.26.32-.21.8.12 1.05.32.26.8.21 1.05-.12A8.476 8.476 0 0 1 12 3.478c4.69 0 8.51 3.82 8.51 8.51v.5l-.46-.46a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.74 1.74a.776.776 0 0 0 .53.22.753.753 0 0 0 .53-.22l1.74-1.74c.29-.27.29-.75 0-1.04ZM19.69 17.201a.738.738 0 0 0-1.05.12 8.476 8.476 0 0 1-6.64 3.19c-4.69 0-8.51-3.82-8.51-8.51v-.5l.46.46c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-1.74-1.74a.776.776 0 0 0-.24-.16.707.707 0 0 0-.57 0c-.09.04-.17.09-.24.16l-1.74 1.74c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.46-.46v.5c0 5.52 4.49 10.01 10.01 10.01 3.05 0 5.9-1.37 7.81-3.75.25-.32.2-.8-.13-1.06Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.45 11.64c.27-.4.42-.87.42-1.39 0-1.33-1.17-2.5-2.5-2.5h-.82v-1c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1H9c-.41 0-.75.34-.75.75v7c0 .41.34.75.75.75h2.05v1c0 .41.34.75.75.75s.75-.34.75-.75v-1H14c1.52 0 2.75-1.12 2.75-2.5 0-.89-.52-1.67-1.3-2.11Zm-5.7-2.39h3.62c.55 0 1 .55 1 1 0 .55-.45 1-1 1H9.75v-2Zm4.25 5.5H9.75v-2H14c.69 0 1.25.45 1.25 1s-.56 1-1.25 1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4.47 11.42 2.73 9.68 1 11.42M19.53 12.58l1.74 1.74 1.74-1.74",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.26 14.32V12c0-5.12-4.15-9.26-9.26-9.26-2.92 0-5.53 1.36-7.23 3.47M2.74 9.68V12c0 5.12 4.15 9.26 9.26 9.26 2.92 0 5.53-1.36 7.23-3.47",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9V8.5ZM9 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75H9V12ZM11.8 15.5v1.75M11.8 6.75V8.5",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4.47 12.171c-.19 0-.38-.07-.53-.22l-1.21-1.21-1.21 1.21c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l1.74-1.74c.29-.29.77-.29 1.06 0L5 10.891c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22ZM21.26 15.07c-.19 0-.38-.07-.53-.22l-1.74-1.74a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.21 1.21 1.21-1.21c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.74 1.74c-.14.14-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.26 15.07c-.41 0-.75-.34-.75-.75V12c0-4.69-3.82-8.51-8.51-8.51-2.59 0-5.01 1.16-6.64 3.19-.26.32-.73.37-1.05.12a.748.748 0 0 1-.12-1.05A9.945 9.945 0 0 1 12 2c5.52 0 10.01 4.49 10.01 10.01v2.32c0 .4-.33.74-.75.74ZM12 22.01C6.48 22.01 1.99 17.52 1.99 12V9.68c0-.41.34-.75.75-.75s.75.34.75.75V12c0 4.69 3.82 8.51 8.51 8.51 2.59 0 5.01-1.16 6.64-3.19a.748.748 0 0 1 1.17.93A9.955 9.955 0 0 1 12 22.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.38 12.75H9c-.41 0-.75-.34-.75-.75V8.5c0-.41.34-.75.75-.75h4.38c1.33 0 2.5 1.17 2.5 2.5 0 1.38-1.13 2.5-2.5 2.5Zm-3.63-1.5h3.62c.55 0 1-.45 1-1 0-.45-.45-1-1-1H9.75v2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14 16.25H9c-.41 0-.75-.34-.75-.75V12c0-.41.34-.75.75-.75h5c1.52 0 2.75 1.12 2.75 2.5s-1.23 2.5-2.75 2.5Zm-4.25-1.5H14c.69 0 1.25-.45 1.25-1s-.56-1-1.25-1H9.75v2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.8 18c-.41 0-.75-.34-.75-.75V15.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .41-.34.75-.75.75ZM11.8 9.25c-.41 0-.75-.34-.75-.75V6.75c0-.41.34-.75.75-.75s.75.34.75.75V8.5c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4.47 11.42 2.73 9.68 1 11.42M19.53 12.578l1.74 1.74 1.74-1.74",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.26 14.318v-2.32c0-5.12-4.15-9.26-9.26-9.26-2.92 0-5.53 1.36-7.23 3.47M2.74 9.68V12c0 5.12 4.15 9.26 9.26 9.26 2.92 0 5.53-1.36 7.23-3.47",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9V8.5ZM9 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75H9V12ZM11.8 15.5v1.75M11.8 6.75V8.5"
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

var BitcoinRefresh = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
BitcoinRefresh.displayName = 'BitcoinRefresh';

module.exports = BitcoinRefresh;
