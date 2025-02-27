import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6a5.991 5.991 0 0 1 2.555-4.904c.249-.174.584-.055.718.217a7.494 7.494 0 0 0 4.747 3.916c.63.18 1.29.27 1.98.27.487 0 .954-.046 1.407-.131.289-.054.576.13.588.424.004.07.005.139.005.207Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8a5.993 5.993 0 0 1-4.42 5.79c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8c0-3.31 2.69-6 6-6s6 2.69 6 6ZM22 16a6.005 6.005 0 0 1-8.119 5.613c-.319-.121-.378-.529-.156-.788A7.406 7.406 0 0 0 15.5 16c0-.34-.03-.68-.08-1a.444.444 0 0 1 .228-.456 7.448 7.448 0 0 0 3.079-3.229c.134-.272.47-.392.718-.217A5.992 5.992 0 0 1 22 15.999Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 0 0 4 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.52 4.01a6 6 0 0 1 10.06 6.2 6.019 6.019 0 0 1-4 3.58c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".6",
    d: "M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 0 0 4 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8a5.993 5.993 0 0 1-4.42 5.79c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8c0-3.31 2.69-6 6-6s6 2.69 6 6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 018 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 004 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M18 8a5.993 5.993 0 01-4.42 5.79c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 016 8c0-3.31 2.69-6 6-6s6 2.69 6 6z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 01-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 22.751c-3.72 0-6.75-3.03-6.75-6.75 0-3.04 2.04-5.72 4.97-6.51.37-.1.75.09.89.45.61 1.53 1.91 2.7 3.5 3.13.88.24 1.9.24 2.76 0 .37-.1.76.09.9.45.31.79.47 1.63.47 2.49 0 1.92-.82 3.75-2.25 5.02A6.708 6.708 0 0 1 8 22.751Zm-1.98-11.62c-1.95.8-3.27 2.72-3.27 4.87 0 2.89 2.36 5.25 5.25 5.25 1.3 0 2.54-.48 3.5-1.35a5.196 5.196 0 0 0 1.75-3.9c0-.46-.06-.9-.17-1.33-.94.15-1.96.1-2.86-.15a6.816 6.816 0 0 1-4.2-3.39Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14.75c-.62 0-1.22-.08-1.78-.24a6.809 6.809 0 0 1-4.5-4.03C5.41 9.7 5.25 8.86 5.25 8c0-3.72 3.03-6.75 6.75-6.75S18.75 4.28 18.75 8c0 .86-.16 1.7-.47 2.49a6.811 6.811 0 0 1-4.5 4.03c-.56.15-1.16.23-1.78.23Zm0-12C9.11 2.75 6.75 5.11 6.75 8c0 .67.12 1.32.37 1.93.61 1.53 1.91 2.7 3.5 3.13.88.24 1.9.24 2.76 0 1.59-.43 2.9-1.61 3.5-3.13.24-.61.37-1.26.37-1.93 0-2.89-2.36-5.25-5.25-5.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 22.752c-1.67 0-3.27-.62-4.5-1.73a.75.75 0 0 1 0-1.12 5.2 5.2 0 0 0 1.75-3.9c0-.67-.12-1.32-.37-1.93-.08-.2-.07-.42.03-.61s.27-.33.47-.39c1.59-.43 2.89-1.6 3.5-3.13.14-.36.53-.54.89-.45 2.93.8 4.97 3.47 4.97 6.51.01 3.72-3.02 6.75-6.74 6.75Zm-2.88-2.36c.85.56 1.84.86 2.88.86 2.89 0 5.25-2.36 5.25-5.25 0-2.15-1.32-4.07-3.27-4.87a6.82 6.82 0 0 1-3.46 3.13c.15.56.23 1.15.23 1.74 0 1.62-.58 3.18-1.63 4.39Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 0 0 4 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8a5.993 5.993 0 0 1-4.42 5.79c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8c0-3.31 2.69-6 6-6s6 2.69 6 6Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16Z",
    stroke: color,
    strokeWidth: "1.5",
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

var Colorfilter = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Colorfilter.displayName = 'Colorfilter';

export { Colorfilter as default };
