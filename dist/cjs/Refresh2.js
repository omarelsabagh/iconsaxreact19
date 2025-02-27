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
    d: "M14.55 22.42c-.33 0-.64-.22-.73-.56-.1-.4.13-.81.53-.92a9.256 9.256 0 006.89-8.95c0-5.1-4.15-9.25-9.25-9.25-4.33 0-7.17 2.53-8.5 4.06h2.94c.41 0 .75.34.75.75s-.32.76-.74.76H2.01c-.07 0-.14-.01-.21-.03a.899.899 0 01-.24-.12.659.659 0 01-.21-.23c-.05-.1-.09-.2-.1-.31V3c0-.41.34-.75.75-.75s.75.34.75.75v2.39C4.38 3.64 7.45 1.25 12 1.25c5.93 0 10.75 4.82 10.75 10.75 0 4.88-3.29 9.16-8.01 10.4-.06.01-.13.02-.19.02zM11.29 22.73c-.02 0-.05 0-.07-.01-1.07-.07-2.12-.31-3.12-.7a.751.751 0 01-.43-.97c.15-.38.59-.58.97-.43.86.34 1.77.54 2.69.61h.01c.4.02.7.36.7.76v.04a.76.76 0 01-.75.7zm-5.51-2.15c-.17 0-.33-.05-.47-.16-.84-.67-1.57-1.46-2.18-2.35a.73.73 0 01.19-1.04.76.76 0 011.04.19c.53.77 1.16 1.45 1.89 2.02.17.14.28.35.28.58 0 .17-.05.34-.16.48-.14.18-.36.28-.59.28zM2.44 15.7c-.33 0-.62-.21-.71-.52-.32-1.03-.48-2.1-.48-3.18 0-.41.34-.75.75-.75s.75.34.75.75c0 .93.14 1.85.41 2.73.02.07.03.15.03.23 0 .33-.21.61-.52.71-.08.02-.15.03-.23.03z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M12 16a4 4 0 100-8 4 4 0 000 8z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m0 0V3m0 4.56H6.44"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeDasharray: "3 3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M2 12c0 5.52 4.48 10 10 10"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M14.55 22.42c-.33 0-.64-.22-.73-.56-.1-.4.13-.81.53-.92a9.256 9.256 0 006.89-8.95c0-5.1-4.15-9.25-9.25-9.25-4.33 0-7.17 2.53-8.5 4.06h2.94c.41 0 .75.34.75.75s-.32.76-.74.76H2.01c-.07 0-.14-.01-.21-.03a.899.899 0 01-.24-.12.659.659 0 01-.21-.23c-.05-.1-.09-.2-.1-.31V3c0-.41.34-.75.75-.75s.75.34.75.75v2.39C4.38 3.64 7.45 1.25 12 1.25c5.93 0 10.75 4.82 10.75 10.75 0 4.88-3.29 9.16-8.01 10.4-.06.01-.13.02-.19.02z",
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M11.29 22.73c-.02 0-.05 0-.07-.01-1.07-.07-2.12-.31-3.12-.7a.751.751 0 01-.43-.97c.15-.38.59-.58.97-.43.86.34 1.77.54 2.69.61h.01c.4.02.7.36.7.76v.04a.76.76 0 01-.75.7zm-5.51-2.15c-.17 0-.33-.05-.47-.16-.84-.67-1.57-1.46-2.18-2.35a.73.73 0 01.19-1.04.76.76 0 011.04.19c.53.77 1.16 1.45 1.89 2.02.17.14.28.35.28.58 0 .17-.05.34-.16.48-.14.18-.36.28-.59.28zM2.44 15.7c-.33 0-.62-.21-.71-.52-.32-1.03-.48-2.1-.48-3.18 0-.41.34-.75.75-.75s.75.34.75.75c0 .93.14 1.85.41 2.73.02.07.03.15.03.23 0 .33-.21.61-.52.71-.08.02-.15.03-.23.03z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M12 16a4 4 0 100-8 4 4 0 000 8z",
    opacity: ".4"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m0 0V3m0 4.56H6.44"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeDasharray: "3 3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M2 12c0 5.52 4.48 10 10 10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M14.55 22.42c-.33 0-.64-.22-.73-.56-.11-.4.13-.81.54-.92a9.256 9.256 0 006.89-8.95c0-5.1-4.15-9.25-9.25-9.25-4.33 0-7.17 2.53-8.5 4.06h2.94a.755.755 0 010 1.51H2.01c-.05 0-.14-.01-.21-.03a.899.899 0 01-.24-.12.659.659 0 01-.21-.23.808.808 0 01-.1-.31V3c0-.41.34-.75.75-.75s.75.34.75.75v2.39C4.38 3.64 7.45 1.25 12 1.25c5.93 0 10.75 4.82 10.75 10.75 0 4.88-3.29 9.16-8.01 10.4-.06.01-.13.02-.19.02zM11.29 22.73c-.02 0-.04-.01-.05-.01-1.08-.07-2.14-.31-3.14-.7a.747.747 0 01-.43-.97c.15-.38.6-.57.97-.43.87.34 1.78.54 2.7.61.39.02.7.36.7.76l-.01.04c-.02.39-.35.7-.74.7zm-5.51-2.15c-.17 0-.33-.06-.47-.16-.84-.68-1.58-1.47-2.18-2.35a.73.73 0 01.19-1.04.77.77 0 011.04.18v.01c.01.01.02.03.03.04a9.21 9.21 0 001.86 1.98c.17.14.28.35.28.58 0 .17-.05.34-.16.48-.15.18-.36.28-.59.28zM2.44 15.7c-.33 0-.62-.21-.71-.52-.32-1.03-.48-2.1-.48-3.18v-.01c.01-.41.34-.74.75-.74s.75.34.75.75c0 .94.14 1.86.41 2.73.02.08.03.15.03.23a.747.747 0 01-.75.74z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m0 0V3m0 4.56H6.44"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: color,
    strokeDasharray: "3 3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M2 12c0 5.52 4.48 10 10 10",
    opacity: ".4"
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

var Refresh2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Refresh2.displayName = 'Refresh2';

module.exports = Refresh2;
