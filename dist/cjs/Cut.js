'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm1.57 12.68a.75.75 0 0 1-.9 1.2l-3.95-2.95-2.41 1.8c.01.1.03.2.03.3a2.3 2.3 0 1 1-2.3-2.3c.62 0 1.17.25 1.58.64l1.84-1.38-1.83-1.37a2.3 2.3 0 1 1 .7-1.65c0 .1-.02.19-.03.28l2.4 1.8 3.95-2.95a.75.75 0 0 1 .9 1.2l-3.6 2.69 3.62 2.69Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.42 10.899a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84ZM8.42 16.938a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84ZM17.5 8.7l-7.34 5.49M17.5 15.28l-7.34-5.49",
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
    d: "M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m14.17 11.992 3.6-2.69a.75.75 0 0 0-.9-1.2l-3.95 2.95-2.4-1.8c.01-.09.03-.18.03-.28a2.3 2.3 0 1 0-2.3 2.3c.62 0 1.18-.25 1.6-.65l1.83 1.37-1.84 1.38a2.3 2.3 0 0 0-1.58-.64 2.3 2.3 0 1 0 2.3 2.3c0-.1-.02-.2-.03-.3l2.41-1.8 3.95 2.95c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35l-3.62-2.69Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.42 10.9a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84ZM8.42 16.94a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84ZM17.5 8.7l-7.34 5.49M17.5 15.28l-7.34-5.49",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.42 11.65c-1.47 0-2.67-1.2-2.67-2.67S6.95 6.3 8.42 6.3s2.67 1.2 2.67 2.68c0 1.48-1.19 2.67-2.67 2.67Zm0-3.85c-.65 0-1.17.53-1.17 1.18 0 .65.53 1.17 1.17 1.17.64 0 1.17-.53 1.17-1.17 0-.64-.52-1.18-1.17-1.18ZM8.42 17.702c-1.47 0-2.67-1.2-2.67-2.68a2.67 2.67 0 1 1 5.34 0c0 1.47-1.19 2.68-2.67 2.68Zm0-3.85c-.65 0-1.17.53-1.17 1.17 0 .64.53 1.18 1.17 1.18.64 0 1.17-.53 1.17-1.18 0-.65-.52-1.17-1.17-1.17Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.16 14.94a.75.75 0 0 1-.45-1.35l7.34-5.49a.75.75 0 0 1 .9 1.2l-7.34 5.49a.76.76 0 0 1-.45.15Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.5 16.03a.76.76 0 0 1-.45-.15l-7.34-5.49a.75.75 0 0 1 .9-1.2l7.34 5.49a.75.75 0 0 1-.45 1.35Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.42 10.899a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84ZM8.42 16.938a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84ZM17.5 8.7l-7.34 5.49M17.5 15.28l-7.34-5.49"
  })));
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

var Cut = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Cut.displayName = 'Cut';

module.exports = Cut;
