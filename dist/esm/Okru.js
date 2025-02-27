import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 5.12c1.31 0 2.38 1.07 2.38 2.38 0 1.31-1.07 2.38-2.38 2.38-1.31 0-2.38-1.07-2.38-2.38 0-1.31 1.07-2.38 2.38-2.38zm2.47 9.97c-.14.11-.3.16-.46.16-.22 0-.44-.1-.59-.28l-1.41-1.78-1.41 1.78a.747.747 0 11-1.17-.93l1.19-1.51c-.32-.09-.64-.2-.94-.35a.75.75 0 01-.33-1.01c.18-.37.63-.52 1.01-.33 1.04.52 2.28.52 3.32 0 .36-.18.82-.04 1 .32.19.36.06.81-.3 1-.31.16-.64.27-.97.36l1.2 1.51c.23.33.18.8-.14 1.06z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".58",
    d: "M24 0H0v24h24V0Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: "#fff",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13.5c1.25.63 2.73.63 3.99.01l.01-.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 16.499 2-2.53 2 2.53",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11.881a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76ZM14.59 16.03l-1.2-1.51c.33-.09.66-.21.97-.36.36-.2.49-.64.3-1a.755.755 0 0 0-1-.32c-1.04.52-2.28.52-3.32 0a.75.75 0 1 0-.68 1.34c.3.15.62.27.94.35l-1.19 1.51c-.26.33-.2.8.12 1.05.33.26.8.2 1.05-.12l1.41-1.78 1.41 1.78c.15.19.37.28.59.28.16 0 .33-.05.46-.16.34-.26.39-.73.14-1.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13.5c1.3.6 2.7.6 4 0",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 16.5 2-2.5 2 2.5",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 12.25c-1.52 0-2.75-1.23-2.75-2.75S10.48 6.75 12 6.75s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM11.99 14.719c-.8 0-1.6-.18-2.33-.55a.75.75 0 0 1-.33-1.01c.18-.37.63-.52 1.01-.33 1.04.52 2.28.52 3.32 0 .36-.18.82-.04 1 .32.19.36.06.81-.3 1-.75.38-1.56.57-2.37.57Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 17.248c-.22 0-.44-.1-.59-.28L12 15.188l-1.41 1.78a.747.747 0 1 1-1.17-.93l2-2.53c.28-.36.89-.36 1.18 0l2 2.53c.26.33.2.8-.12 1.05-.15.11-.32.16-.48.16Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13.5c1.25.63 2.73.63 3.99.01l.01-.01",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 16.499 2-2.53 2 2.53",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
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

var Okru = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Okru.displayName = 'Okru';

export { Okru as default };
