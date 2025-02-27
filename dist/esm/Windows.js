import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M20.8 2.241l-8 1.6c-.47.09-.8.5-.8.98v5.18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.78c0-.63-.58-1.1-1.2-.98zM20.8 21.76l-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98zM8.79 4.56l-6 1.27c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97zM8.79 19.44l-6-1.27c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97z",
    clipRule: "evenodd"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 6.03V2L12 4v7h10",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "m22 22-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3ZM10 19.7 2 18v-5h8v6.7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m20.8 2.241-8 1.6c-.47.09-.8.5-.8.98v5.18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.78c0-.63-.58-1.1-1.2-.98Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m20.8 21.76-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98ZM8.79 4.56l-6 1.28c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m8.79 19.44-6-1.28c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M22 2 12 4v7h10V2ZM22 22l-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3ZM10 19.7 2 18v-5h8v6.7Z",
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
    d: "M22 11.75H12c-.41 0-.75-.34-.75-.75V4c0-.36.25-.67.6-.74l10-2c.22-.04.45.01.62.16.17.14.27.36.27.58v9a.74.74 0 0 1-.74.75Zm-9.25-1.5h8.5V2.92l-8.5 1.7v5.63ZM22 22.75c-.05 0-.1 0-.15-.01l-10-2a.75.75 0 0 1-.6-.74v-7c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v9c0 .22-.1.44-.27.58-.14.11-.31.17-.48.17Zm-9.25-3.37 8.5 1.7v-7.33h-8.5v5.63ZM10 11.748H2c-.41 0-.75-.34-.75-.75v-5c0-.35.25-.66.59-.73l8-1.7c.22-.05.45.01.63.15.18.14.28.36.28.58v6.7c0 .41-.34.75-.75.75Zm-7.25-1.5h6.5v-5.02l-6.5 1.38v3.64ZM10 20.45c-.05 0-.1-.01-.16-.02l-8-1.7a.74.74 0 0 1-.59-.73v-5c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v6.7c0 .23-.1.44-.28.58-.13.11-.3.17-.47.17Zm-7.25-3.06 6.5 1.38v-5.02h-6.5v3.64Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M22 2 12 4v7h10V2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "m22 22-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M10 19.7 2 18v-5h8v6.7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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

var Windows = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Windows.displayName = 'Windows';

export { Windows as default };
