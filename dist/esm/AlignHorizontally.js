import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1ZM4.75 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2v1.5ZM13.25 11.25h-3v1.5h3v-1.5ZM21.25 12.75h-2.5v-1.5h2.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM13.25 15.4V8.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1ZM18.75 15.4V8.6c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1M2 12h2.4M11 12h2M22 12h-2.69",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1ZM4.75 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2v1.5ZM13.25 11.25h-3v1.5h3v-1.5ZM21.25 12.75h-2.5v-1.5h2.5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M13.25 15.4V8.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1ZM13.25 15.4V8.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1ZM2 12h2.4M11 12h2M22 12h-2.69",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.02 20.25H6.98C4.97 20.25 4 19.32 4 17.4V6.6c0-1.92.98-2.85 2.98-2.85h1.04c2 0 2.98.93 2.98 2.85v10.8c0 1.92-.98 2.85-2.98 2.85Zm-1.04-15c-1.27 0-1.48.34-1.48 1.35v10.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35V6.6c0-1.01-.21-1.35-1.48-1.35H6.98ZM16.52 18.25h-1.04c-2.01 0-2.98-.93-2.98-2.85V8.6c0-1.92.98-2.85 2.98-2.85h1.04c2.01 0 2.98.93 2.98 2.85v6.8c0 1.92-.98 2.85-2.98 2.85Zm-1.04-11c-1.27 0-1.48.34-1.48 1.35v6.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35V8.6c0-1.01-.21-1.35-1.48-1.35h-1.04Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.4 12.75H2a.749.749 0 1 1 0-1.5h2.4a.749.749 0 1 1 0 1.5ZM13 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM22 12.75h-2.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1ZM13.25 15.4V8.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M2 12h2.4M11 12h2M22 12h-2.69",
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

var AlignHorizontally = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
AlignHorizontally.displayName = 'AlignHorizontally';

export { AlignHorizontally as default };
