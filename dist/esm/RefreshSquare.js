import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM5.25 11.89c.03-1.76.73-3.42 1.97-4.66A6.718 6.718 0 0112 5.25c1.8 0 3.5.7 4.77 1.98.03.03.06.07.09.11v-.86c0-.41.34-.75.75-.75s.75.34.75.75v2.65c0 .41-.34.75-.75.75h-2.65c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.83c-.03-.03-.05-.06-.08-.09A5.22 5.22 0 0012 6.75c-1.4 0-2.72.55-3.71 1.54-.97.97-1.51 2.26-1.53 3.63a.76.76 0 01-.76.73h-.01c-.41 0-.74-.35-.74-.76zm11.52 4.88A6.719 6.719 0 0112 18.75c-1.8 0-3.5-.7-4.77-1.98-.03-.03-.06-.07-.09-.11v.85c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.65c0-.41.34-.75.75-.75h2.65c.41 0 .75.34.75.75s-.34.75-.75.75h-.83c.03.03.05.06.08.09A5.22 5.22 0 0012 17.24c1.4 0 2.72-.55 3.71-1.54.98-.98 1.53-2.29 1.53-3.69 0-.41.34-.75.75-.75s.75.34.75.75c0 1.81-.7 3.5-1.97 4.76z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M18 11.27c-.42 0-.75.33-.75.75a5.23 5.23 0 01-1.53 3.69 5.22 5.22 0 01-3.71 1.54c-1.4 0-2.72-.55-3.71-1.54-.03-.03-.05-.06-.08-.09h.83c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6.4c-.41 0-.75.34-.75.75v2.65c0 .41.34.75.75.75s.75-.34.75-.75v-.85c.03.03.06.07.09.11a6.719 6.719 0 004.77 1.98c1.8 0 3.5-.7 4.77-1.98a6.73 6.73 0 001.97-4.75c0-.42-.34-.75-.75-.76zM6 12.65c.41 0 .74-.33.75-.74.02-1.37.57-2.66 1.53-3.63a5.22 5.22 0 013.71-1.54c1.4 0 2.72.55 3.71 1.54.03.03.05.06.08.09h-.83c-.41 0-.75.34-.75.75s.34.75.75.75h2.65c.41 0 .75-.34.75-.75V6.48c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.86c-.03-.03-.06-.07-.09-.11a6.719 6.719 0 00-4.77-1.98c-1.8 0-3.5.7-4.77 1.98a6.64 6.64 0 00-1.97 4.66c-.01.41.32.75.74.76H6z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.5 12c0 3.04-2.46 5.5-5.5 5.5s-4.89-3.06-4.89-3.06m0 0h2.48m-2.48 0v2.75M6.5 12c0-3.04 2.44-5.5 5.5-5.5 3.67 0 5.5 3.06 5.5 3.06m0 0V6.81m0 2.75h-2.44",
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

var RefreshSquare = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
RefreshSquare.displayName = 'RefreshSquare';

export { RefreshSquare as default };
