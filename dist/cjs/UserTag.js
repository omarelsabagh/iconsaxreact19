'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 2H6C4.34 2 3 3.33 3 4.97v10.91c0 1.64 1.34 2.97 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69c.56-.56 1.33-.87 2.12-.87H18c1.66 0 3-1.33 3-2.97V4.97C21 3.33 19.66 2 18 2Zm-6 3.75c1.29 0 2.33 1.04 2.33 2.33s-1.04 2.33-2.33 2.33-2.33-1.05-2.33-2.33c0-1.29 1.04-2.33 2.33-2.33Zm2.68 9.31H9.32c-.81 0-1.28-.9-.83-1.57.68-1.01 2-1.69 3.51-1.69 1.51 0 2.83.68 3.51 1.69.45.67-.03 1.57-.83 1.57Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.03",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.002 10a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66ZM16 15.658c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26",
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
    d: "M12.002 10.41a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66ZM14.681 15.06c.81 0 1.28-.9.83-1.57-.68-1.01-2-1.69-3.51-1.69-1.51 0-2.83.68-3.51 1.69-.45.67.02 1.57.83 1.57h5.36Z",
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
    d: "M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26",
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
    d: "M12.002 10.75c-1.7 0-3.08-1.38-3.08-3.08 0-1.7 1.38-3.08 3.08-3.08 1.7 0 3.08 1.38 3.08 3.08 0 1.7-1.38 3.08-3.08 3.08Zm0-4.66c-.87 0-1.58.71-1.58 1.58 0 .87.71 1.58 1.58 1.58.87 0 1.58-.71 1.58-1.58 0-.87-.71-1.58-1.58-1.58ZM16 16.408c-.41 0-.75-.34-.75-.75 0-1.38-1.46-2.51-3.25-2.51s-3.25 1.13-3.25 2.51c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-2.21 2.13-4.01 4.75-4.01s4.75 1.8 4.75 4.01c0 .41-.34.75-.75.75Z",
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
    d: "M12.002 10a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66ZM16 15.658c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26",
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

var UserTag = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
UserTag.displayName = 'UserTag';

module.exports = UserTag;
