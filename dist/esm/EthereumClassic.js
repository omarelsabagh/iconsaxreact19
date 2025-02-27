import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M6.9 9.101l4.77-2.12c.21-.09.45-.09.65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11c-.34-.42-.9-.42-1.24 0l-5 6.11c-.28.36.11.87.53.68zM6.9 14.9l4.78 2.12c.21.09.45.09.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11c-.34.42-.9.42-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68zM11.78 9.49l-4.13 2.06c-.37.18-.37.71 0 .89l4.13 2.06c.14.07.31.07.45 0l4.13-2.06c.37-.18.37-.71 0-.89l-4.13-2.06a.508.508 0 00-.45 0z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m6.9 9.101 4.77-2.12c.21-.09.45-.09.65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11c-.34-.42-.9-.42-1.24 0l-5 6.11c-.28.36.11.87.53.68ZM6.9 14.9l4.78 2.12c.21.09.45.09.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11c-.34.42-.9.42-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68ZM16.01 12.619l1.23-.62L12 9.379l-5.24 2.62 5.24 2.62.8-.4",
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
    d: "m6.9 9.101 4.77-2.12c.21-.09.45-.09.65 0l4.78 2.12c.42.19.81-.32.52-.68l-5-6.11c-.34-.42-.9-.42-1.24 0l-5 6.11c-.29.36.1.87.52.68ZM6.9 14.9l4.78 2.12c.21.09.45.09.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11c-.34.42-.9.42-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11.78 9.49-4.13 2.06c-.37.18-.37.71 0 .89l4.13 2.06c.14.07.31.07.45 0l4.13-2.06c.37-.18.37-.71 0-.89l-4.13-2.06a.508.508 0 0 0-.45 0Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.9 9.1 11.7 7c.2-.1.4-.1.7 0l4.8 2.1c.4.2.8-.3.5-.7l-5-6.1c-.3-.4-.9-.4-1.2 0l-5 6.1c-.4.4 0 .9.4.7ZM6.9 14.9l4.8 2.1c.2.1.4.1.7 0l4.8-2.1c.4-.2.8.3.5.7l-5 6.1c-.3.4-.9.4-1.2 0l-5-6.1c-.4-.4 0-.9.4-.7ZM12 9.4 6.8 12l5.2 2.6 5.2-2.6L12 9.4Z",
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
    d: "M17.28 9.892c-.16 0-.33-.03-.49-.1l-4.77-2.12-4.82 2.12c-.5.22-1.09.08-1.43-.36a1.16 1.16 0 0 1 .03-1.47l5-6.11c.61-.75 1.79-.75 2.41 0l5 6.11c.35.43.36 1.03.03 1.47-.25.29-.6.46-.96.46ZM12 6.162c.21 0 .43.04.63.13l3.58 1.59-4.17-5.09-4.23 5.08 3.56-1.58c.2-.09.41-.13.63-.13ZM12 22.75c-.46 0-.9-.21-1.2-.59l-5-6.11a1.187 1.187 0 0 1 1.4-1.84l4.78 2.12 4.82-2.12a1.187 1.187 0 0 1 1.4 1.84l-5 6.11c-.3.38-.74.59-1.2.59Zm-4.21-6.63 4.16 5.09 4.23-5.08-3.55 1.58c-.4.18-.86.18-1.26 0l-3.58-1.59Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.371a.73.73 0 0 1-.33-.08l-5.25-2.62a.77.77 0 0 1-.42-.67c0-.28.16-.54.42-.67l5.25-2.62c.21-.11.46-.11.67 0l5.25 2.62c.25.13.42.39.42.67s-.16.54-.42.67l-5.25 2.62c-.11.06-.22.08-.34.08Zm-3.57-3.37 3.57 1.78 3.57-1.78-3.57-1.78-3.57 1.78Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m6.9 9.101 4.77-2.12c.21-.09.45-.09.65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11c-.34-.42-.9-.42-1.24 0l-5 6.11c-.28.36.11.87.53.68ZM6.9 14.9l4.78 2.12c.21.09.45.09.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11c-.34.42-.9.42-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "m12 9.379-5.24 2.62 5.24 2.62 5.24-2.62L12 9.379Z",
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

var EthereumClassic = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
EthereumClassic.displayName = 'EthereumClassic';

export { EthereumClassic as default };
