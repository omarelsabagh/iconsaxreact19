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
    d: "M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM11 17H8c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM6 9.5H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM17 9.64h-6.5c-.55 0-1 .45-1 1v2.72c0 .55.45 1 1 1H17c.55 0 1-.45 1-1v-2.72c0-.55-.45-1-1-1z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1ZM12 17H7v5h5v-5ZM7 9.5H2v5h5v-5ZM17 14.36h1V9.64H9.5v4.72h3.42",
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
    d: "M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1ZM11 17H8c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M6 9.5H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1ZM17 9.64h-6.5c-.55 0-1 .45-1 1v2.72c0 .55.45 1 1 1H17c.55 0 1-.45 1-1v-2.72c0-.55-.45-1-1-1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 2H9c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1ZM12 17H7v5h5v-5ZM7 9.5H2v5h5v-5ZM18 9.6H9.5v4.7H18V9.6Z",
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
    d: "M21 7.75H9c-.96 0-1.75-.79-1.75-1.75V3c0-.96.79-1.75 1.75-1.75h12c.96 0 1.75.79 1.75 1.75v3c0 .96-.79 1.75-1.75 1.75Zm-12-5c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h12c.14 0 .25-.11.25-.25V3c0-.14-.11-.25-.25-.25H9ZM12 22.75H7c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5v-3.5h-3.5v3.5ZM7 15.25H2c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5v-3.5h-3.5v3.5ZM18 15.11H9.5c-.41 0-.75-.34-.75-.75V9.64c0-.41.34-.75.75-.75H18c.41 0 .75.34.75.75v4.72c0 .42-.34.75-.75.75Zm-7.75-1.5h7v-3.22h-7v3.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 2H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1ZM12 17H7v5h5v-5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7 9.5H2v5h5v-5ZM18 9.64H9.5v4.72H18V9.64Z",
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

var FtxToken = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
FtxToken.displayName = 'FtxToken';

module.exports = FtxToken;
