'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 2H6C4.34 2 3 3.33 3 4.97v10.91c0 1.64 1.34 2.97 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69c.56-.56 1.33-.87 2.12-.87H18c1.66 0 3-1.33 3-2.97V4.97C21 3.33 19.66 2 18 2Zm-5.72 12.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45C7.51 8.12 8.62 7 10 7c.82 0 1.54.39 2 1 .46-.61 1.18-1 2-1 1.38 0 2.5 1.12 2.5 2.51-.01 3.15-2.92 5-4.22 5.45Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.04",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.28 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45C7.5 8.12 8.62 7 10 7c.82 0 1.54.39 2 1 .46-.61 1.18-1 2-1 1.38 0 2.5 1.12 2.5 2.51 0 1.16-.39 2.14-.95 2.94",
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
    d: "M18 18.862h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.982c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.28 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45C7.5 8.12 8.62 7 10 7c.82 0 1.54.39 2 1 .46-.61 1.18-1 2-1 1.38 0 2.5 1.12 2.5 2.51-.01 3.15-2.92 5-4.22 5.45Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.28 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45C7.5 8.12 8.62 7 10 7c.82 0 1.54.39 2 1 .46-.61 1.18-1 2-1 1.38 0 2.5 1.12 2.5 2.51-.01 3.15-2.92 5-4.22 5.45Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.752c-.7 0-1.41-.27-1.94-.8l-1.71-1.69c-.42-.42-1-.65-1.59-.65H6c-2.07 0-3.75-1.67-3.75-3.72V4.982c0-2.05 1.68-3.72 3.75-3.72h12c2.07 0 3.75 1.67 3.75 3.72v10.91c0 2.05-1.68 3.72-3.75 3.72h-.76a2.3 2.3 0 0 0-1.59.65l-1.71 1.69c-.53.53-1.24.8-1.94.8Zm-6-20c-1.24 0-2.25 1-2.25 2.22v10.91c0 1.23 1.01 2.22 2.25 2.22h.76c.99 0 1.95.4 2.65 1.09l1.71 1.69c.49.48 1.28.48 1.77 0l1.71-1.69c.7-.69 1.66-1.09 2.65-1.09H18c1.24 0 2.25-1 2.25-2.22V4.972c0-1.23-1.01-2.22-2.25-2.22H6Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 15.75c-.18 0-.36-.03-.52-.08-1.32-.45-4.72-2.44-4.72-6.16 0-1.8 1.46-3.26 3.25-3.26.73 0 1.43.25 2 .69.57-.44 1.27-.69 2-.69 1.79 0 3.25 1.46 3.25 3.26 0 3.72-3.41 5.71-4.72 6.16-.18.05-.36.08-.54.08Zm-2-8c-.96 0-1.75.79-1.75 1.76 0 2.83 2.75 4.41 3.71 4.74h.08c.97-.34 3.7-1.92 3.7-4.73 0-.97-.78-1.76-1.75-1.76-.55 0-1.06.26-1.4.7-.28.38-.92.38-1.2 0-.32-.45-.83-.71-1.39-.71Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 18.862h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.982c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12.28 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45C7.5 8.12 8.62 7 10 7c.82 0 1.54.39 2 1 .46-.61 1.18-1 2-1 1.38 0 2.5 1.12 2.5 2.51-.01 3.15-2.92 5-4.22 5.45Z",
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

var Like = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Like.displayName = 'Like';

module.exports = Like;
