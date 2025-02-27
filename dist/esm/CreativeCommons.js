import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM8.99 14.12c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06a3.621 3.621 0 1 1-2.39-6.34c.88 0 1.72.32 2.39.9.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.14 2.14 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24Zm7 0c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06a3.621 3.621 0 1 1-2.39-6.34c.88 0 1.72.32 2.39.9.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72M17.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    d: "M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.99 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.67.58-1.52.9-2.39.9ZM15.99 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.67.58-1.52.9-2.39.9Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.88 14.15c-.51.44-1.17.72-1.89.72A2.87 2.87 0 0 1 6.12 12c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72M17.88 14.15c-.51.44-1.17.72-1.89.72A2.87 2.87 0 0 1 13.12 12c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.991 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.78-.24 1.06.07.27.31.24.79-.07 1.06-.67.58-1.52.9-2.39.9ZM15.991 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.78-.24 1.06.07.27.31.24.79-.07 1.06-.67.58-1.52.9-2.39.9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M10.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72M17.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72",
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

var CreativeCommons = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
CreativeCommons.displayName = 'CreativeCommons';

export { CreativeCommons as default };
