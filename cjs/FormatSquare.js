'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.75 16.5v-9c1.19-.5 2-1.67 2-3 0-1.79-1.46-3.25-3.25-3.25-1.32 0-2.5.81-3 2h-9c-.5-1.19-1.67-2-3-2-1.79 0-3.25 1.46-3.25 3.25 0 1.32.81 2.5 2 3v9c-1.19.5-2 1.67-2 3 0 1.79 1.46 3.25 3.25 3.25 1.32 0 2.5-.81 3-2h9c.5 1.19 1.67 2 3 2 1.79 0 3.25-1.46 3.25-3.25 0-1.32-.81-2.5-2-3Zm-1.59-.23c-.11.01-.21.03-.32.05-.27.05-.53.14-.78.27-.06.03-.12.06-.18.1-.5.28-.91.69-1.19 1.19-.04.06-.07.12-.1.18-.13.25-.22.51-.27.78-.02.11-.04.21-.05.32-.01.03-.01.06-.01.09H7.74a3.4 3.4 0 0 0-.14-.72c-.02-.08-.05-.17-.09-.25-.03-.07-.06-.14-.1-.22-.03-.06-.06-.12-.1-.18-.28-.5-.69-.91-1.19-1.19-.06-.04-.12-.07-.18-.1-.08-.04-.15-.07-.22-.1-.08-.04-.17-.07-.25-.09a3.4 3.4 0 0 0-.72-.14V7.74c.26-.02.5-.07.74-.15.09-.02.19-.06.28-.1.05-.02.11-.05.17-.08.06-.03.12-.06.18-.1.5-.28.91-.69 1.19-1.19.04-.06.07-.12.1-.18s.06-.12.08-.17c.04-.09.08-.19.1-.28.08-.24.13-.48.15-.74h8.52c.02.27.07.52.16.77.02.08.05.17.09.25.02.06.05.11.08.17.03.06.06.12.1.18.28.5.69.91 1.19 1.19.06.04.12.07.18.1s.11.06.17.08c.08.04.17.07.25.09.25.09.5.14.77.16v8.52c-.03 0-.06 0-.09.01Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20 6.95v10.1A2.5 2.5 0 0 0 17.05 20H6.95A2.5 2.5 0 0 0 4 17.05V6.95A2.5 2.5 0 0 0 6.95 4h10.1A2.5 2.5 0 0 0 20 6.95Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 4.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6.95 4c.03.16.05.33.05.5ZM22 4.5A2.5 2.5 0 1 1 19.5 2M7 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 19.5a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 1 1 4.95-.5Z",
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
    d: "M16.31 20.15c-.04-.22-.06-.43-.06-.65 0-.09 0-.17.01-.25H7.74c.01.08.01.16.01.25a3.09 3.09 0 0 1-.25 1.25h9c-.09-.19-.15-.39-.19-.6ZM3.86 7.69a3.09 3.09 0 0 1-.61-.19v9c.19-.09.39-.15.6-.19a3.573 3.573 0 0 1 .9-.05V7.74c-.08.01-.16.01-.25.01-.22 0-.43-.02-.64-.06Zm16.29 0c-.22.04-.43.06-.65.06-.09 0-.17 0-.25-.01v8.52c.08-.01.16-.01.25-.01a3.09 3.09 0 0 1 1.25.25v-9c-.19.09-.39.15-.6.19ZM16.5 3.25h-9c.09.19.15.39.19.6.04.22.06.43.06.65 0 .09 0 .17-.01.25h8.52c-.01-.08-.01-.16-.01-.25a3.09 3.09 0 0 1 .25-1.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.75 4.5c0 .09 0 .17-.01.25-.02.26-.07.5-.15.74-.02.09-.06.19-.1.28-.02.05-.05.11-.08.17-.03.06-.06.12-.1.18-.28.5-.69.91-1.19 1.19-.06.04-.12.07-.18.1s-.12.06-.17.08c-.09.04-.19.08-.28.1-.24.08-.48.13-.74.15-.08.01-.16.01-.25.01a3.09 3.09 0 0 1-1.25-.25c-1.19-.5-2-1.68-2-3 0-1.79 1.46-3.25 3.25-3.25 1.33 0 2.5.81 3 2 .09.19.15.39.19.6.04.22.06.43.06.65ZM22.75 4.5c0 1.33-.81 2.5-2 3-.19.09-.39.15-.6.19-.22.04-.43.06-.65.06-.09 0-.17 0-.25-.01-.27-.02-.52-.07-.77-.16-.08-.02-.17-.05-.25-.09-.06-.02-.11-.05-.17-.08-.06-.03-.12-.06-.18-.1-.5-.28-.91-.69-1.19-1.19-.04-.06-.07-.12-.1-.18s-.06-.11-.08-.17c-.04-.08-.07-.17-.09-.25-.09-.25-.14-.5-.16-.77-.01-.08-.01-.16-.01-.25a3.09 3.09 0 0 1 .25-1.25c.5-1.19 1.68-2 3-2 1.79 0 3.25 1.46 3.25 3.25ZM7.75 19.5a3.09 3.09 0 0 1-.25 1.25c-.5 1.19-1.68 2-3 2-1.79 0-3.25-1.46-3.25-3.25 0-1.33.81-2.5 2-3 .19-.09.39-.15.6-.19a3.573 3.573 0 0 1 .9-.05c.25.02.49.07.72.14.08.02.17.05.25.09.07.03.14.06.22.1.06.03.12.06.18.1.5.28.91.69 1.19 1.19.04.06.07.12.1.18.04.08.07.15.1.22.04.08.07.17.09.25.07.23.12.47.14.72.01.08.01.16.01.25ZM22.75 19.5c0 1.79-1.46 3.25-3.25 3.25-1.33 0-2.5-.81-3-2-.09-.19-.15-.39-.19-.6-.04-.22-.06-.43-.06-.65 0-.09 0-.17.01-.25 0-.03 0-.06.01-.09.01-.11.03-.21.05-.32.05-.27.14-.53.27-.78.03-.06.06-.12.1-.18.28-.5.69-.91 1.19-1.19.06-.04.12-.07.18-.1.25-.13.51-.22.78-.27.11-.02.21-.04.32-.05.03-.01.06-.01.09-.01.08-.01.16-.01.25-.01a3.09 3.09 0 0 1 1.25.25c1.19.5 2 1.68 2 3Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20 6.95v10.1A2.5 2.5 0 0 0 17.05 20H6.95A2.5 2.5 0 0 0 4 17.05V6.95A2.5 2.5 0 0 0 6.95 4h10.1A2.5 2.5 0 0 0 20 6.95Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 4.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6.95 4c.03.16.05.33.05.5ZM22 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM7 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 19.5a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 1 1 4.95-.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.05 20.75H6.95c-.22 0-.43-.1-.58-.27-.15-.17-.2-.4-.16-.62.02-.12.04-.24.04-.36 0-.96-.79-1.75-1.75-1.75-.12 0-.25.01-.36.04a.746.746 0 0 1-.89-.74V6.95c0-.22.1-.43.27-.58.17-.15.39-.2.62-.16.11.03.24.04.36.04.96 0 1.75-.79 1.75-1.75 0-.12-.01-.25-.04-.36a.746.746 0 0 1 .74-.89h10.1c.22 0 .43.1.58.27.15.17.2.4.16.62-.02.12-.04.24-.04.36 0 .96.79 1.75 1.75 1.75.12 0 .25-.01.36-.04a.746.746 0 0 1 .89.74v10.1c0 .22-.1.43-.27.58-.17.15-.4.2-.62.16-.12-.02-.24-.04-.36-.04-.96 0-1.75.79-1.75 1.75 0 .12.01.25.04.36.04.22-.02.45-.16.62-.14.17-.36.27-.58.27Zm-9.31-1.5h8.52c.12-1.59 1.4-2.87 2.99-2.99V7.74a3.257 3.257 0 0 1-2.99-2.99H7.74a3.257 3.257 0 0 1-2.99 2.99v8.52c1.59.12 2.87 1.4 2.99 2.99Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4.5 7.75c-.22 0-.43-.02-.64-.06A3.263 3.263 0 0 1 1.25 4.5c0-1.79 1.46-3.25 3.25-3.25 1.54 0 2.88 1.09 3.19 2.6.04.22.06.43.06.65 0 1.79-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75 0 .83.59 1.55 1.4 1.71.1.03.23.04.35.04.96 0 1.75-.79 1.75-1.75 0-.12-.01-.25-.04-.36-.16-.8-.88-1.39-1.71-1.39ZM19.5 7.75a3.256 3.256 0 0 1-3.19-3.89 3.263 3.263 0 0 1 3.19-2.61c1.79 0 3.25 1.46 3.25 3.25 0 1.54-1.09 2.88-2.6 3.19-.22.04-.43.06-.65.06Zm0-5c-.83 0-1.55.59-1.71 1.4-.02.11-.04.23-.04.35 0 .96.79 1.75 1.75 1.75.12 0 .25-.01.36-.04.8-.16 1.39-.88 1.39-1.71 0-.96-.79-1.75-1.75-1.75ZM4.5 22.75c-1.79 0-3.25-1.46-3.25-3.25 0-1.54 1.09-2.88 2.6-3.19.21-.04.43-.06.65-.06a3.256 3.256 0 0 1 3.19 3.89 3.263 3.263 0 0 1-3.19 2.61Zm0-5c-.12 0-.25.01-.36.04-.8.16-1.39.88-1.39 1.71 0 .96.79 1.75 1.75 1.75.83 0 1.55-.59 1.71-1.4.02-.11.04-.23.04-.35 0-.96-.79-1.75-1.75-1.75ZM19.5 22.75c-1.54 0-2.88-1.09-3.19-2.6-.04-.21-.06-.43-.06-.65a3.256 3.256 0 0 1 3.89-3.19c1.52.31 2.61 1.65 2.61 3.19 0 1.79-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75 0 .12.01.25.04.36.16.8.88 1.39 1.71 1.39.96 0 1.75-.79 1.75-1.75 0-.83-.59-1.55-1.4-1.71-.1-.03-.23-.04-.35-.04Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M20 6.95v10.1A2.5 2.5 0 0 0 17.05 20H6.95A2.5 2.5 0 0 0 4 17.05V6.95A2.5 2.5 0 0 0 6.95 4h10.1A2.5 2.5 0 0 0 20 6.95Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7 4.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6.95 4c.03.16.05.33.05.5ZM22 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM7 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 19.5a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 1 1 4.95-.5Z",
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

var FormatSquare = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
FormatSquare.displayName = 'FormatSquare';

module.exports = FormatSquare;
