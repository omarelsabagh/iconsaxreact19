import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M10.758 2c-.48 0-.86.38-.86.86v8.46h3.67l-1.57-1.57a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.84 2.85c.29.29.29.77 0 1.06l-2.84 2.85c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.56-1.56h-3.66v8.33c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S16.638 2 10.758 2zM3.988 11.32c-.41 0-.75.34-.75.75s.34.75.75.75h5.9v-1.5h-5.9z"
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
    d: "M11.68 14.56L14.24 12l-2.56-2.56M9 12h5.17M4 12h1.96M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8M12 4c1.05 0 2.05.17 2.97.49"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M10.76 2c-.48 0-.86.38-.86.86v18.29c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S16.64 2 10.76 2z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M15.9 11.54l-2.84-2.85a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56H3.99c-.41 0-.75.34-.75.75s.34.75.75.75h9.57L12 14.38c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85c.3-.29.3-.76 0-1.05z"
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
    d: "M11.68 14.62l2.56-2.56-2.56-2.56M4 12.06h10.17"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M11.68 15.37c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.03-2.03-2.03-2.03a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06l-2.56 2.56c-.14.15-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M14.17 12.81H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.17c.41 0 .75.34.75.75s-.34.75-.75.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 20.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.25-2.98 7.25-7.25S16.27 4.75 12 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.15 0 8.75 3.6 8.75 8.75s-3.6 8.75-8.75 8.75z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    opacity: ".4"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M11.68 14.62l2.56-2.56-2.56-2.56M4 12.06h10.17"
  })), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
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

var Login = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Login.displayName = 'Login';

export { Login as default };
