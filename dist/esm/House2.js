import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 15.5c-.41 0-.75.34-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c0-.41-.34-.75-.75-.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21.249h-1V9.979c0-.62-.28-1.2-.77-1.58l-7-5.44c-.72-.57-1.74-.57-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28H2a.749.749 0 1 0 0 1.5h20a.749.749 0 1 0 0-1.5Zm-11.5-14.5h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Zm6.5 14.5H7v-8.75c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v8.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 22h20M3 9.971c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58v12.03M2.95 22.001l.03-7.97",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5ZM10 16.25v1.5M10.5 7.5h3",
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
    d: "M22.75 22c0 .41-.34.75-.75.75H2a.749.749 0 1 1 0-1.5h20c.41 0 .75.33.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M21 9.979v11.27H2.95L3 9.969c0-.61.28-1.19.77-1.57l7-5.44c.72-.57 1.74-.57 2.46 0l7 5.44c.49.38.77.96.77 1.58Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.5 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5Zm-4.75 6.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 22h20",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58V22",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5ZM10 16.25v1.5M10.5 7.5h3",
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
    d: "M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.7 21.999H2.2l.05-12.03c0-.85.39-1.64 1.06-2.16l7-5.45c.99-.77 2.38-.77 3.38 0l7 5.44c.66.52 1.06 1.33 1.06 2.17v12.03h-1.5V9.979c0-.38-.18-.75-.48-.99l-7-5.44a1.26 1.26 0 0 0-1.54 0l-7 5.45c-.3.23-.48.6-.48.98l-.05 12.02Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 22.75H7c-.41 0-.75-.34-.75-.75v-9.5c0-1.24 1.01-2.25 2.25-2.25h7c1.24 0 2.25 1.01 2.25 2.25V22c0 .41-.34.75-.75.75Zm-9.25-1.5h8.5V12.5c0-.41-.34-.75-.75-.75h-7c-.41 0-.75.34-.75.75v8.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 18.5c-.41 0-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .41-.34.75-.75.75ZM13.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 22h20",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.95 22.001 3 9.971c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58v12.03",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M15.5 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 16.25v1.5",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M10.5 7.5h3",
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

var House2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
House2.displayName = 'House2';

export { House2 as default };
