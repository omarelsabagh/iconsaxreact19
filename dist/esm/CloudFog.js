import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19.801 12.001h-15.6c-.22 0-.42-.15-.49-.36-2.75-9.09 11.13-12.58 12.74-2.82 1.66.21 2.97 1.15 3.78 2.41.21.33-.04.77-.43.77ZM20 15.781H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.781H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 21.781H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.289 11.618c-3.2-8.93 10.33-12.49 11.88-3.12 1.93.24 3.34 1.52 4.03 3.12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.54 8.93c.52-.26 1.09-.4 1.67-.41M18 15.031h2M4 15.031h11M6 18.031h12M9 21.031h6",
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
    d: "M19.801 12.001h-15.6c-.22 0-.42-.15-.49-.36-2.75-9.09 11.13-12.58 12.73-2.82 1.66.21 2.97 1.15 3.78 2.41.22.33-.03.77-.42.77Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M20 15.781H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.781H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 21.781H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.54 8.93c.52-.26 1.09-.4 1.67-.41M4 15.03h16M6 18.03h12M9 21.03h6",
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
    d: "M4.29 12.37a.75.75 0 0 1-.71-.5c-1.01-2.82-.55-5.53 1.26-7.42 1.85-1.94 4.81-2.71 7.37-1.92 2.34.72 3.99 2.65 4.59 5.33 1.8.41 3.31 1.67 4.08 3.47a.76.76 0 0 1-.39.99.76.76 0 0 1-.99-.39c-.65-1.5-1.9-2.47-3.44-2.67a.753.753 0 0 1-.65-.62c-.4-2.4-1.7-4.06-3.65-4.66-2.02-.62-4.37-.01-5.84 1.52-1.43 1.49-1.76 3.58-.94 5.88a.75.75 0 0 1-.45.96c-.07.01-.16.03-.24.03Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.54 9.682c-.28 0-.54-.15-.67-.42a.754.754 0 0 1 .34-1.01c.63-.31 1.3-.48 1.99-.49.43.02.76.32.76.74.01.41-.32.76-.74.76-.47.01-.92.12-1.35.33a.59.59 0 0 1-.33.09ZM20 15.781H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.781H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 21.781H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.289 11.618c-3.2-8.93 10.33-12.49 11.88-3.12 1.93.24 3.34 1.52 4.03 3.12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.54 8.93c.52-.26 1.09-.4 1.67-.41",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M4 15.031h16",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 18.031h12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M9 21.031h6",
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

var CloudFog = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
CloudFog.displayName = 'CloudFog';

export { CloudFog as default };
