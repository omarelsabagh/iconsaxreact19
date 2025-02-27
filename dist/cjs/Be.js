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
    d: "M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25zM19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75zm-4.83-5.5h6.33a3.258 3.258 0 00-3.16-2.5 3.27 3.27 0 00-3.17 2.5zM19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 7c0-.55.45-1 1-1h5c1.66 0 3 1.34 3 3s-1.34 3-3 3H2h7c1.66 0 3 1.34 3 3s-1.34 3-3 3H3c-.55 0-1-.45-1-1v-6.03M14 14h8c0-2.21-1.79-4-4-4s-4 1.79-4 4Zm0 0c0 2.21 1.79 4 4 4h1.67M19.5 7.5h-3",
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
    d: "M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75Zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75Zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75Zm-4.83-5.5h6.33a3.258 3.258 0 0 0-3.16-2.5 3.27 3.27 0 0 0-3.17 2.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 12h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c1.7 0 3 1.3 3 3s-1.3 3-3 3H2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14 14h8c0-2.2-1.8-4-4-4s-4 1.8-4 4Zm0 0c0 2.2 1.8 4 4 4h1.7M19.5 7.5h-3",
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
    d: "M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75Zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75Zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25ZM19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75Zm-4.83-5.5h6.33a3.258 3.258 0 0 0-3.16-2.5 3.27 3.27 0 0 0-3.17 2.5ZM19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 12h7c1.66 0 3 1.34 3 3s-1.34 3-3 3H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h5c1.66 0 3 1.34 3 3s-1.34 3-3 3H2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M14 14h8c0-2.21-1.79-4-4-4s-4 1.79-4 4Zm0 0c0 2.21 1.79 4 4 4h1.67M19.5 7.5h-3",
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

var Be = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Be.displayName = 'Be';

module.exports = Be;
