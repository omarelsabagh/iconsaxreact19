'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 2h12c1.1 0 2 .9 2 2v3.32c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2ZM4 10.32v1.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61v-1.56c0-.55-.45-1-1-1H5c-.55 0-1 .44-1 1Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.98 8.32H4V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4.32h-3.07M4 11.88c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 2h12c1.1 0 2 .9 2 2v4.32H4V4c0-1.1.9-2 2-2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M4 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32H4Z",
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
    d: "M6 2h12c1.1 0 2 .9 2 2v4.32H4V4c0-1.1.9-2 2-2zM4 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32H4z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20 9.07H4c-.41 0-.75-.34-.75-.75V4c0-1.52 1.23-2.75 2.75-2.75h12c1.52 0 2.75 1.23 2.75 2.75v4.32c0 .41-.34.75-.75.75ZM4.75 7.57h14.5V4c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v3.57Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.5 22.749h-1c-1.52 0-2.75-1.23-2.75-2.75v-2.1c0-.45-.24-.87-.64-1.09l-2.96-1.67a3.742 3.742 0 0 1-1.91-3.27v-3.56c0-.41.34-.75.75-.75h16c.41 0 .75.34.75.75v3.56c0 1.35-.73 2.6-1.91 3.27l-2.96 1.67c-.39.22-.64.64-.64 1.09v2.1a2.719 2.719 0 0 1-2.73 2.75ZM4.75 9.069v2.81c0 .81.44 1.56 1.14 1.96l2.96 1.67c.86.49 1.4 1.4 1.4 2.39v2.1c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-2.1c0-.99.54-1.91 1.4-2.39l2.96-1.67c.71-.4 1.14-1.15 1.14-1.96v-2.81H4.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M6 2h12c1.1 0 2 .9 2 2v4.32H4V4c0-1.1.9-2 2-2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32H4Z",
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

var Brush = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Brush.displayName = 'Brush';

module.exports = Brush;
