import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 15V9c0-1.66-1.34-3-3-3H5C3.34 6 2 7.34 2 9v6c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3ZM5.93 19.5h12.14a.5.5 0 0 1 .49.6c-.27 1.48-1.14 1.9-3.23 1.9H8.67c-2.1 0-2.96-.42-3.23-1.9a.5.5 0 0 1 .49-.6ZM8.67 2h6.66c2.1 0 2.96.42 3.23 1.9.06.31-.18.6-.49.6H5.93a.5.5 0 0 1-.49-.6C5.71 2.42 6.57 2 8.67 2Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.55 5h4.95c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91v4c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-9c-.62 0-1.17-.02-1.66-.09C3.21 18.62 2.5 17.38 2.5 14v-4c0-3.38.71-4.62 3.34-4.91C6.33 5.02 6.88 5 7.5 5M4.5 2h15M5 22h15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18.94 3.5H5.06c-.41 0-.75-.34-.75-.75S4.65 2 5.06 2h13.88c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.94 22H5.06c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M2.75 7.602v8.8c0 1.66 1.34 3 3 3h12.5c1.66 0 3-1.34 3-3v-8.8c0-1.66-1.34-3-3-3H5.75c-1.66 0-3 1.34-3 3Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 6h10c.62 0 1.17.02 1.66.09C21.29 6.38 22 7.62 22 11v2c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09H7c-.62 0-1.17-.02-1.66-.09C2.71 17.62 2 16.38 2 13v-2c0-3.38.71-4.62 3.34-4.91C5.83 6.02 6.38 6 7 6Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 18c.62 0 1.17-.02 1.66-.09.01.14.01.27.01.42v.34c0 2.66-.67 3.33-3.34 3.33H8.67c-2.67 0-3.34-.67-3.34-3.33v-.34c0-.15 0-.28.01-.42.49.07 1.04.09 1.66.09h10ZM8.67 2h6.66c2.67 0 3.34.67 3.34 3.33v.34c0 .15 0 .28-.01.42C18.17 6.02 17.62 6 17 6H7c-.62 0-1.17.02-1.66.09-.01-.14-.01-.27-.01-.42v-.34C5.33 2.67 6 2 8.67 2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 19.75h-9c-.75 0-1.3-.03-1.77-.1-3.32-.36-3.98-2.35-3.98-5.65v-4c0-3.3.66-5.29 4.01-5.66.44-.06.99-.09 1.74-.09h9c.75 0 1.3.03 1.77.1 3.33.37 3.98 2.35 3.98 5.65v4c0 3.3-.66 5.29-4.01 5.66-.44.06-.99.09-1.74.09Zm-9-14c-.68 0-1.16.03-1.55.08-2.03.23-2.7.86-2.7 4.17v4c0 3.31.67 3.94 2.67 4.17.42.06.9.08 1.58.08h9c.68 0 1.16-.03 1.55-.08 2.03-.22 2.7-.86 2.7-4.17v-4c0-3.31-.67-3.94-2.67-4.17-.42-.06-.9-.08-1.58-.08h-9ZM19.5 2.75h-15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h15c.41 0 .75.34.75.75s-.34.75-.75.75ZM20 22.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h15c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 6h10c.62 0 1.17.02 1.66.09C21.29 6.38 22 7.62 22 11v2c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09H7c-.62 0-1.17-.02-1.66-.09C2.71 17.62 2 16.38 2 13v-2c0-3.38.71-4.62 3.34-4.91C5.83 6.02 6.38 6 7 6Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M17 18c.62 0 1.17-.02 1.66-.09.01.14.01.27.01.42v.34c0 2.66-.67 3.33-3.34 3.33H8.67c-2.67 0-3.34-.67-3.34-3.33v-.34c0-.15 0-.28.01-.42.49.07 1.04.09 1.66.09h10ZM8.67 2h6.66c2.67 0 3.34.67 3.34 3.33v.34c0 .15 0 .28-.01.42C18.17 6.02 17.62 6 17 6H7c-.62 0-1.17.02-1.66.09-.01-.14-.01-.27-.01-.42v-.34C5.33 2.67 6 2 8.67 2Z",
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

var SliderVertical = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
SliderVertical.displayName = 'SliderVertical';

export { SliderVertical as default };
