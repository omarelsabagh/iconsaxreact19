import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2zM12 8.672H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33H12v-6.66z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 15.328H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33v-3.33zM12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2zM15.33 8.672c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33 1.49-3.33 3.33-3.33z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.67 15.33H12V8.66H8.67c-1.84 0-3.33 1.49-3.33 3.33",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.328H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33v-3.33ZM12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2ZM15.33 8.672c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33 1.49-3.33 3.33-3.33Z",
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
    d: "M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2V6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-2Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2H8.7C6.8 2 5.3 3.5 5.3 5.3c0 1.8 1.5 3.3 3.3 3.3H12V2ZM12 8.7H8.7c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3H12V8.7ZM12 15.3H8.7c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3v-3.3ZM12 2h3.3c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3H12V2ZM15.3 8.7c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.75 9.422H8.67c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08h4.08v8.16Zm-4.08-6.67c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58h2.58v-5.17H8.67v.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.75 16.082H8.67c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08h4.08v8.16Zm-4.08-6.66c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58h2.58v-5.17H8.67v.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.67 22.75c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08h4.08v4.08c0 2.25-1.83 4.08-4.08 4.08Zm0-6.67c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58 1.42 0 2.58-1.16 2.58-2.58v-2.58H8.67ZM15.33 9.42h-4.08V1.25h4.08c2.25 0 4.08 1.83 4.08 4.08.01 2.25-1.83 4.09-4.08 4.09Zm-2.58-1.5h2.58c1.42 0 2.58-1.16 2.58-2.58 0-1.42-1.16-2.58-2.58-2.58h-2.58v5.16Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.33 16.082c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08 4.08 1.83 4.08 4.08-1.83 4.08-4.08 4.08Zm0-6.66c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58a2.58 2.58 0 1 0 0-5.16Z",
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
    d: "M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2V6ZM12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4ZM12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-2ZM12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V6ZM14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
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

var Figma = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Figma.displayName = 'Figma';

export { Figma as default };
