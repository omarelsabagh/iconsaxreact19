import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m20.36 7.78-15.82 9.5c-.61.37-1.43 0-1.51-.71-.02-.19-.03-.38-.03-.57V8c0-3 2-5 5-5h8c3 0 4.23 1.54 4.81 3.65.12.44-.07.9-.45 1.13ZM21 11.09V16c0 3-2 5-5 5H8c-.92 0-1.79-.25-2.53-.69-.64-.37-.6-1.31.03-1.69l13.98-8.39c.67-.4 1.52.08 1.52.86Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9.3C3 4.8 4.8 3 9.3 3h5.4C19.2 3 21 4.8 21 9.3v5.4c0 4.5-1.8 6.3-6.3 6.3H9.3C4.8 21 3 19.2 3 14.7v-.71",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m20.9 7.66-.78.47-.49.3-.93.55-13.94 8.36-.09.05-.53.32-.61.37C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3h5.4c3.91 0 5.78 1.36 6.2 4.66Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M21 9.2v5.5c0 4.5-1.8 6.3-6.3 6.3H9.3c-2.44 0-4.09-.53-5.07-1.74l.3-.18.61-.37.53-.32.09-.05L19.7 9.98l.93-.55.37-.23Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.3 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3v5.4C3 19.2 4.8 21 9.3 21Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.7 21.75H9.3c-4.94 0-7.05-2.11-7.05-7.05V9.3c0-4.94 2.11-7.05 7.05-7.05h5.4c4.94 0 7.05 2.11 7.05 7.05v5.4c0 4.94-2.11 7.05-7.05 7.05Zm-5.4-18c-4.1 0-5.55 1.45-5.55 5.55v5.4c0 4.1 1.45 5.55 5.55 5.55h5.4c4.1 0 5.55-1.45 5.55-5.55V9.3c0-4.1-1.45-5.55-5.55-5.55H9.3Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.3 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3v5.4C3 19.2 4.8 21 9.3 21Z",
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

var Stop = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Stop.displayName = 'Stop';

export { Stop as default };
