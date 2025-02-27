'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m19.34 14.49-1-1.66c-.21-.37-.4-1.07-.4-1.48V8.82a5.91 5.91 0 0 0-3.37-5.33A2.926 2.926 0 0 0 11.99 2c-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.996 2.996 0 0 0 2.83-3.99M2 14.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M14 2H9C4 2 2 4 2 9v2",
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
    d: "m19.34 14.488-1-1.66c-.21-.37-.4-1.07-.4-1.48v-2.53c0-3.26-2.65-5.92-5.92-5.92S6.1 5.558 6.1 8.818v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.25 3.32c-.69-.27-1.44-.42-2.23-.42-.78 0-1.53.14-2.22.42.43-.81 1.28-1.32 2.22-1.32.95 0 1.79.51 2.23 1.32ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.02 20.532c-2.33 0-4.66-.37-6.87-1.11-.84-.29-1.48-.88-1.76-1.65-.29-.77-.19-1.62.27-2.38l1.15-1.91c.24-.4.46-1.2.46-1.67v-2.89c0-3.72 3.03-6.75 6.75-6.75s6.75 3.03 6.75 6.75v2.89c0 .46.22 1.27.46 1.68l1.14 1.9c.43.72.51 1.59.22 2.38a2.72 2.72 0 0 1-1.71 1.65c-2.2.74-4.53 1.11-6.86 1.11Zm0-16.86c-2.89 0-5.25 2.35-5.25 5.25v2.89c0 .73-.3 1.81-.67 2.44l-1.15 1.91c-.22.37-.28.76-.15 1.09.12.34.42.6.83.74a20 20 0 0 0 12.79 0c.36-.12.64-.39.77-.75s.1-.75-.1-1.08l-1.15-1.91c-.38-.65-.67-1.72-.67-2.45v-2.88c0-2.9-2.35-5.25-5.25-5.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.88 3.94c-.07 0-.14-.01-.21-.03-.29-.08-.57-.14-.84-.18-.85-.11-1.67-.05-2.44.18-.28.09-.58 0-.77-.21a.742.742 0 0 1-.14-.78 2.724 2.724 0 0 1 2.55-1.74c1.14 0 2.14.68 2.55 1.74.1.27.05.57-.14.78-.15.16-.36.24-.56.24ZM12.02 22.809c-.99 0-1.95-.4-2.65-1.1-.7-.7-1.1-1.66-1.1-2.65h1.5c0 .59.24 1.17.66 1.59.42.42 1 .66 1.59.66 1.24 0 2.25-1.01 2.25-2.25h1.5c0 2.07-1.68 3.75-3.75 3.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.87 3.201a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M15.02 19.059c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12",
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

var Notification = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Notification.displayName = 'Notification';

module.exports = Notification;
