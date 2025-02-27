import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M21.75 6.73c0-.2-.08-.39-.22-.53l-3.72-3.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.45 2.45H3c-.41 0-.75.34-.75.75s.34.74.75.74h16.19l-2.44 2.44c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.71-3.71c.07-.07.13-.16.17-.26 0-.01 0-.02.01-.03.03-.08.05-.16.05-.25zM21 16.518H4.81l2.44-2.44c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-3.71 3.71c-.07.07-.13.16-.17.26 0 .01 0 .02-.01.03-.03.08-.05.17-.05.26 0 .2.08.39.22.53l3.72 3.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.45-2.45H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.28 10.45L21 6.73l-3.72-3.72M10.01 6.73H21M3 6.73h2.99M6.72 13.55L3 17.27l3.72 3.72M3 17.27h11.09M21 17.27h-2.97"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M21.75 6.73c0-.2-.08-.39-.22-.53l-3.72-3.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.45 2.45H3c-.41 0-.75.34-.75.75s.34.75.75.75h16.19l-2.44 2.44c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.71-3.71c.07-.07.13-.16.17-.26 0-.01 0-.02.01-.03.03-.09.05-.17.05-.26z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M21 16.52H4.81l2.44-2.44c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-3.71 3.71c-.07.07-.13.16-.17.26 0 .01 0 .02-.01.03-.03.08-.05.17-.05.26 0 .2.08.39.22.53l3.72 3.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L4.8 18.02H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.28 10.45L21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M17.279 11.2c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.19-3.19-3.19-3.19a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.72 3.72a.75.75 0 010 1.06l-3.72 3.72c-.15.14-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M21 7.48H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM6.72 21.75c-.19 0-.38-.07-.53-.22l-3.72-3.72a.75.75 0 010-1.06l3.72-3.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.19 3.19 3.19 3.19c.29.29.29.77 0 1.06a.71.71 0 01-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M21 18.02H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"
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
    strokeWidth: "1.5",
    d: "M17.281 10.45l3.72-3.72-3.72-3.72M3 6.73h18"
  })), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"
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

var ArrangeHorizontal = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ArrangeHorizontal.displayName = 'ArrangeHorizontal';

export { ArrangeHorizontal as default };
