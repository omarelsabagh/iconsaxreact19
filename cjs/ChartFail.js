'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.97 7.21A5.812 5.812 0 0 0 16.19 2H7.81A5.812 5.812 0 0 0 2 7.81v8.38A5.812 5.812 0 0 0 7.81 22H14c.55 0 1-.45 1-1v-2.97c0-1.67 1.36-3.03 3.03-3.03H21c.55 0 1-.45 1-1V7.81c0-.2-.01-.4-.03-.6ZM7.75 13.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Zm5 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.5 4.56c.25.25.25.66 0 .91-.13.12-.3.18-.46.18-.16 0-.33-.06-.46-.18l-1.06-1.06-1.04 1.06c-.13.12-.29.18-.47.18-.15 0-.32-.06-.44-.18a.646.646 0 0 1 0-.91l1.06-1.06-1.06-1.05a.646.646 0 0 1 0-.91c.25-.25.66-.25.91 0l1.04 1.06 1.06-1.06c.25-.25.67-.25.92 0s.25.66 0 .91l-1.06 1.05 1.06 1.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17.23 20.77 3.54-3.54M20.77 20.77l-3.54-3.54M7 10.5v3M12 10.5v3M17 10.5v3M2 13v2c0 5 2 7 7 7h4M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
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
    d: "M16 20.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94c.4 0 .74.08 1.03.22V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22H16.22c-.14-.29-.22-.63-.22-1.03Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM12 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.5 4.56c.25.25.25.66 0 .91a.667.667 0 0 1-.91 0l-1.06-1.06-1.05 1.06a.667.667 0 0 1-.91 0 .646.646 0 0 1 0-.91l1.06-1.06-1.06-1.05a.646.646 0 0 1 0-.91c.25-.25.66-.25.91 0l1.05 1.06 1.06-1.06c.25-.25.66-.25.91 0s.25.66 0 .91l-1.06 1.05 1.06 1.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17.23 20.77 3.54-3.54M20.77 20.77l-3.54-3.54M7 10.5v3M12 10.5v3M17 10.5v3M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.23 21.522c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.54-3.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.54 3.54c-.14.14-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.77 21.522c-.19 0-.38-.07-.53-.22l-3.54-3.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.54 3.54c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22ZM7 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM12 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17.23 20.77 3.54-3.54M20.77 20.77l-3.54-3.54"
  })), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7 10.5v3M12 10.5v3M17 10.5v3",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4",
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

var ChartFail = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
ChartFail.displayName = 'ChartFail';

module.exports = ChartFail;
