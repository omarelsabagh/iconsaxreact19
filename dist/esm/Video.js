import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62c1.03 0 1.88.84 1.88 1.88s-.85 1.88-1.88 1.88Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 7.788c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.05 4.21-4.21 4.21H6.21c-3.16 0-4.21-2.1-4.21-4.21v-4.09",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.518 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29ZM13 9.5c0-.83-.67-1.5-1.5-1.5S10 8.67 10 9.5s.67 1.5 1.5 1.5",
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
    d: "M13 3.25H7C3.58 3.25 2.25 4.58 2.25 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.42 0 4.75-1.33 4.75-4.75V8c0-3.42-1.33-4.75-4.75-4.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.501 11.381a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76ZM21.65 6.172c-.41-.21-1.27-.45-2.44.37l-1.48 1.04c.01.14.02.27.02.42v8c0 .15-.02.28-.02.42l1.48 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.1.85-.2.41-.21 1.1-.78 1.1-2.21v-7.25c0-1.43-.69-2-1.1-2.21Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.53 20.42H6.21c-3.16 0-4.21-2.1-4.21-4.21V7.79c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.06 4.21-4.21 4.21Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.52 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29ZM11.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.88 20.86H6.81C3.26 20.86 2 18.37 2 16.05v-8.1c0-3.46 1.35-4.81 4.81-4.81h6.07c3.46 0 4.81 1.35 4.81 4.81v8.1c0 3.46-1.35 4.81-4.81 4.81ZM6.81 4.66c-2.61 0-3.29.68-3.29 3.29v8.1c0 1.23.43 3.29 3.29 3.29h6.07c2.61 0 3.29-.68 3.29-3.29v-8.1c0-2.61-.68-3.29-3.29-3.29H6.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.78 18.108c-.43 0-.98-.14-1.61-.58l-2.67-1.87a.754.754 0 0 1-.32-.62v-6.08c0-.25.12-.48.32-.62l2.67-1.87c1.19-.83 2.06-.59 2.47-.38.41.22 1.11.79 1.11 2.24v7.33c0 1.45-.7 2.03-1.11 2.24-.19.11-.49.21-.86.21Zm-3.09-3.47 2.35 1.64c.45.31.77.34.9.27.14-.07.29-.35.29-.89v-7.32c0-.55-.16-.82-.29-.89-.13-.07-.45-.04-.9.27l-2.35 1.64v5.28ZM11.5 11.75c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.53 20.418H6.21c-3.16 0-4.21-2.1-4.21-4.21v-8.42c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.06 4.21-4.21 4.21Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "m19.518 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29ZM11.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
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

var Video = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Video.displayName = 'Video';

export { Video as default };
