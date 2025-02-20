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
    d: "M21.74 11.07a.989.989 0 00-.99-.89H13.2c-.55 0-1 .45-1 1v1.71c0 .55.45 1 1 1h4.51c-.11.92-.71 2.31-2.04 3.24-.85.59-1.98 1-3.47 1-.07 0-.13 0-.2-.01-2.55-.08-4.71-1.79-5.49-4.14A6.23 6.23 0 016.18 12c0-.69.12-1.36.32-1.98.06-.18.13-.36.21-.54.92-2.07 2.93-3.53 5.29-3.6.06-.01.13-.01.2-.01 1.43 0 2.5.47 3.25.99.39.27.91.21 1.25-.12l1.39-1.36c.44-.43.4-1.16-.1-1.52C16.4 2.69 14.46 2 12.2 2c-.07 0-.13 0-.2.01a9.96 9.96 0 00-8.73 5.5C2.59 8.87 2.2 10.39 2.2 12c0 1.61.39 3.13 1.07 4.49h.01a9.956 9.956 0 008.72 5.5c.07.01.13.01.2.01 2.7 0 4.97-.89 6.62-2.42 1.89-1.75 2.98-4.31 2.98-7.36 0-.43-.02-.8-.06-1.15z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.27 7.508c-.68 1.36-1.07 2.88-1.07 4.49 0 1.61.39 3.13 1.07 4.49l.01-.01v.01a9.962 9.962 0 0 0 8.92 5.51c2.7 0 4.97-.89 6.62-2.42 1.89-1.74 2.98-4.31 2.98-7.36 0-.82-.07-1.42-.21-2.04H12.2v3.71h5.51c-.11.92-.71 2.31-2.04 3.24-.84.59-1.98 1-3.47 1-2.64 0-4.89-1.74-5.69-4.16-.21-.62-.33-1.29-.33-1.98s.12-1.36.32-1.98c.06-.18.13-.37.21-.54.95-2.13 3.05-3.61 5.49-3.61 1.88 0 3.14.81 3.87 1.49l2.82-2.76c-1.73-1.61-3.99-2.6-6.69-2.6-2.15 0-4.14.68-5.77 1.83",
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
    d: "M12.2 5.87c-.07 0-.14 0-.2.01V2.01c.07-.01.13-.01.2-.01 2.26 0 4.2.69 5.79 1.86.5.36.54 1.09.1 1.52L16.7 6.74c-.34.33-.86.39-1.25.12-.75-.52-1.82-.99-3.25-.99ZM21.8 12.22c0 3.05-1.09 5.61-2.98 7.36C17.17 21.11 14.9 22 12.2 22c-.07 0-.13 0-.2-.01v-3.87c.07.01.13.01.2.01 1.49 0 2.62-.41 3.47-1 1.33-.93 1.93-2.32 2.04-3.24H13.2c-.55 0-1-.45-1-1v-1.71c0-.55.45-1 1-1h7.55c.51 0 .94.38.99.89.04.35.06.72.06 1.15Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M6.5 10.022c-.2.62-.32 1.29-.32 1.98s.12 1.35.33 1.98c.78 2.35 2.94 4.06 5.49 4.14v3.87a9.956 9.956 0 0 1-8.72-5.5h-.01c-.68-1.36-1.07-2.88-1.07-4.49 0-1.61.39-3.13 1.07-4.49a9.96 9.96 0 0 1 8.73-5.5v3.87c-2.36.07-4.37 1.53-5.29 3.6-.08.18-.15.36-.21.54Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.6 10.2h-9.4v3.7h5.5c-.1.9-.7 2.3-2 3.2-.8.6-2 1-3.5 1-2.6 0-4.9-1.7-5.7-4.2-.2-.6-.3-1.3-.3-2s.1-1.4.3-2c.1-.2.1-.4.2-.5.9-2.1 3-3.6 5.5-3.6 1.9 0 3.1.8 3.9 1.5l2.8-2.8C17.2 3 14.9 2 12.2 2 8.3 2 4.9 4.2 3.3 7.5c-.7 1.4-1.1 2.9-1.1 4.5s.4 3.1 1.1 4.5c1.6 3.3 5 5.5 8.9 5.5 2.7 0 5-.9 6.6-2.4 1.9-1.7 3-4.3 3-7.4 0-.8-.1-1.4-.2-2Z",
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
    d: "M12.2 22.75c-4.04 0-7.68-2.23-9.54-5.82-.03-.03-.05-.07-.07-.11-.76-1.52-1.15-3.14-1.15-4.82 0-1.68.39-3.3 1.15-4.82 1.84-3.66 5.52-5.93 9.6-5.93 2.74 0 5.23.97 7.2 2.8.15.14.24.33.24.54 0 .21-.08.4-.23.55L16.58 7.9c-.29.28-.74.29-1.04.01-.63-.59-1.72-1.29-3.35-1.29-2.06 0-3.95 1.24-4.8 3.17-.07.16-.13.31-.19.48a5.6 5.6 0 0 0-.28 1.74c0 .57.1 1.14.28 1.71 0 .01.01.02.01.04.72 2.18 2.72 3.64 4.98 3.64 1.19 0 2.21-.29 3.04-.87.76-.53 1.24-1.24 1.5-1.88H12.2c-.41 0-.75-.34-.75-.75v-3.71c0-.41.34-.75.75-.75h9.39c.35 0 .65.24.73.58.16.7.23 1.36.23 2.21 0 3.18-1.14 5.99-3.22 7.91-1.85 1.7-4.32 2.61-7.13 2.61Zm-8.32-6.7c.03.04.06.09.08.14a9.19 9.19 0 0 0 8.24 5.06c2.43 0 4.54-.77 6.11-2.22 1.77-1.63 2.74-4.05 2.74-6.81 0-.5-.02-.9-.08-1.29h-8.02v2.21h4.76c.21 0 .42.09.56.25.14.16.21.38.18.59-.13 1.12-.83 2.7-2.36 3.77-1.08.75-2.39 1.14-3.9 1.14-2.89 0-5.45-1.86-6.39-4.64 0-.01-.01-.02-.01-.03-.25-.73-.37-1.47-.37-2.21 0-.73.12-1.47.36-2.21.07-.22.15-.42.24-.62 1.1-2.47 3.52-4.06 6.17-4.06 1.71 0 2.97.6 3.83 1.23l1.75-1.71c-1.58-1.24-3.5-1.89-5.58-1.89-3.51 0-6.68 1.95-8.26 5.1A9.284 9.284 0 0 0 2.94 12c.01 1.41.32 2.77.94 4.05Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.59 10.178H12.2v3.71h5.51c-.11.92-.71 2.31-2.04 3.24-.84.59-1.98 1-3.47 1-2.64 0-4.89-1.74-5.69-4.16-.21-.62-.33-1.29-.33-1.98s.12-1.36.32-1.98c.06-.18.13-.37.21-.54.95-2.13 3.05-3.61 5.49-3.61 1.88 0 3.14.81 3.87 1.49l2.82-2.76c-1.73-1.61-3.99-2.6-6.69-2.6-3.91 0-7.29 2.24-8.93 5.51-.68 1.36-1.07 2.88-1.07 4.49 0 1.61.39 3.13 1.07 4.49l.01-.01v.01a9.962 9.962 0 0 0 8.92 5.51c2.7 0 4.97-.89 6.62-2.42 1.89-1.74 2.98-4.31 2.98-7.36 0-.81-.07-1.41-.21-2.03Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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

var Google = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Google.displayName = 'Google';

module.exports = Google;
