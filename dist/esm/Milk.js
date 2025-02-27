import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 15.998v3c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-4.01c0-.55.45-1 1.01-1l2.88.01c.69 0 1.37.15 2 .45.69.32 1.42.55 2.19.55H17c.55 0 1 .45 1 1ZM17.41 9.41l-2.12-2.12a.984.984 0 0 1-.29-.7V4.91A1.498 1.498 0 0 0 14.5 2h-5A1.498 1.498 0 0 0 9 4.91v1.68c0 .26-.1.51-.29.7L6.59 9.41c-.32.32-.59.97-.59 1.42v.65c0 .55.44 1 .99 1l2.91.02c.98 0 1.97.24 2.85.7.42.22.9.3 1.37.3H17c.55 0 1-.45 1-1v-1.67c0-.45-.27-1.1-.59-1.42Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m6 13.98 3.89.02c.73 0 1.45.17 2.11.5.66.33 1.38.5 2.12.5H18v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-1.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.71 4.71 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42ZM18 16v-1M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5.66.33 1.38.5 2.12.5H18Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.71 4.71 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V4.91c.16.06.32.09.5.09h5c.18 0 .34-.03.5-.09v1.68c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 2h-5A1.498 1.498 0 0 0 9 4.91c.16.06.32.09.5.09h5c.18 0 .34-.03.5-.09A1.498 1.498 0 0 0 14.5 2Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5.66.33 1.38.5 2.12.5H18Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.71 4.71 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42ZM18 16v-1M6 14.98v-1M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 22.75H9c-2.07 0-3.75-1.68-3.75-3.75v-5.02a.75.75 0 0 1 .75-.75l3.89.02c.84 0 1.68.2 2.44.58.56.28 1.16.42 1.79.42H18c.41 0 .75.34.75.75v4c0 2.07-1.68 3.75-3.75 3.75Zm-8.25-8.02V19c0 1.24 1.01 2.25 2.25 2.25h6c1.24 0 2.25-1.01 2.25-2.25v-3.25h-3.13c-.86 0-1.69-.19-2.46-.58-.56-.28-1.16-.42-1.77-.42l-3.14-.02Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 15.75h-3.88c-.86 0-1.69-.19-2.46-.58-.56-.28-1.16-.42-1.77-.42L6 14.73c-.41 0-.75-.34-.75-.75v-3.15c0-.66.34-1.48.81-1.95l2.12-2.12a.26.26 0 0 0 .07-.17V5c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75v1.59c0 .06.03.13.07.17l2.12 2.12c.47.47.81 1.29.81 1.95V15c0 .41-.34.75-.75.75ZM6.75 13.23l3.14.02c.84 0 1.68.2 2.44.58.56.28 1.16.42 1.79.42h3.13v-3.42c0-.26-.18-.7-.37-.89l-2.12-2.12c-.32-.32-.51-.77-.51-1.23v-.84h-4.5v.84c0 .46-.19.91-.51 1.23L7.12 9.94c-.19.19-.37.63-.37.89v2.4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 16.75c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75ZM6 15.73c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75ZM14.5 5.75h-5c-1.24 0-2.25-1.01-2.25-2.25S8.26 1.25 9.5 1.25h5c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25Zm-5-3c-.41 0-.75.34-.75.75s.34.75.75.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5.66.33 1.38.5 2.12.5H18Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.71 4.71 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 16v-1M6 14.98v-1M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5Z",
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

var Milk = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Milk.displayName = 'Milk';

export { Milk as default };
