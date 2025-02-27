import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 8.691c0 1.19-.19 2.29-.52 3.31-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0-.64-.22-1.45-.59-2.32-1.11-.56-.33-.65-1.11-.19-1.57l11.28-11.28c.54-.54 1.49-.31 1.68.43.11.45.17.92.17 1.41ZM22.53 1.471a.754.754 0 0 0-1.06 0l-2.34 2.34c-.79-.45-1.71-.71-2.69-.71-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31.65 2.07 1.87 3.8 3.25 5.17l-4.3 4.3c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l20-20c.29-.29.29-.77 0-1.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.56 3.102c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c1.15 0 2.22.35 3.11.96M6.11 17.5C3.9 15.43 2 12.48 2 8.68c0-1.54.62-2.94 1.63-3.95M21.74 7c.17.53.26 1.1.26 1.69 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-.65-.22-1.47-.6-2.36-1.13M22 2 2 22",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M22 8.691c0 1.19-.19 2.29-.52 3.31-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0-.64-.22-1.45-.59-2.32-1.11-.56-.33-.65-1.11-.19-1.57l11.28-11.28c.54-.54 1.49-.31 1.68.43.11.45.17.92.17 1.41Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.53 1.471a.754.754 0 0 0-1.06 0l-2.34 2.34c-.79-.45-1.71-.71-2.69-.71-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31.65 2.07 1.87 3.8 3.25 5.17l-4.3 4.3c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l20-20c.29-.29.29-.77 0-1.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.11 17.5C3.9 15.43 2 12.48 2 8.68c0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c1.15 0 2.22.35 3.11.96M21.74 7c.17.53.26 1.1.26 1.69 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-.65-.22-1.47-.6-2.36-1.13M22 2 2 22",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.11 18.252c-.18 0-.37-.07-.51-.2-1.98-1.86-4.35-4.99-4.35-9.36 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.214 6.214 0 0 1 4.44-1.84c1.26 0 2.48.38 3.53 1.08.34.23.43.7.2 1.04-.23.34-.7.43-1.04.2a4.74 4.74 0 0 0-2.68-.83c-1.52 0-2.93.71-3.84 1.94-.28.38-.92.38-1.2 0a4.765 4.765 0 0 0-3.84-1.94c-2.65 0-4.81 2.17-4.81 4.84 0 3.84 2.11 6.61 3.88 8.27.3.28.32.76.04 1.06a.83.83 0 0 1-.57.24ZM12 21.649c-.31 0-.61-.04-.86-.13-.75-.26-1.64-.68-2.5-1.19a.749.749 0 0 1-.26-1.03c.21-.35.67-.47 1.03-.26.78.46 1.57.84 2.22 1.06.18.06.57.06.75 0 2.3-.79 8.88-4.58 8.88-11.42 0-.5-.08-.99-.22-1.46-.12-.4.09-.82.49-.94s.82.1.94.49c.19.62.29 1.26.29 1.91 0 6.88-6.07 11.52-9.89 12.83-.26.1-.56.14-.87.14Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 22.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M6.11 17.5C3.9 15.43 2 12.48 2 8.68c0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c1.15 0 2.22.35 3.11.96M21.74 7c.17.53.26 1.1.26 1.69 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-.65-.22-1.47-.6-2.36-1.13",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 2 22",
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

var HeartSlash = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
HeartSlash.displayName = 'HeartSlash';

export { HeartSlash as default };
