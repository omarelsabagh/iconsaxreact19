import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .68-.42 8.25-5.29 1.35-11.97z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17.85 12c-.43-.65-.98-1.31-1.69-2 0 0-.15 1-3.25 5-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .46-.29 4.03-2.58 4.22-6.09",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
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
    d: "M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .68-.42 8.25-5.29 1.35-11.97Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.2 10s-.2 1-3.2 5c-2.9 3.8 1.3 6.6 1.8 7h.1c.6-.5 8.2-5.3 1.3-12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.8 7.8c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
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
    d: "M14.76 22.721c-.17 0-.33-.04-.46-.12-.45-.29-2.69-1.84-3.1-4.2-.22-1.31.15-2.61 1.11-3.85 2.79-3.61 3.1-4.66 3.11-4.7.04-.28.23-.48.5-.57.27-.09.55 0 .76.2 2.28 2.21 3.32 4.49 3.08 6.78-.38 3.59-3.86 5.94-4.55 6.37-.12.05-.29.09-.45.09Zm1.62-11.41c-.46.81-1.3 2.11-2.88 4.14-.71.91-.97 1.79-.82 2.68.24 1.39 1.46 2.48 2.09 2.95.99-.69 3.23-2.51 3.49-5.02.17-1.54-.46-3.13-1.88-4.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.28 22.73c-.26 0-.52-.07-.71-.12-2.21-.63-4.21-2.65-4.99-5.02-.8-2.43-.31-4.97 1.39-7.16 3.1-4.06 4.13-7.33 4.37-8.23.11-.43.43-.76.87-.89.45-.12.94.01 1.28.35.03.02.05.05.07.08.94 1.26 1.95 3.51 1.95 6.05 0 1.74-1.22 3.32-2.4 4.84-1.25 1.62-2.54 3.29-2.4 5.1.13 1.34.71 2.36 1.1 3.04.33.57.64 1.11.25 1.62-.21.26-.49.34-.78.34Zm-.53-.76h.01-.01Zm1.9-18.91c-.46 1.51-1.66 4.57-4.49 8.29-1.77 2.29-1.6 4.41-1.15 5.78.53 1.61 1.73 3.01 3.13 3.71-.38-.74-.8-1.74-.92-2.98-.18-2.4 1.35-4.39 2.71-6.15 1.07-1.39 2.08-2.7 2.08-3.93 0-1.9-.68-3.64-1.36-4.72Zm.14-.49s0 .01 0 0c0 .01 0 0 0 0Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .68-.42 8.25-5.29 1.35-11.97Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
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

var HuobiToken = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
HuobiToken.displayName = 'HuobiToken';

export { HuobiToken as default };
