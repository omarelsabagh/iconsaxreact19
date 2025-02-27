import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08ZM9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76ZM21.608 5.39l-1.22 1.22c.08.37.11.77.11 1.2v4.8l-.13-.11c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.71.61-1.83.67-2.61.15l-5.38 5.38c.04.02.08.03.12.04.27.09.54.16.83.22.1.02.2.04.31.05.37.05.75.09 1.15.09h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-.9-.13-1.71-.39-2.42Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21.61 5.39-1.22 1.22c.08.37.11.77.11 1.2v4.8l-.13-.11c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.71.61-1.83.67-2.61.15l-5.39 5.39c.71.26 1.52.39 2.42.39h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-.9-.13-1.71-.39-2.42ZM20.46 3.54 19.4 4.6c-.72-.73-1.8-1.1-3.21-1.1H7.81C4.99 3.5 3.5 4.99 3.5 7.81v8.38c0 .76.13 1.41.35 1.97l3.74-2.51c.34-.23.73-.35 1.12-.36l-5.17 5.17c-.4-.4-.73-.88-.98-1.43-.37-.8-.56-1.75-.56-2.84V7.81C2 4.17 4.17 2 7.81 2h8.38c1.82 0 3.27.54 4.27 1.54Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 9c0-5 2-7 7-7h6c2.19 0 3.8.38 4.92 1.23M3.37 20.099c-.94-1.13-1.37-2.79-1.37-5.1v-2.03M21.97 7.988c.02.32.03.66.03 1.01v6c0 5-2 7-7 7H9c-.74 0-1.42-.04-2.04-.14",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M22 2 2 22M11.43 16.45c.3.3.79.3 1.09 0l5.03-5.04c.78-.78 2.04-.78 2.82 0L22 13.05",
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
    d: "M20.46 3.54 3.54 20.46c-1-1-1.54-2.45-1.54-4.27V7.81C2 4.17 4.17 2 7.81 2h8.38c1.82 0 3.27.54 4.27 1.54ZM22.001 7.81v6.09l-1.63-1.4c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.71.61-1.83.67-2.61.15l10.83-10.83c.14.38.24.78.3 1.21.06.38.09.79.09 1.21Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 13.899v2.29c0 3.64-2.17 5.81-5.81 5.81H7.81c-.42 0-.83-.03-1.21-.09-.43-.06-.83-.16-1.21-.3l5.39-5.39c.78.52 1.9.46 2.61-.15l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4ZM21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08ZM8.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.37 20.1C2.43 18.97 2 17.31 2 15V9c0-5 2-7 7-7h6c2.19 0 3.8.38 4.92 1.23M21.97 7.99c.02.32.03.66.03 1.01v6c0 5-2 7-7 7H9c-.74 0-1.42-.04-2.04-.14",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 2 2 22M11.43 16.45c.3.3.79.3 1.09 0l5.03-5.04c.78-.78 2.04-.78 2.82 0L22 13.05",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.38 20.85c-.21 0-.43-.09-.57-.27-1.07-1.25-1.56-3.03-1.56-5.58V9c0-5.43 2.32-7.75 7.75-7.75h6c2.39 0 4.14.45 5.38 1.38a.75.75 0 0 1-.9 1.2c-.97-.73-2.43-1.08-4.48-1.08H9C4.39 2.75 2.75 4.39 2.75 9v6c0 2.15.39 3.66 1.2 4.62.27.32.23.79-.09 1.06-.14.11-.31.17-.48.17ZM14.999 22.75h-6c-.79 0-1.5-.05-2.15-.14a.747.747 0 0 1-.63-.85c.06-.41.45-.69.85-.63.57.08 1.22.13 1.93.13h6c4.61 0 6.25-1.64 6.25-6.25V9c0-.33-.01-.66-.03-.96a.752.752 0 1 1 1.5-.1c.02.34.03.69.03 1.06v6c0 5.43-2.32 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10.75c-1.52 0-2.75-1.23-2.75-2.75S6.48 5.25 8 5.25 10.75 6.48 10.75 8 9.52 10.75 8 10.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22ZM11.979 17.43c-.39 0-.78-.15-1.07-.44a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .01.01.02.01.03 0l5.03-5.04c1.04-1.04 2.85-1.04 3.88 0l1.63 1.63c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-1.63-1.63c-.47-.47-1.29-.47-1.76 0l-5.03 5.04c-.3.29-.69.44-1.08.44Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.37 20.1C2.43 18.97 2 17.31 2 15V9c0-5 2-7 7-7h6c2.19 0 3.8.38 4.92 1.23",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 2 22",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.97 7.992c.02.32.03.66.03 1.01v6c0 5-2 7-7 7H9c-.74 0-1.42-.04-2.04-.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.43 16.453c.3.3.79.3 1.09 0l5.03-5.04c.78-.78 2.04-.78 2.82 0l1.63 1.64"
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

var GallerySlash = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
GallerySlash.displayName = 'GallerySlash';

export { GallerySlash as default };
