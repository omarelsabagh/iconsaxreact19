import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.07 15.15c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41a.717.717 0 01-.58 0 .776.776 0 01-.24-.16L6.6 14.65a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.76 1.76v-8.5c0-.41.34-.75.75-.75s.75.34.75.75v10.3h.01zm6.46-6.73c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.76-1.76v8.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.85c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.18-.08.39-.08.57 0 .09.04.17.09.24.16l3.04 3.04c.29.3.29.77 0 1.07z"
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
    d: "M10.18 17.15l-3.04-3.04M10.18 6.85v10.3M13.82 6.85l3.04 3.04M13.82 14.11V6.85M13.82 17.15v-.52"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M17.39 9.26l-3.04-3.04a.776.776 0 00-.24-.16.707.707 0 00-.57 0c-.18.08-.33.22-.41.41-.04.09-.06.19-.06.29v10.31c0 .41.34.75.75.75s.75-.34.75-.75v-8.5l1.76 1.76c.15.15.34.22.53.22s.38-.07.53-.22c.29-.31.29-.78 0-1.07zM10.93 6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.5l-1.76-1.76a.755.755 0 00-1.06 0c-.29.29-.29.77 0 1.06l3.04 3.04a.776.776 0 00.53.22c.1 0 .19-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29V6.75h-.01z"
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
    d: "M13.82 6.85l3.04 3.04M13.82 17.15V6.85M10.18 17.15l-3.04-3.04M10.18 6.85v10.3"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.86 10.64c-.19 0-.38-.07-.53-.22l-3.04-3.04a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.04 3.04c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M13.82 17.9c-.41 0-.75-.34-.75-.75V6.84c0-.41.34-.75.75-.75s.75.34.75.75v10.31c0 .42-.34.75-.75.75zM10.18 17.9c-.19 0-.38-.07-.53-.22l-3.04-3.04a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.04 3.04c.29.29.29.77 0 1.06a.71.71 0 01-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M10.18 17.9c-.41 0-.75-.34-.75-.75V6.84c0-.41.34-.75.75-.75s.75.34.75.75v10.31c0 .42-.33.75-.75.75z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
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
    d: "M13.82 6.85l3.04 3.04M13.82 17.15V6.85M10.18 17.15l-3.04-3.04M10.18 6.85v10.3"
  })), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
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

var ArrangeVerticalCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ArrangeVerticalCircle.displayName = 'ArrangeVerticalCircle';

export { ArrangeVerticalCircle as default };
