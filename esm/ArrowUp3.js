import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M9.33 18h5.34c3.32 0 4.67-2.35 3.02-5.22l-.74-1.28c-.18-.31-.51-.5-.87-.5H7.92c-.36 0-.69.19-.87.5l-.74 1.28C4.66 15.65 6.01 18 9.33 18zM8.792 9.999h6.43c.39 0 .63-.42.43-.75l-.64-1.1c-1.65-2.87-4.37-2.87-6.02 0l-.64 1.1c-.19.33.05.75.44.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M17.69 12.78c1.66 2.87.3 5.22-3.01 5.22H9.33c-3.31 0-4.67-2.35-3.01-5.22l1.34-2.31L9 8.16c1.66-2.87 4.37-2.87 6.03 0"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M9.33 18h5.34c3.32 0 4.67-2.35 3.02-5.22l-.74-1.28c-.18-.31-.51-.5-.87-.5H7.92c-.36 0-.69.19-.87.5l-.74 1.28C4.66 15.65 6.01 18 9.33 18z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M8.79 10h6.43c.39 0 .63-.42.43-.75l-.64-1.1c-1.65-2.87-4.37-2.87-6.02 0l-.64 1.1c-.19.33.05.75.44.75z",
    opacity: ".4"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M12 18H9.33c-3.31 0-4.67-2.35-3.01-5.22l1.34-2.31L9 8.16c1.66-2.87 4.37-2.87 6.03 0l1.34 2.31 1.34 2.31c1.66 2.87.3 5.22-3.01 5.22H12z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M14.67 18.75H9.33c-1.88 0-3.31-.68-4.02-1.91-.71-1.23-.58-2.81.36-4.44l2.67-4.63c.94-1.62 2.24-2.52 3.66-2.52s2.72.9 3.66 2.53l2.67 4.63c.94 1.63 1.07 3.21.36 4.44-.71 1.22-2.14 1.9-4.02 1.9zM12 6.75c-.86 0-1.7.63-2.36 1.78l-2.67 4.63c-.66 1.15-.79 2.19-.36 2.94.43.75 1.4 1.16 2.72 1.16h5.34c1.32 0 2.29-.41 2.72-1.16.43-.75.3-1.79-.36-2.94l-2.67-4.63c-.66-1.15-1.5-1.78-2.36-1.78z"
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
    d: "M12 18H9.33c-3.31 0-4.67-2.35-3.01-5.22l1.34-2.31L9 8.16c1.66-2.87 4.37-2.87 6.03 0l1.34 2.31 1.34 2.31c1.66 2.87.3 5.22-3.01 5.22H12z"
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

var ArrowUp3 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ArrowUp3.displayName = 'ArrowUp3';

export { ArrowUp3 as default };
