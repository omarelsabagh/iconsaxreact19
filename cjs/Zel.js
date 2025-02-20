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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.5 12.02c0 .18-.1.34-.25.43l-2 1.15c-.15.09-.34.09-.5 0l-2-1.15a.484.484 0 01-.25-.43v-.83l-1.25.72c-.15.09-.34.09-.5 0l-1.25-.72v.83c0 .18-.1.34-.25.43l-2 1.15c-.15.09-.34.09-.5 0l-2-1.15a.484.484 0 01-.25-.43v-2.28c0-.18.1-.34.25-.43l2-1.15c.15-.09.35-.09.5 0l1 .58V9.61c0-.18.1-.34.25-.43l2.25-1.29c.15-.09.34-.09.5 0l2.25 1.29c.16.09.25.25.25.43v1.13l1-.58c.15-.09.34-.09.5 0l2 1.15c.16.09.25.25.25.43v2.28z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.5 11.46v2.85L8 15.75l-2.5-1.44v-2.85L8 10.02l1.25.72 1.25.72ZM18.5 11.46v2.85L16 15.75l-2.5-1.44v-2.85l1.25-.72 1.25-.72 2.5 1.44Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.75 9.33v1.41l-1.25.72v1.73l-1.5.86-1.5-.86v-1.73l-1.25-.72V9.33L12 7.75l2.75 1.58Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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
    d: "M10.5 11.46v2.57c0 .18-.1.34-.25.43l-2 1.15c-.15.09-.34.09-.5 0l-2-1.15a.484.484 0 0 1-.25-.43v-2.28c0-.18.1-.34.25-.43l2-1.15c.15-.09.35-.09.5 0l1 .58 1.25.71ZM18.5 11.75v2.28c0 .18-.1.34-.25.43l-2 1.15c-.15.09-.34.09-.5 0l-2-1.15a.484.484 0 0 1-.25-.43v-2.57l1.25-.71 1-.58c.15-.09.34-.09.5 0l2 1.15c.15.08.25.25.25.43Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.75 9.62v1.13l-1.25.71v1.73l-1.25.72c-.15.09-.34.09-.5 0l-1.25-.72v-1.73l-1.25-.71V9.62c0-.18.1-.34.25-.43l2.25-1.29c.15-.09.34-.09.5 0l2.25 1.29c.15.08.25.25.25.43Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.5 11.5v2.8L8 15.8l-2.5-1.5v-2.8L8 10l1.2.7 1.3.8ZM18.5 11.5v2.8L16 15.8l-2.5-1.5v-2.8l1.3-.8L16 10l2.5 1.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.8 9.3v1.4l-1.3.8v1.7l-1.5.9-1.5-.9v-1.7l-1.3-.8V9.3L12 7.8l2.8 1.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 16.5c-.13 0-.26-.03-.37-.1l-2.5-1.44a.752.752 0 0 1-.38-.65v-2.85c0-.27.14-.52.38-.65l2.5-1.44a.77.77 0 0 1 .75 0l2.5 1.44c.23.13.38.38.38.65v2.85c0 .27-.14.52-.38.65l-2.5 1.44c-.12.07-.25.1-.38.1Zm-1.75-2.62L8 14.89l1.75-1.01v-1.99L8 10.88l-1.75 1.01v1.99ZM16 16.5c-.13 0-.26-.03-.37-.1l-2.5-1.44a.752.752 0 0 1-.38-.65v-2.85c0-.27.14-.52.38-.65l2.5-1.44a.77.77 0 0 1 .75 0l2.5 1.44c.23.13.38.38.38.65v2.85c0 .27-.14.52-.38.65l-2.5 1.44c-.12.07-.25.1-.38.1Zm-1.75-2.62L16 14.89l1.75-1.01v-1.99L16 10.88l-1.75 1.01v1.99Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 14.8c-.13 0-.26-.03-.37-.1l-1.5-.86a.752.752 0 0 1-.38-.65v-1.3l-.87-.5a.752.752 0 0 1-.38-.65V9.32c0-.27.14-.52.38-.65l2.75-1.58a.77.77 0 0 1 .75 0l2.75 1.58c.23.13.38.38.38.65v1.42c0 .27-.14.52-.38.65l-.87.5v1.3c0 .27-.14.52-.38.65l-1.5.86c-.12.07-.25.1-.38.1Zm-.75-2.04.75.43.75-.43v-1.3c0-.27.14-.52.38-.65l.87-.5v-.55l-2-1.15-2 1.15v.55l.87.5c.23.13.38.38.38.65v1.3Z",
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
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.5 11.46v2.85L8 15.75l-2.5-1.44v-2.85L8 10.02l1.25.72 1.25.72ZM18.5 11.46v2.85L16 15.75l-2.5-1.44v-2.85l1.25-.72 1.25-.72 2.5 1.44Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.75 9.33v1.41l-1.25.72v1.73l-1.5.86-1.5-.86v-1.73l-1.25-.72V9.33L12 7.75l2.75 1.58Z"
  })), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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

var Zel = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Zel.displayName = 'Zel';

module.exports = Zel;
