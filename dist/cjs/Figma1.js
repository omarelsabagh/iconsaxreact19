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
    d: "M12 12c0-1.1.9-2 2-2h-2v2z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 10c0 1.1-.9 2-2 2s-2-.9-2-2v4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2h4c1.1 0 2 .9 2 2s-.9 2-2 2c1.1 0 2 .9 2 2z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2V6ZM12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4ZM12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-2ZM12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V6ZM14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
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
    d: "M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 8.672H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33H12v-6.66Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 15.328H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33v-3.33Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.33 8.672c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33 1.49-3.33 3.33-3.33Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2V6ZM12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4ZM12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-2ZM12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V6ZM14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
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
    d: "M12.75 10.75H10c-1.52 0-2.75-1.23-2.75-2.75S8.48 5.25 10 5.25h2.75v5.5Zm-2.75-4a1.25 1.25 0 0 0 0 2.5h1.25v-2.5H10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.75 14.75H10c-1.52 0-2.75-1.23-2.75-2.75S8.48 9.25 10 9.25h2.75v5.5Zm-2.75-4a1.25 1.25 0 0 0 0 2.5h1.25v-2.5H10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10 18.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75h2.75V16c0 1.52-1.23 2.75-2.75 2.75Zm0-4A1.25 1.25 0 1 0 11.25 16v-1.25H10ZM14 10.75h-2.75v-5.5H14c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75Zm-1.25-1.5H14a1.25 1.25 0 0 0 0-2.5h-1.25v2.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14 14.75c-1.52 0-2.75-1.23-2.75-2.75S12.48 9.25 14 9.25s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2ZM12 8.672H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33H12v-6.66Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 15.328H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33v-3.33Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.33 8.672c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33 1.49-3.33 3.33-3.33Z"
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

var Figma1 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Figma1.displayName = 'Figma1';

module.exports = Figma1;
