import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-.37 14.25c-.85.85-1.71.85-2.57 0L6.5 13.68c-.44-.44-.65-.88-.64-1.33.01-.42.23-.83.64-1.24l3.6-3.6-.56-.55a.477.477 0 0 1 0-.68c.19-.19.49-.19.68 0l.55.55 4.7 4.7c.1.1.17.25.17.39a.6.6 0 0 1-.17.47l-3.84 3.86Zm5.01 1.61c-.83 0-1.5-.67-1.5-1.5 0-.84.99-1.95 1.19-2.17.16-.18.47-.18.64 0 .2.21 1.19 1.33 1.19 2.17-.02.83-.69 1.5-1.52 1.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m9.41 15.95-2.39-2.39c-.8-.8-.8-1.6 0-2.39l3.99-3.99 4.39 4.39c.22.22.22.58 0 .8l-3.59 3.59c-.8.79-1.6.79-2.4-.01ZM10.209 6.379l.8.8M6.459 12.328l9.03-.39",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.47 14.168s-1.1 1.2-1.1 1.93c0 .61.5 1.1 1.1 1.1.61 0 1.1-.5 1.1-1.1.01-.74-1.1-1.93-1.1-1.93Z",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.66 11.931a.631.631 0 0 0-.17-.39l-4.7-4.7-.55-.55a.477.477 0 0 0-.68 0c-.19.19-.19.49 0 .68l.55.55-3.6 3.6c-.41.41-.63.83-.64 1.24-.01.44.2.88.64 1.32l2.57 2.57c.86.85 1.72.85 2.57 0l3.85-3.85a.69.69 0 0 0 .16-.47ZM16.959 14.19c-.16-.18-.47-.18-.64 0-.2.21-1.19 1.33-1.19 2.17 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c.01-.84-.97-1.95-1.17-2.17Z",
    fill: color
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
    d: "M9.41 15.95l-2.39-2.39c-.8-.8-.8-1.6 0-2.39l3.99-3.99 4.39 4.39c.22.22.22.58 0 .8l-3.59 3.59c-.8.79-1.6.79-2.4-.01zM10.21 6.38l.8.8M6.46 12.33l9.03-.39"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M16.47 14.17s-1.1 1.2-1.1 1.93c0 .61.5 1.1 1.1 1.1.61 0 1.1-.5 1.1-1.1.01-.74-1.1-1.93-1.1-1.93z"
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
    d: "M10.61 17.311c-.59 0-1.18-.27-1.73-.82l-2.39-2.39c-1.1-1.1-1.1-2.36 0-3.45l3.99-3.99a.75.75 0 0 1 1.06 0l4.39 4.39c.25.25.38.58.38.93 0 .35-.14.68-.39.93l-3.59 3.59c-.54.53-1.13.81-1.72.81Zm.4-9.07-3.46 3.46c-.17.17-.38.43-.38.67 0 .24.21.49.38.67l2.39 2.39c.17.17.43.38.67.38.24 0 .49-.21.67-.38l3.46-3.46-3.73-3.73Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.01 7.93c-.19 0-.38-.07-.53-.22l-.8-.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.8.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM6.46 13.08a.75.75 0 0 1-.03-1.5l9.03-.39c.41-.03.76.3.78.72.02.42-.3.76-.72.78l-9.03.39h-.03ZM16.471 17.948c-1.02 0-1.85-.83-1.85-1.85 0-.95 1-2.11 1.3-2.44.28-.31.82-.31 1.1 0 .3.33 1.3 1.49 1.3 2.44a1.84 1.84 0 0 1-1.85 1.85Zm0-2.57c-.21.31-.35.59-.35.72 0 .19.16.35.35.35.19 0 .35-.16.35-.35.01-.13-.14-.41-.35-.72Z",
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
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9.41 15.95-2.39-2.39c-.8-.8-.8-1.6 0-2.39l3.99-3.99 4.39 4.39c.22.22.22.58 0 .8l-3.59 3.59c-.8.79-1.6.79-2.4-.01ZM10.21 6.379l.801.8M6.46 12.328l9.03-.39",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.471 14.168s-1.1 1.2-1.1 1.93c0 .61.5 1.1 1.1 1.1.61 0 1.1-.5 1.1-1.1.01-.74-1.1-1.93-1.1-1.93Z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var BucketCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BucketCircle.displayName = 'BucketCircle';

export { BucketCircle as default };
