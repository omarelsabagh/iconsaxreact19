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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 12.25h-3.05l1.99 2.82c.24.34.16.81-.18 1.04a.76.76 0 01-.43.14c-.24 0-.47-.11-.61-.32l-2.3-3.26-2.3 3.26a.75.75 0 01-.61.32c-.15 0-.3-.04-.43-.14a.743.743 0 01-.18-1.04l1.99-2.82H7.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.36.75-.77.75zm0-3h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.87L8.38 6.93a.74.74 0 01.18-1.04.74.74 0 011.04.18l2.3 3.26 2.3-3.26c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-1.99 2.82h3.05c.41 0 .75.34.75.75s-.32.75-.73.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.5 10.5h9M9 6.5l2.82 4M14.82 6.5l-2.82 4M7.5 13.5h9M9 17.5l2.82-4M14.82 17.5l-2.82-4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.5 11.248h9c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.05l1.99-2.82a.74.74 0 0 0-.18-1.04.74.74 0 0 0-1.04.18l-2.3 3.26-2.3-3.26a.743.743 0 0 0-1.04-.18c-.34.24-.42.71-.18 1.04l1.99 2.82H7.52c-.41 0-.75.34-.75.75s.32.75.73.75ZM16.5 12.75h-9c-.41 0-.75.34-.75.75s.34.75.75.75h2.87l-1.99 2.82a.74.74 0 0 0 .18 1.04c.13.09.28.14.43.14.24 0 .47-.11.61-.32l2.3-3.26 2.3 3.26c.15.21.38.32.61.32.15 0 .3-.04.43-.14.34-.24.42-.71.18-1.04l-1.99-2.82h3.05c.41 0 .75-.34.75-.75s-.32-.75-.73-.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.5 10.5h9M9 6.5l2.8 4M14.8 6.5l-2.8 4M7.5 13.5h9M9 17.5l2.8-4M14.8 17.5l-2.8-4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.5 11.25h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.82 11.248c-.24 0-.47-.11-.61-.32l-2.82-4a.74.74 0 0 1 .18-1.04.74.74 0 0 1 1.04.18l2.82 4c.24.34.16.81-.18 1.04-.13.1-.28.14-.43.14Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 11.248c-.15 0-.3-.04-.43-.14a.743.743 0 0 1-.18-1.04l2.82-4c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-2.82 4c-.14.21-.38.32-.61.32ZM16.5 14.25h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 18.248c-.15 0-.3-.04-.43-.14a.743.743 0 0 1-.18-1.04l2.82-4c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-2.82 4c-.14.21-.38.32-.61.32Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.82 18.248c-.24 0-.47-.11-.61-.32l-2.82-4a.74.74 0 0 1 .18-1.04.74.74 0 0 1 1.04.18l2.82 4c.24.34.16.81-.18 1.04-.13.1-.28.14-.43.14Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.5 10.5h9M9 6.5l2.82 4M14.82 6.5l-2.82 4M7.5 13.5h9M9 17.5l2.82-4M14.82 17.5l-2.82-4"
  })), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var Stacks = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Stacks.displayName = 'Stacks';

module.exports = Stacks;
