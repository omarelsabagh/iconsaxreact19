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
    d: "M16.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 010-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74zM9.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 010-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74zM1.8 5h3.21c.18 0 .35.1.44.25l2.42 4.29c.09.15.09.34 0 .5l-1.12 1.92c-.19.33-.67.33-.86 0L1.8 5z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 5h3.5l2.7 4.7L17 19l-1.85-3.1 3.55-6.2L16 5ZM10.84 17.49 10 19l-1.85-3.1 3.55-6.2L9 5h3.5l2.7 4.7-2.27 4.07M1.8 5h3.5L8 9.8l-1.7 2.9L1.8 5Z",
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
    d: "M16.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 0 1 0-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M9.86 5h2.35c.18 0 .34.1.43.25l2.41 4.2c.09.15.09.34 0 .49l-4.64 8.3c-.19.34-.67.34-.87.01l-1.26-2.11a.497.497 0 0 1 0-.5l3.26-5.7c.09-.15.09-.34 0-.5l-2.13-3.7c-.17-.32.07-.74.45-.74Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M1.8 5h3.21c.18 0 .35.1.44.25l2.42 4.29c.09.15.09.34 0 .5l-1.12 1.92c-.19.33-.67.33-.86 0L1.8 5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 5h3.5l2.7 4.7L17 19l-1.9-3.1 3.6-6.2L16 5ZM9 5h3.5l2.7 4.7L10 19l-1.9-3.1 3.6-6.2L9 5ZM1.8 5h3.5L8 9.8l-1.7 2.9L1.8 5Z",
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
    d: "M17 19.748a.74.74 0 0 1-.64-.37l-1.85-3.1a.764.764 0 0 1-.01-.76l3.34-5.83-2.49-4.33a.77.77 0 0 1 0-.75c.13-.23.38-.37.65-.37h3.5c.27 0 .52.14.65.38l2.7 4.7c.13.23.13.51 0 .74l-5.2 9.3c-.13.23-.38.38-.64.38 0 .01-.01.01-.01.01Zm-.98-3.86.96 1.61 4.36-7.8-2.27-3.96H17.3l2.05 3.58c.13.23.13.52 0 .75l-3.33 5.82Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10 19.748a.74.74 0 0 1-.64-.37l-1.85-3.1a.764.764 0 0 1-.01-.76l3.34-5.83-2.49-4.33a.77.77 0 0 1 0-.75c.13-.23.38-.37.65-.37h3.5c.27 0 .52.14.65.38l2.7 4.7c.13.23.13.51 0 .74l-5.2 9.3c-.13.23-.38.38-.64.38 0 .01-.01.01-.01.01Zm-.98-3.86.96 1.61 4.36-7.8-2.27-3.96H10.3l2.05 3.58c.13.23.13.52 0 .75l-3.33 5.82Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6.3 13.45c-.27 0-.51-.14-.65-.37l-4.5-7.7a.722.722 0 0 1 0-.75c.13-.23.38-.38.65-.38h3.5c.27 0 .52.15.65.38l2.7 4.8c.13.23.13.52-.01.75l-1.7 2.9c-.13.23-.37.37-.64.37Zm-3.19-7.7 3.19 5.47.83-1.42-2.27-4.04H3.11v-.01Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 5h3.5l2.7 4.7L17 19l-1.85-3.1 3.55-6.2L16 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M9 5h3.5l2.7 4.7L10 19l-1.85-3.1 3.55-6.2L9 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M1.8 5h3.5L8 9.8l-1.7 2.9L1.8 5Z",
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

var Wing = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Wing.displayName = 'Wing';

module.exports = Wing;
