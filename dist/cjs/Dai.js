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
    d: "M12 7.75H8.75v1.5h6.46c-.78-.91-1.92-1.5-3.21-1.5zM16.25 12c0-.44-.09-.85-.21-1.25H8.75v2.5h7.29c.12-.4.21-.81.21-1.25z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.52 12.75h-1.47c-.98 1.79-2.87 3-5.05 3H8c-.41 0-.75-.34-.75-.75v-2.25h-.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.77v-2.5h-.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.77V7c0-.41.34-.75.75-.75h4c2.18 0 4.07 1.21 5.05 3h1.47c.41 0 .75.34.75.75s-.34.75-.75.75h-.91a5.7 5.7 0 010 2.5h.91c.41 0 .75.34.75.75s-.34.75-.75.75z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M8.75 16.25H12c1.29 0 2.43-.59 3.21-1.5H8.75v1.5z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 7v10h4c2.76 0 5-2.24 5-5s-2.24-5-5-5H8ZM6.48 10h12.04M6.48 14h12.04",
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
    d: "M12 17.75H8c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h4c3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75Zm-3.25-1.5H12A4.26 4.26 0 0 0 16.25 12 4.26 4.26 0 0 0 12 7.75H8.75v8.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.52 10.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.52 14.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 7v10h4c2.8 0 5-2.2 5-5s-2.2-5-5-5H8ZM6.5 10h12M6.5 14h12",
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
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 17.75H8c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h4c3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75Zm-3.25-1.5H12A4.26 4.26 0 0 0 16.25 12 4.26 4.26 0 0 0 12 7.75H8.75v8.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.52 10.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.52 14.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 7v10h4c2.76 0 5-2.24 5-5s-2.24-5-5-5H8ZM6.48 10h12.04M6.48 14h12.04"
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

var Dai = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Dai.displayName = 'Dai';

module.exports = Dai;
