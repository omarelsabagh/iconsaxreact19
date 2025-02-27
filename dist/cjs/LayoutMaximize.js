'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68ZM18.75 10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.81L13.06 12l4.19 4.19V14c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41-.09.04-.19.06-.29.06h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.19L12 13.06l-4.19 4.19H10c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.1 0-.2-.02-.29-.06a.782.782 0 0 1-.41-.41.868.868 0 0 1-.05-.28v-4c0-.41.34-.75.75-.75s.75.34.75.75v2.19L10.94 12 6.75 7.81V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.09-.03.18-.05.28-.05h4c.41 0 .75.34.75.75s-.34.75-.75.75H7.81L12 10.94l4.19-4.19H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.1 0 .19.02.29.06.18.08.33.22.41.41.03.09.05.18.05.28v4Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M18 6 6 18",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 10V6h-4M6 14v4h4M6 6l12 12M6 10V6h4M18 14v4h-4",
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
    d: "M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 10.75c.41 0 .75-.34.75-.75V6c0-.1-.02-.19-.06-.29a.782.782 0 0 0-.41-.41.868.868 0 0 0-.28-.05h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19L12 10.94 7.81 6.75H10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6c-.1 0-.19.02-.29.06-.18.07-.33.22-.4.4-.04.1-.06.19-.06.29v4c0 .41.34.75.75.75s.75-.34.75-.75V7.81L10.94 12l-4.19 4.19V14c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.08.03.18.05.28.05h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.81L12 13.06l4.19 4.19H14c-.41 0-.75.34-.75.75s.34.75.75.75h4c.1 0 .2-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29v-4c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.19L13.06 12l4.19-4.19V10c0 .41.34.75.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 10V6h-4M6 14v4h4M6 6l12 12M6 10V6h4M18 14v4h-4",
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
    d: "M6.001 18.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l12-12c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-12 12c-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 10.75c-.41 0-.75-.34-.75-.75V6.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75ZM10 18.75H6c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v3.25H10c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.001 18.751c-.19 0-.38-.07-.53-.22l-12-12a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l12 12c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6 10.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H6.75V10c0 .41-.34.75-.75.75ZM18 18.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z",
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
    d: "M18 6 6 18M18 10V6h-4M6 14v4h4M6 6l12 12M6 10V6h4M18 14v4h-4"
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

var LayoutMaximize = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
LayoutMaximize.displayName = 'LayoutMaximize';

module.exports = LayoutMaximize;
