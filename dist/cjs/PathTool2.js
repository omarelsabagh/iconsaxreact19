'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.15 22H9.83c-1.54 0-2.68-1.25-2.38-2.58l.52-2.32c.1-.46.51-.78.98-.78h6.09c.47 0 .87.32.98.78l.52 2.31c.32 1.43-.75 2.59-2.39 2.59ZM18.82 13.69l-1.07.94c-.37.32-.84.5-1.32.5H7.59c-.49 0-.97-.18-1.33-.51l-1.05-.94c-1.72-1.41-1.73-2.49-.41-4.15l5.23-6.61a2.95 2.95 0 0 1 .112-.142c.441-.52 1.128-.073 1.128.61V6.86c-.01.43.33.77.75.76.42.01.75-.33.76-.76V3.387c0-.682.676-1.12 1.129-.609.037.043.074.087.11.132l5.21 6.62c1.3 1.66 1.25 2.69-.41 4.16Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.87 22.002h4.29c1.62 0 2.69-1.16 2.37-2.57l-.69-3.08H8.2l-.69 3.08c-.31 1.33.83 2.57 2.36 2.57ZM18.77 13.741c1.64-1.46 1.71-2.48.41-4.13l-5.19-6.58c-1.09-1.38-2.87-1.38-3.97 0l-5.18 6.58c-1.3 1.65-1.3 2.72.41 4.13l2.94 2.61M12.01 2.672v4.3",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.15 22.002H9.87c-1.53 0-2.67-1.24-2.38-2.57l.7-3.08h7.64l.7 3.08c.32 1.41-.75 2.57-2.38 2.57Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "m18.77 13.74-2.94 2.61H8.19l-2.94-2.61c-1.71-1.4-1.71-2.48-.41-4.13l5.19-6.57c.36-.45.78-.76 1.23-.92a2.27 2.27 0 0 1 1.5 0c.45.16.87.47 1.23.92l5.19 6.57c1.3 1.65 1.24 2.67-.41 4.13Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.76 2.12v4.85c0 .41-.34.75-.75.75s-.75-.34-.75-.75V2.12a2.27 2.27 0 0 1 1.5 0Z",
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
    d: "M9.87 22h4.29c1.62 0 2.69-1.16 2.37-2.57l-.69-3.08H8.2l-.69 3.08C7.2 20.76 8.34 22 9.87 22zM15.83 16.35l2.94-2.61c1.64-1.46 1.71-2.48.41-4.13l-5.19-6.58c-1.09-1.38-2.87-1.38-3.97 0L4.84 9.61c-1.3 1.65-1.3 2.72.41 4.13l2.94 2.61M12.01 2.67v4.3"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.15 22.752H9.87c-1.02 0-1.96-.43-2.56-1.19-.53-.66-.72-1.5-.54-2.3l.69-3.08c.08-.34.38-.58.73-.58h7.64c.35 0 .65.24.73.58l.7 3.08c.19.86.01 1.69-.51 2.34-.58.73-1.53 1.15-2.6 1.15Zm-5.36-5.65-.56 2.5c-.08.36.01.72.25 1.03.31.39.83.62 1.39.62h4.29c.61 0 1.13-.21 1.42-.58.24-.29.31-.67.22-1.07l-.56-2.5H8.79Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.19 17.1c-.18 0-.36-.06-.5-.19L4.75 14.3c-1.93-1.59-2.09-3.13-.5-5.15l5.19-6.58c.67-.85 1.59-1.32 2.57-1.32.99 0 1.9.47 2.57 1.32l5.19 6.58c1.57 1.99 1.43 3.44-.5 5.15l-2.94 2.61c-.31.27-.79.25-1.06-.06a.756.756 0 0 1 .06-1.06l2.94-2.61c1.32-1.17 1.38-1.75.32-3.1L13.41 3.5c-.76-.97-2.03-.97-2.79 0l-5.19 6.58c-1.09 1.38-1.04 1.99.29 3.08l2.96 2.63c.31.27.34.75.06 1.06a.73.73 0 0 1-.55.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.01 7.722c-.41 0-.75-.34-.75-.75v-4.3c0-.41.34-.75.75-.75s.75.34.75.75v4.3c0 .41-.34.75-.75.75ZM14.15 22.752H9.87c-1.02 0-1.96-.43-2.56-1.19-.53-.66-.72-1.5-.54-2.3l.69-3.08c.08-.34.38-.58.73-.58h7.64c.35 0 .65.24.73.58l.7 3.08c.19.86.01 1.69-.51 2.34-.58.73-1.53 1.15-2.6 1.15Zm-5.36-5.65-.56 2.5c-.08.36.01.72.25 1.03.31.39.83.62 1.39.62h4.29c.61 0 1.13-.21 1.42-.58.24-.29.31-.67.22-1.07l-.56-2.5H8.79Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.19 17.1c-.18 0-.36-.06-.5-.19L4.75 14.3c-1.93-1.59-2.09-3.13-.5-5.15l5.19-6.58c.67-.85 1.59-1.32 2.57-1.32.99 0 1.9.47 2.57 1.32l5.19 6.58c1.57 1.99 1.43 3.44-.5 5.15l-2.94 2.61c-.31.27-.79.25-1.06-.06a.756.756 0 0 1 .06-1.06l2.94-2.61c1.32-1.17 1.38-1.75.32-3.1L13.41 3.5c-.76-.97-2.03-.97-2.79 0l-5.19 6.58c-1.09 1.38-1.04 1.99.29 3.08l2.96 2.63c.31.27.34.75.06 1.06a.73.73 0 0 1-.55.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.01 7.722c-.41 0-.75-.34-.75-.75v-4.3c0-.41.34-.75.75-.75s.75.34.75.75v4.3c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.87 22.002h4.29c1.62 0 2.69-1.16 2.37-2.57l-.69-3.08H8.2l-.69 3.08c-.31 1.33.83 2.57 2.36 2.57ZM15.83 16.351l2.94-2.61c1.64-1.46 1.71-2.48.41-4.13l-5.19-6.58c-1.09-1.38-2.87-1.38-3.97 0l-5.18 6.58c-1.3 1.65-1.3 2.72.41 4.13l2.94 2.61",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12.01 2.672v4.3",
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

var PathTool2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
PathTool2.displayName = 'PathTool2';

module.exports = PathTool2;
