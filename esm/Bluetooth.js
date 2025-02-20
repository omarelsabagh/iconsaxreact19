import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12.93 10.64 2.33-2.13-2.33-1.87v4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.08 12.39c.31.29.49.69.48 1.1-.01.41-.2.8-.53 1.08l-2.42 2.02c-.42.35-.8.45-1.09.45-.23 0-.41-.06-.51-.11-.23-.11-.77-.47-.77-1.45v-3.42l-2.92 2.68c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l3.93-3.6v-.08L7.49 8.38a.755.755 0 0 1-.04-1.06c.28-.3.76-.33 1.06-.05l2.92 2.68V6.53c0-.98.54-1.34.77-1.45.23-.11.85-.29 1.6.34l2.42 2.02c.33.27.52.67.53 1.08.01.41-.16.81-.48 1.1L13.67 12l2.6 2.39Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12.93 17.36 2.33-1.95-2.33-2.11v4.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m14.95 3.39-1.13-.95c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L5.36 5.36",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m5.36 18.639 12.35-11.32c.51-.47.5-1.22-.04-1.67",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.71 19.03c-.23 0-.41-.06-.51-.11-.23-.11-.77-.47-.77-1.45v-3.42l-2.92 2.68c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l3.93-3.6v-.08L7.5 8.38a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l2.92 2.68V6.53c0-.98.54-1.34.77-1.45.23-.11.85-.29 1.6.34l2.42 2.02c.33.27.52.67.53 1.08.01.41-.16.81-.48 1.1l-2.61 2.39 2.61 2.39c.31.29.49.69.48 1.1-.01.41-.2.8-.53 1.08L13.8 18.6c-.42.34-.8.43-1.09.43Zm.22-5.73v4.06l2.33-1.95-2.33-2.11Zm0-6.66v4l2.33-2.14-2.33-1.86Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.64 18.64 17.99 7.32c.51-.47.5-1.22-.04-1.67L14.1 2.44c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L5.64 5.36",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13.13 22.75c-.27 0-.48-.07-.63-.14-.36-.17-.97-.64-.97-1.9v-6.45L6.14 19.2c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l6.4-5.87v-.45L5.13 5.9a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l5.39 4.94V3.28c0-1.26.61-1.74.97-1.9.36-.17 1.11-.33 2.08.48l3.85 3.21c.42.35.67.85.68 1.38.01.53-.21 1.04-.62 1.41l-4.5 4.13 4.5 4.13c.4.37.63.89.62 1.41-.01.53-.26 1.03-.68 1.38l-3.85 3.21c-.57.49-1.07.63-1.45.63Zm-.1-9.6v7.56c0 .37.08.53.12.55.01-.01.19-.05.47-.28l3.85-3.21c.09-.08.14-.17.14-.27s-.04-.19-.13-.27l-4.45-4.08Zm.09-10.4c-.01.01-.09.18-.09.54v7.56l4.45-4.08a.35.35 0 0 0 .13-.27c0-.1-.05-.19-.14-.27l-3.86-3.21c-.26-.22-.43-.27-.49-.27Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.64 18.64 17.99 7.32c.51-.47.5-1.22-.04-1.67L14.1 2.44c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L5.64 5.36",
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
      return /*#__PURE__*/React.createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React.createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React.createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React.createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React.createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React.createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React.createElement(Linear, {
        color: color
      });
  }
};

var Bluetooth = /*#__PURE__*/forwardRef(function (_ref7, ref) {
  var _ref7$variant = _ref7.variant,
      variant = _ref7$variant === void 0 ? 'Linear' : _ref7$variant,
      _ref7$color = _ref7.color,
      color = _ref7$color === void 0 ? 'currentColor' : _ref7$color,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? '24' : _ref7$size,
      rest = _objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
Bluetooth.displayName = 'Bluetooth';

export { Bluetooth as default };
