import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5ZM7 19c0-2.82-.91-3.86-3.5-3.98V8.98C6.09 8.86 7 7.82 7 5h10c0 2.82.91 3.86 3.5 3.98V15.02c-2.59.12-3.5 1.16-3.5 3.98H7Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12.53v2.97c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5H7c-3 0-5 1.5-5 5V9h1c3 0 4-1 4-4V4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3M22 9h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1M22 15h-1c-3 0-4 1-4 4v1",
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
    d: "M22 9v6h-1c-3 0-4 1-4 4v1.5H7V19c0-3-1-4-4-4H2V9h1c3 0 4-1 4-4V3.5h10V5c0 3 1 4 4 4h1Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 3.5V5c0 3-1 4-4 4H2v-.5c0-3.5 2-5 5-5ZM22 8.5V9h-1c-3 0-4-1-4-4V3.5c3 0 5 1.5 5 5ZM7 19v1.5c-3 0-5-1.5-5-5V15h1c3 0 4 1 4 4ZM22 15v.5c0 3.5-2 5-5 5V19c0-3 1-4 4-4h1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 9h1c3 0 4-1 4-4V4M22 9h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1M22 15h-1c-3 0-4 1-4 4v1",
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
    d: "M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75ZM3 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c2.58 0 3.25-.67 3.25-3.25V4c0-.41.34-.75.75-.75s.75.34.75.75v1c0 3.42-1.33 4.75-4.75 4.75ZM22 9.75h-1c-3.42 0-4.75-1.33-4.75-4.75V4c0-.41.34-.75.75-.75s.75.34.75.75v1c0 2.58.67 3.25 3.25 3.25h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM7 20.75c-.41 0-.75-.34-.75-.75v-1c0-2.58-.67-3.25-3.25-3.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c3.42 0 4.75 1.33 4.75 4.75v1c0 .41-.34.75-.75.75ZM17 20.75c-.41 0-.75-.34-.75-.75v-1c0-3.42 1.33-4.75 4.75-4.75h1c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-2.58 0-3.25.67-3.25 3.25v1c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M2 9h1c3 0 4-1 4-4V4M22 9h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1M22 15h-1c-3 0-4 1-4 4v1",
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

var Money2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Money2.displayName = 'Money2';

export { Money2 as default };
