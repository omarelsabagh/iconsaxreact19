import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.8 2h-2.6C11 2 9 4 9 7.2v4.05h4.44l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H9v4.05C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2zM2.75 11.25c-.41 0-.75.34-.75.75s.34.75.75.75H9v-1.5H2.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M2 12h12.88M12.65 8.65L16 12l-3.35 3.35M21.5 13v2.26c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M9 7.2v9.59C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2h-2.6C11 2 9 4 9 7.2z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12.43 8.12l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.69l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.3.76-.3 1.06 0z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2 12h12.88"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12.65 8.65L16 12l-3.35 3.35"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M15.24 22.27h-.13c-4.44 0-6.58-1.75-6.95-5.67-.04-.41.26-.78.68-.82.41-.04.78.27.82.68.29 3.14 1.77 4.31 5.46 4.31h.13c4.07 0 5.51-1.44 5.51-5.51V8.74c0-4.07-1.44-5.51-5.51-5.51h-.13c-3.71 0-5.19 1.19-5.46 4.39-.05.41-.39.72-.82.68a.751.751 0 01-.69-.81c.34-3.98 2.49-5.76 6.96-5.76h.13c4.91 0 7.01 2.1 7.01 7.01v6.52c0 4.91-2.1 7.01-7.01 7.01z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M14.88 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.88a.749.749 0 110 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12.65 16.1c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L14.94 12l-2.82-2.82a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.15.15-.34.22-.53.22z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M2 12h12.88M12.65 8.65L16 12l-3.35 3.35"
  })));
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

var LoginCurve = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
LoginCurve.displayName = 'LoginCurve';

export { LoginCurve as default };
