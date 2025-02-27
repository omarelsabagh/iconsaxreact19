import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.67 2H5.78c-1.04 0-1.98.42-2.67 1.11C2.42 3.8 2 4.74 2 5.78c0 2.08 1.7 3.78 3.78 3.78h.94v7.55c0 .73.42 1.36 1.03 1.67a1.773 1.773 0 0 0 1.5.1c.73-.26 1.25-.95 1.25-1.77V4.83C10.5 3.28 9.22 2 7.67 2ZM5.78 5.97c.41 0 .75.34.75.75s-.34.75-.75.75c-.93 0-1.69-.76-1.69-1.7s.76-1.69 1.69-1.69c.41 0 .75.34.75.75s-.34.75-.75.75a.19.19 0 0 0-.19.19c0 .1.08.2.19.2ZM20.89 3.11A3.756 3.756 0 0 0 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83v12.28c0 .82.52 1.51 1.25 1.77a1.773 1.773 0 0 0 1.5-.1c.61-.31 1.03-.94 1.03-1.67V9.56h.94c2.08 0 3.78-1.7 3.78-3.78 0-1.04-.42-1.98-1.11-2.67Zm-2.67 4.36c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.11 0 .19-.09.19-.2a.19.19 0 0 0-.19-.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75a1.694 1.694 0 0 1 0 3.39Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.25 18.881v3.12c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.22a1.772 1.772 0 0 0 1.5.1ZM16.25 18.781v3.22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.12a1.772 1.772 0 0 0 1.5-.1Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.72 9.56h-.94A3.79 3.79 0 0 1 2 5.78C2 3.7 3.7 2 5.78 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1c0 1.04-.85 1.89-1.89 1.89s-1.89-.85-1.89-1.89V9.56Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.78 6.72a.939.939 0 1 1 0-1.88M17.28 13.52V9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.3 2 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83V17.1c0 1.04.85 1.89 1.89 1.89s1.89-.85 1.89-1.89",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.22 6.72a.939.939 0 1 0 0-1.88M8.5 22v-3M15.5 22v-3",
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
    d: "M10.5 4.83v12.28c0 .82-.52 1.51-1.25 1.77a1.773 1.773 0 0 1-1.5-.1c-.61-.31-1.03-.94-1.03-1.67V9.56h-.94A3.79 3.79 0 0 1 2 5.78c0-1.04.42-1.98 1.11-2.67C3.8 2.42 4.74 2 5.78 2h1.89c1.55 0 2.83 1.28 2.83 2.83Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.78 7.468c-.93 0-1.69-.76-1.69-1.7s.76-1.69 1.69-1.69c.41 0 .75.34.75.75s-.34.75-.75.75a.19.19 0 0 0-.19.19c0 .1.09.2.19.2.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M22 5.78c0 2.08-1.7 3.78-3.78 3.78h-.94v7.55c0 .73-.42 1.36-1.03 1.67a1.773 1.773 0 0 1-1.5.1c-.73-.26-1.25-.95-1.25-1.77V4.83A2.84 2.84 0 0 1 16.33 2h1.89c1.04 0 1.98.42 2.67 1.11.69.69 1.11 1.63 1.11 2.67Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.22 7.468c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.11 0 .19-.09.19-.2a.19.19 0 0 0-.19-.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75a1.694 1.694 0 0 1 0 3.39ZM9.25 18.881v3.12c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.22a1.772 1.772 0 0 0 1.5.1ZM16.25 18.781v3.22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.12a1.772 1.772 0 0 0 1.5-.1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.72 9.56h-.94A3.79 3.79 0 0 1 2 5.78C2 3.7 3.7 2 5.78 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1c0 1.04-.85 1.89-1.89 1.89s-1.89-.85-1.89-1.89V9.56Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.78 6.72a.939.939 0 1 1 0-1.88M17.28 9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.3 2 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83V17.1c0 1.04.85 1.89 1.89 1.89s1.89-.85 1.89-1.89V9.56Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.22 6.72a.939.939 0 1 0 0-1.88M8.5 22v-3M15.5 22v-3",
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
    d: "M8.61 19.748c-1.46 0-2.64-1.18-2.64-2.64v-6.81h-.2c-2.5 0-4.53-2.03-4.53-4.53 0-2.5 2.03-4.53 4.53-4.53h1.89c1.98 0 3.58 1.61 3.58 3.58v12.28a2.625 2.625 0 0 1-2.63 2.65Zm-2.83-17c-1.67 0-3.03 1.36-3.03 3.03 0 1.67 1.36 3.03 3.03 3.03h.95c.41 0 .75.34.75.75v7.56a1.14 1.14 0 1 0 2.28 0V4.838c0-1.15-.93-2.08-2.08-2.08h-1.9v-.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.78 7.468c-.93 0-1.69-.76-1.69-1.7s.76-1.69 1.69-1.69c.41 0 .75.34.75.75s-.34.75-.75.75a.19.19 0 0 0-.19.19c0 .1.09.2.19.2.41 0 .75.34.75.75s-.34.75-.75.75ZM15.39 19.75c-1.46 0-2.64-1.18-2.64-2.64V4.83c0-1.98 1.61-3.58 3.58-3.58h1.89c2.5 0 4.53 2.03 4.53 4.53 0 2.5-2.03 4.53-4.53 4.53h-.2v6.81c.01 1.45-1.18 2.63-2.63 2.63Zm.94-17c-1.15 0-2.08.93-2.08 2.08v12.28a1.14 1.14 0 1 0 2.28 0V9.55c0-.41.34-.75.75-.75h.95c1.67 0 3.03-1.36 3.03-3.03 0-1.67-1.36-3.03-3.03-3.03h-1.9v.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.219 7.468c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.11 0 .19-.09.19-.2a.19.19 0 0 0-.19-.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75a1.694 1.694 0 0 1 0 3.39ZM8.5 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM15.5 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.72 9.56h-.94A3.79 3.79 0 0 1 2 5.78C2 3.7 3.7 2 5.78 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1c0 1.04-.85 1.89-1.89 1.89s-1.89-.85-1.89-1.89V9.56Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M5.78 6.72a.939.939 0 1 1 0-1.88",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.28 9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.3 2 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83V17.1c0 1.04.85 1.89 1.89 1.89s1.89-.85 1.89-1.89V9.56Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M18.22 6.72a.939.939 0 1 0 0-1.88M8.5 22v-3M15.5 22v-3",
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

var Airpods = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Airpods.displayName = 'Airpods';

export { Airpods as default };
