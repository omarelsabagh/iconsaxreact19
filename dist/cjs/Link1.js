'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.408 18.592c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73 2.82 0 5.12-2.3 5.12-5.12 0-2.82-2.3-5.12-5.12-5.12a5.13 5.13 0 0 0-5.12 5.12c0 .4-.33.73-.73.73-.4 0-.73-.33-.73-.73 0-3.63 2.95-6.59 6.59-6.59 3.64 0 6.58 2.95 6.58 6.58s-2.95 6.59-6.59 6.59Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.59 5.41c.4 0 .73.33.73.73 0 .4-.33.73-.73.73a5.13 5.13 0 0 0-5.12 5.12c0 2.82 2.3 5.12 5.12 5.12 2.82 0 5.12-2.3 5.12-5.12 0-.4.33-.73.73-.73.4 0 .73.33.73.73 0 3.63-2.95 6.59-6.59 6.59C4.94 18.58 2 15.63 2 12s2.95-6.59 6.59-6.59Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75M22 12c0 3.31-2.69 6-6 6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10 12c0-3.31 2.69-6 6-6 1.53 0 2.93.57 3.98 1.51",
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
    d: "M11 7.5v9c0 .55-.45 1-1 1H7.5c-1.52 0-2.89-.62-3.89-1.61A5.547 5.547 0 0 1 2 12.22C1.88 9.08 4.62 6.5 7.77 6.5H10c.55 0 1 .45 1 1ZM22.002 11.78c.13 3.15-2.61 5.72-5.76 5.72h-2.23c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1h2.5c1.52 0 2.89.62 3.89 1.61.93.95 1.54 2.24 1.6 3.67Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.99 17.5h1.51c3.02 0 5.5-2.47 5.5-5.5 0-3.02-2.47-5.5-5.5-5.5h-1.51M9 6.5H7.5A5.51 5.51 0 0 0 2 12c0 3.02 2.47 5.5 5.5 5.5H9M8 12h8",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.502 14.75h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-5c-2.62 0-4.75 2.13-4.75 4.75 0 1.1.39 2.17 1.09 3.02.26.32.22.79-.1 1.06-.32.26-.79.22-1.06-.1a6.236 6.236 0 0 1-1.44-3.98c0-3.45 2.8-6.25 6.25-6.25h5c3.45 0 6.25 2.8 6.25 6.25s-2.79 6.25-6.24 6.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.5 21.75h-5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h5c2.62 0 4.75-2.13 4.75-4.75 0-1.1-.39-2.17-1.09-3.02a.758.758 0 0 1 .1-1.06.75.75 0 0 1 1.06.1 6.236 6.236 0 0 1 1.44 3.98c-.01 3.45-2.81 6.25-6.26 6.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14.988 17.5h1.51c3.02 0 5.5-2.47 5.5-5.5 0-3.02-2.47-5.5-5.5-5.5h-1.51M9 6.5H7.5A5.51 5.51 0 0 0 2 12c0 3.02 2.47 5.5 5.5 5.5H9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M8 12h8",
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

var Link1 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Link1.displayName = 'Link1';

module.exports = Link1;
