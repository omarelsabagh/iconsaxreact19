'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.75 9c0-4.27-3.48-7.75-7.75-7.75S4.25 4.73 4.25 9c0 .41.34.75.75.75s.75-.34.75-.75c0-3.45 2.8-6.25 6.25-6.25s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c3.92-.38 7-3.69 7-7.71Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7M12 16v6M15 19H9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19.75 9c0-4.27-3.48-7.75-7.75-7.75S4.25 4.73 4.25 9c0 .41.34.75.75.75s.75-.34.75-.75c0-3.45 2.8-6.25 6.25-6.25s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c3.92-.38 7-3.69 7-7.71Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7M12 16v6M15 19H9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.45 0 6.25-2.8 6.25-6.25S15.45 2.75 12 2.75 5.75 5.55 5.75 9c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 3.48-7.75 7.75-7.75S19.75 4.73 19.75 9s-3.48 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.75c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7M12 16v6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M15 19H9",
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

var Aquarius = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Aquarius.displayName = 'Aquarius';

module.exports = Aquarius;
