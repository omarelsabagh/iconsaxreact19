'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 0 1 0-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L15.89 18l1.27 1.27Zm4.32-.81-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 0 1 0-.92L20.11 18l-1.27-1.27a.658.658 0 0 1 0-.92c.25-.25.66-.25.92 0l1.73 1.73c.24.26.24.66-.01.92Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21 7v4.47c0 .35-.34.59-.66.47a6.485 6.485 0 0 0-3.65-.31c-2.6.52-4.67 2.65-5.1 5.27-.26 1.6.06 3.11.79 4.34a.5.5 0 0 1-.43.76H8c-3.5 0-5-2-5-5V7c0-2.66 1.18-4.53 3.89-4.92.29-.04.55.19.56.49l.03 1.01c.03 1.6 1.38 2.92 3 2.92h3.02c1.65 0 3-1.35 3-3v-.93c0-.3.26-.54.55-.5C19.8 2.44 21 4.32 21 7Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15 3v.5c0 .82-.68 1.5-1.5 1.5h-3.03c-.81 0-1.48-.65-1.5-1.46l-.01-.51a.991.991 0 0 1 1-1.03H14c.55 0 1 .45 1 1Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m8.93 2 .03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17 17-2 2 2 2M20 17l2 2-2 2M3 12.98V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7M13 22H8c-3.5 0-5-2-5-5",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 0 1 0-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L15.89 18l1.27 1.27Zm4.32-.81-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 0 1 0-.92L20.1 18l-1.27-1.27a.658.658 0 0 1 0-.92c.25-.25.66-.25.92 0l1.73 1.73c.25.26.25.66 0 .92Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M21 7v7c-.83-.63-1.87-1-3-1-2.76 0-5 2.24-5 5 0 1.63.79 3.09 2 4H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h.93l.04 1.53c.02.81.69 1.47 1.5 1.47h3.03c.82 0 1.5-.68 1.5-1.5V2h1c3.5 0 5 2 5 5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15 2v1.5c0 .82-.68 1.5-1.5 1.5h-3.03c-.81 0-1.48-.66-1.5-1.47L8.93 2H15Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m8.93 2 .03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17 17-2 2 2 2M20 17l2 2-2 2",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 22H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7",
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
    d: "M13.5 5.748h-3.02c-1.22 0-2.23-.99-2.25-2.21l-.03-1.53c-.01-.41.32-.76.73-.77h.02c.41 0 .74.33.75.73l.03 1.53c.01.4.35.74.75.74h3.02c.42 0 .75-.34.75-.75v-1.49c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 1.24-1.01 2.25-2.25 2.25ZM17 21.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM20 21.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-2.86-1.39-4.25-4.25-4.25H8C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "m8.93 2 .03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "m17 17-2 2 2 2M20 17l2 2-2 2",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 22H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7",
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

var MobileProgramming = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MobileProgramming.displayName = 'MobileProgramming';

module.exports = MobileProgramming;
