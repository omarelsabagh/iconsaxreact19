import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M7.878 12.07c0-.41.34-.75.75-.75h5.48V2.86a.869.869 0 00-.87-.86c-5.89 0-10 4.11-10 10s4.11 10 10 10c.47 0 .86-.38.86-.86v-8.33h-5.47a.734.734 0 01-.75-.74z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M20.542 11.54l-2.84-2.85a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56h-4.1v1.5h4.09l-1.56 1.56c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85c.3-.28.3-.75.01-1.04z"
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
    d: "M6.56 14.56L4 12l2.56-2.56M9.24 12H4.07M14.24 12h-1.96M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8M12 4c1.05 0 2.05.17 2.97.49"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M13.24 2c.47 0 .86.38.86.86v18.29c0 .47-.38.86-.86.86-5.89 0-10-4.11-10-10S7.36 2 13.24 2z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M20.54 11.54L17.7 8.69a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56H8.63c-.41 0-.75.34-.75.75s.34.75.75.75h9.57l-1.56 1.56c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85a.73.73 0 000-1.04z"
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
    d: "M17.44 14.62L20 12.06 17.44 9.5M9.76 12.06h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M17.44 15.37c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.03-2.03-2.03-2.03a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06l-2.56 2.56c-.15.15-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M19.93 12.81H9.76c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.17c.41 0 .75.34.75.75s-.34.75-.75.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M11.76 20.75c-5.15 0-8.75-3.6-8.75-8.75s3.6-8.75 8.75-8.75c.41 0 .75.34.75.75s-.34.75-.75.75c-4.27 0-7.25 2.98-7.25 7.25s2.98 7.25 7.25 7.25c.41 0 .75.34.75.75s-.34.75-.75.75z"
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
    d: "M17.44 14.62L20 12.06 17.44 9.5M9.76 12.06h10.17"
  })), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
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

var Logout = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Logout.displayName = 'Logout';

export { Logout as default };
