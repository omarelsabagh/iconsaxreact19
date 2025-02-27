'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m21.77 9.798-.8-1.8-1.76-3.96c-.47-1.04-1.21-1.89-2.91-1.89H7.7c-1.7 0-2.44.85-2.91 1.89l-1.76 3.96-.8 1.8c-.46 1.05-.21 2.59.56 3.44l6.85 7.54c1.3 1.43 3.42 1.43 4.72 0l6.85-7.54c.77-.85 1.02-2.39.56-3.44Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.21 13.228c.77-.85 1.02-2.39.55-3.43l-2.56-5.76c-.46-1.04-1.21-1.89-2.91-1.89H7.7c-1.7 0-2.45.85-2.91 1.89l-2.56 5.76c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l4.03-4.44M3.5 8h17",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m21.21 13.24-6.85 7.54c-1.3 1.43-3.42 1.43-4.72 0l-6.85-7.54c-.77-.85-1.02-2.39-.56-3.44l.8-1.8h17.94l.8 1.8c.46 1.05.21 2.59-.56 3.44Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M20.97 7.998H3.03l1.76-3.96c.47-1.04 1.21-1.89 2.91-1.89h8.6c1.7 0 2.44.85 2.91 1.89l1.76 3.96Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88ZM3.5 8h17",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.6c-1.11 0-2.14-.47-2.91-1.31l-6.86-7.54c-.97-1.06-1.27-2.93-.69-4.24L4.1 3.75c.7-1.57 1.87-2.34 3.59-2.34h8.59v.75-.75c1.72 0 2.89.76 3.59 2.33l2.56 5.76c.58 1.31.29 3.18-.68 4.24l-6.85 7.55c-.75.84-1.79 1.31-2.9 1.31Zm4.29-19.7H7.7c-1.31 0-1.84.58-2.22 1.45l-2.56 5.76c-.34.77-.14 2 .42 2.62l6.86 7.54c.48.53 1.12.82 1.8.82.68 0 1.32-.29 1.8-.82l6.85-7.55c.57-.63.77-1.85.42-2.62l-2.56-5.76c-.38-.86-.91-1.44-2.22-1.44Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 8.748c-.41 0-.75-.34-.75-.75s.34-.75.75-.75l17-.01c.41 0 .75.34.75.75s-.34.75-.75.75l-17 .01Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.29 2.148H7.7c-1.7 0-2.45.85-2.91 1.89l-2.56 5.76c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43l-2.56-5.76c-.46-1.03-1.21-1.88-2.91-1.88Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M3.5 8h17",
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

var Diamonds = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Diamonds.displayName = 'Diamonds';

module.exports = Diamonds;
