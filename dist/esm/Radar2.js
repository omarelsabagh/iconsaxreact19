import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 17.75c-4.27 0-7.75-3.48-7.75-7.75 0-1.36.36-2.69 1.03-3.86a.75.75 0 0 1 1.02-.28l6.07 3.49c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28l-2.91-1.67c-.1.33-.17.67-.17 1.02 0 1.9 1.55 3.45 3.45 3.45 1.9 0 3.45-1.55 3.45-3.45 0-1.9-1.55-3.45-3.45-3.45-.51 0-1.01.11-1.47.33-.38.18-.82.02-1-.36a.748.748 0 0 1 .36-1A4.955 4.955 0 0 1 16.95 12c0 2.73-2.22 4.95-4.95 4.95S7.05 14.73 7.05 12c0-.61.12-1.22.34-1.79l-1.15-.65c-.32.77-.49 1.6-.49 2.44 0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25a6.252 6.252 0 0 0-10-5 .75.75 0 0 1-.9-1.2A7.715 7.715 0 0 1 12 4.25c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 12 3.33 7.02C2.49 8.49 2 10.19 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-2.049-.62-3.96-1.68-5.54M6 4a9.991 9.991 0 0 1 11.13-.58",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.83 8.96A5.92 5.92 0 0 0 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6c-.91 0-1.78.2-2.55.57",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.998 4.25c-1.69 0-3.3.54-4.65 1.55a.75.75 0 0 0 .9 1.2 6.174 6.174 0 0 1 3.75-1.25c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25-6.25-2.8-6.25-6.25c0-.84.17-1.67.49-2.44l1.14.65a4.95 4.95 0 0 0-.34 1.79c0 2.73 2.22 4.95 4.95 4.95s4.95-2.22 4.95-4.95a4.955 4.955 0 0 0-7.06-4.48c-.37.18-.54.62-.36 1 .18.37.62.53 1 .36.46-.22.95-.33 1.47-.33 1.9 0 3.45 1.55 3.45 3.45 0 1.9-1.55 3.45-3.45 3.45-1.9 0-3.45-1.55-3.45-3.45 0-.35.07-.69.17-1.02l2.91 1.67c.36.21.82.08 1.02-.28a.74.74 0 0 0-.28-1.02l-6.07-3.49a.741.741 0 0 0-1.02.28A7.77 7.77 0 0 0 4.238 12c0 4.27 3.48 7.75 7.75 7.75s7.75-3.48 7.75-7.75-3.47-7.75-7.74-7.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.83 8.96A5.92 5.92 0 0 0 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6c-.91 0-1.78.2-2.55.57",
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
    d: "M12 22.748c-5.93 0-10.75-4.82-10.75-10.75 0-1.88.49-3.73 1.43-5.36.21-.36.66-.48 1.02-.28l8.67 4.98c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28l-8-4.59a9.218 9.218 0 0 0-.88 3.94c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-2.02 0-3.94.64-5.55 1.85a.75.75 0 0 1-.9-1.2c1.87-1.4 4.1-2.15 6.45-2.15 5.93 0 10.75 4.82 10.75 10.75S17.93 22.748 12 22.748Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18.75c-3.72 0-6.75-3.03-6.75-6.75 0-1.2.32-2.39.93-3.42a.752.752 0 1 1 1.3.76 5.255 5.255 0 0 0 4.53 7.91c2.89 0 5.25-2.35 5.25-5.25a5.256 5.256 0 0 0-7.49-4.75c-.38.17-.82.01-1-.36a.745.745 0 0 1 .36-1c.9-.42 1.87-.64 2.87-.64 3.72 0 6.75 3.03 6.75 6.75s-3.03 6.75-6.75 6.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M6.83 8.96A5.92 5.92 0 006 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6c-.91 0-1.78.2-2.55.57",
    opacity: ".4"
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

var Radar2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Radar2.displayName = 'Radar2';

export { Radar2 as default };
