import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15.9 8.07A6.986 6.986 0 0 0 8.97 2c-3.87 0-7 3.13-7 7 0 3.55 2.64 6.48 6.07 6.93.3.05.61.07.93.07.117 0 .232-.003.346-.009.22-.012.31-.275.155-.431a.754.754 0 0 1 0-1.06c.29-.3.77-.3 1.06 0l.78.78c.14.14.35.185.53.105.383-.17.745-.375 1.086-.61a.47.47 0 0 0 .049-.726l-.505-.499a.745.745 0 0 1 0-1.06c.29-.29.76-.3 1.06-.01l.508.503c.21.207.555.19.723-.053.23-.333.431-.687.596-1.061a.476.476 0 0 0-.106-.527l-.781-.782a.754.754 0 0 1 0-1.06c.29-.3.77-.3 1.06 0 .156.156.419.066.43-.155.007-.114.01-.229.01-.345 0-.32-.02-.63-.07-.93Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.97 15c0 3.87-3.13 7-7 7-2.93 0-5.445-1.8-6.479-4.368-.125-.311.144-.633.479-.633.35 0 .68-.02 1.02-.07l.505-.067a.5.5 0 0 1 .42.142l.525.525c.15.15.34.22.53.22.2 0 .39-.07.53-.22.3-.29.3-.77 0-1.06a.201.201 0 0 1 .056-.32 7.993 7.993 0 0 0 1.175-.726.527.527 0 0 1 .684.037l.485.48c.15.14.34.22.53.22s.39-.08.53-.23c.29-.29.29-.77-.01-1.06l-.478-.473a.52.52 0 0 1-.047-.677c.263-.361.51-.754.708-1.14a.193.193 0 0 1 .307-.05c.15.15.34.22.53.22.2 0 .39-.07.53-.22.3-.29.3-.77 0-1.06l-.526-.526a.5.5 0 0 1-.142-.42l.068-.505c.05-.34.07-.67.07-1.02 0-.335.322-.603.632-.478A6.99 6.99 0 0 1 21.97 15Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.97 2c3.55 0 6.48 2.64 6.93 6.07.05.3.07.61.07.93 0 3.87-3.13 7-7 7-.32 0-.63-.02-.93-.07A6.986 6.986 0 0 1 1.97 9c0-1.93.78-3.68 2.05-4.95",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.97 15c0 3.87-3.13 7-7 7-3.55 0-6.48-2.64-6.93-6.07.3.05.61.07.93.07 3.87 0 7-3.13 7-7 0-.32-.02-.63-.07-.93 3.43.45 6.07 3.38 6.07 6.93ZM14.12 14.121l1.31 1.29M16.97 12l-1-1M11.97 17l-1-1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.5 17.532a.71.71 0 0 1-.53.22c-.19 0-.38-.07-.53-.22l-1.59-1.59c.59-.07 1.16-.21 1.69-.43l.96.96c.3.29.3.77 0 1.06ZM15.96 15.931c-.14.15-.34.23-.53.23s-.38-.08-.53-.22l-1.53-1.5c.39-.31.75-.67 1.06-1.07l1.52 1.5c.3.29.3.77.01 1.06ZM17.5 12.529a.71.71 0 0 1-.53.22c-.19 0-.38-.07-.53-.22l-.96-.96c.22-.53.36-1.1.43-1.69l1.59 1.59c.3.29.3.77 0 1.06Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.9 8.07A6.986 6.986 0 0 0 8.97 2c-3.87 0-7 3.13-7 7 0 3.55 2.64 6.48 6.07 6.93a6.397 6.397 0 0 0 1.81.01l-.38-.38a.754.754 0 0 1 0-1.06c.29-.3.77-.3 1.06 0l1.01 1.01c.67-.26 1.28-.62 1.83-1.07l-.9-.89a.745.745 0 0 1 0-1.06c.29-.29.76-.3 1.06-.01l.9.89c.44-.54.8-1.14 1.05-1.8l-1.01-1.01a.754.754 0 0 1 0-1.06c.29-.3.77-.3 1.06 0l.38.38a6.397 6.397 0 0 0-.01-1.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M21.97 15c0 3.87-3.13 7-7 7-3.55 0-6.48-2.64-6.93-6.07a6.397 6.397 0 0 0 1.81.01l1.59 1.59c.15.15.34.22.53.22.2 0 .39-.07.53-.22.3-.29.3-.77 0-1.06l-.96-.96c.67-.26 1.28-.62 1.83-1.07l1.53 1.5c.15.14.34.22.53.22s.39-.08.53-.23c.29-.29.29-.77-.01-1.06l-1.52-1.5c.44-.54.8-1.14 1.05-1.8l.96.96c.15.15.34.22.53.22.2 0 .39-.07.53-.22.3-.29.3-.77 0-1.06l-1.59-1.59a6.397 6.397 0 0 0-.01-1.81c3.43.45 6.07 3.38 6.07 6.93Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M14.97 8c0 3.87-3.13 7-7 7-.32 0-.63-.02-.93-.07A6.986 6.986 0 01.97 8c0-3.87 3.13-7 7-7 3.55 0 6.48 2.64 6.93 6.07.05.3.07.61.07.93z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M20.97 14c0 3.87-3.13 7-7 7-3.55 0-6.48-2.64-6.93-6.07.3.05.61.07.93.07 3.87 0 7-3.13 7-7 0-.32-.02-.63-.07-.93 3.43.45 6.07 3.38 6.07 6.93zM13.12 13.12l1.31 1.29M15.97 11l-1-1M10.97 16l-1-1"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.97 16.75c-.39 0-.73-.03-1.05-.08-3.8-.5-6.7-3.8-6.7-7.67 0-4.27 3.48-7.75 7.75-7.75 3.87 0 7.17 2.89 7.67 6.72.05.3.08.64.08 1.03 0 4.27-3.47 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25a6.26 6.26 0 0 0 5.42 6.19c.26.04.53.06.83.06 3.45 0 6.25-2.8 6.25-6.25 0-.3-.02-.57-.06-.81a6.254 6.254 0 0 0-6.19-5.44Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.97 22.75c-3.87 0-7.17-2.89-7.67-6.72a.747.747 0 0 1 .87-.84c.24.04.5.06.8.06 3.45 0 6.25-2.8 6.25-6.25 0-.3-.02-.57-.06-.81-.04-.23.04-.47.2-.64.16-.17.39-.26.64-.22 3.83.5 6.72 3.8 6.72 7.67 0 4.27-3.47 7.75-7.75 7.75Zm-5.99-6c.76 2.62 3.19 4.5 5.99 4.5 3.45 0 6.25-2.8 6.25-6.25 0-2.8-1.88-5.24-4.5-5.99 0 4.26-3.47 7.74-7.74 7.74Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.43 16.16c-.19 0-.38-.07-.53-.21l-1.3-1.28a.755.755 0 0 1-.01-1.06c.29-.29.76-.3 1.06-.01l1.3 1.28c.29.29.3.77.01 1.06-.14.14-.34.22-.53.22ZM16.97 12.751c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22ZM11.97 17.751c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.97 8c0 3.87-3.13 7-7 7-.32 0-.63-.02-.93-.07A6.986 6.986 0 0 1 .97 8c0-3.87 3.13-7 7-7 3.55 0 6.48 2.64 6.93 6.07.05.3.07.61.07.93Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M20.971 14c0 3.87-3.13 7-7 7-3.55 0-6.48-2.64-6.93-6.07.3.05.61.07.93.07 3.87 0 7-3.13 7-7 0-.32-.02-.63-.07-.93 3.43.45 6.07 3.38 6.07 6.93ZM13.121 13.121l1.31 1.29M15.97 11l-1-1M10.97 16l-1-1",
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

var Blend2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Blend2.displayName = 'Blend2';

export { Blend2 as default };
