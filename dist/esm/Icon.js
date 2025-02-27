import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 014.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 00-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11zM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 01-.25-1.03.76.76 0 011.03-.25A6.252 6.252 0 0018.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 01.25-1.03.75.75 0 011.03.25 7.789 7.789 0 011.14 4.05c0 4.26-3.48 7.74-7.75 7.74z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M20.2 3.8h.1M3.7 20.2h.1",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 6a6.995 6.995 0 0 0-9.57 9.65M17.97 8.352a6.963 6.963 0 0 1 1.03 3.65c0 1.24-.32 2.4-.89 3.41M8.34 17.969a7.025 7.025 0 0 0 6.61.38",
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
    d: "M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 0 1 4.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 0 0-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11ZM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.252 6.252 0 0 0 18.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 0 1 .25-1.03.75.75 0 0 1 1.03.25 7.789 7.789 0 0 1 1.14 4.05c0 4.26-3.48 7.74-7.75 7.74Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20.2 3.8h.1M3.7 20.2h.1",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 6c-1.1-.6-2.3-1-3.6-1-3.9 0-7 3.1-7 7 0 1.3.4 2.6 1 3.7M8.3 18c1.1.7 2.3 1 3.7 1 3.9 0 7-3.1 7-7 0-1.3-.4-2.6-1-3.7",
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
    d: "M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 0 1 4.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 0 0-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11ZM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.252 6.252 0 0 0 18.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 0 1 .25-1.03.75.75 0 0 1 1.03.25 7.789 7.789 0 0 1 1.14 4.05c0 4.26-3.48 7.74-7.75 7.74Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15.6 6a6.995 6.995 0 0 0-9.57 9.65M8.34 17.972c1.07.65 2.32 1.03 3.66 1.03a6.995 6.995 0 0 0 5.97-10.65",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M20.2 3.8h.1M3.7 20.2h.1",
    stroke: color,
    strokeWidth: "3",
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

var Icon = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Icon.displayName = 'Icon';

export { Icon as default };
