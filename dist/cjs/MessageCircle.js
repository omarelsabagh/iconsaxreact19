'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5.25 10.81c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.631.631 0 0 0-.42-.21H9.9c-2.09 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.01.33-.01.5-.01h4.2c2.09 0 3.15 1.05 3.15 3.15v2.62Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.25 10.18v2.63c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.631.631 0 0 0-.42-.21H9.9c-2.1 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.02.32-.03.49-.03h4.2c2.11.02 3.16 1.07 3.16 3.16Z",
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
    d: "M17.25 10.18v2.63c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.631.631 0 0 0-.42-.21H9.9c-2.1 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.02.32-.03.49-.03h4.2c2.11.02 3.16 1.07 3.16 3.16Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.25 10.18v2.63c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.631.631 0 0 0-.42-.21H9.9c-2.1 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.02.32-.03.49-.03h4.2c2.11.02 3.16 1.07 3.16 3.16Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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
    d: "M12 18.31c-.47 0-.92-.24-1.23-.65l-.72-.96H9.9c-2.02 0-3.9-.47-3.9-3.9v-2.63C6 7.86 7.19 6.49 9.34 6.3c.16-.02.35-.03.56-.03h4.2c2.51 0 3.9 1.38 3.9 3.9v2.63c0 .2-.01.4-.03.58-.18 2.12-1.55 3.31-3.86 3.31h-.15l-.72.96c-.32.43-.77.66-1.24.66ZM9.9 7.79c-.14 0-.27 0-.4.02-1.41.12-2 .83-2 2.38v2.63c0 2.07.57 2.4 2.4 2.4h.26c.38 0 .79.2 1.02.5l.79 1.06.85-1.05c.24-.32.62-.51 1.02-.51h.26c1.55 0 2.25-.59 2.37-1.97.02-.16.02-.29.02-.43v-2.63c0-1.68-.72-2.4-2.4-2.4H9.9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M17.25 10.18v2.63c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.631.631 0 0 0-.42-.21H9.9c-2.1 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.02.32-.03.49-.03h4.2c2.11.02 3.16 1.07 3.16 3.16Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var MessageCircle = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MessageCircle.displayName = 'MessageCircle';

module.exports = MessageCircle;
