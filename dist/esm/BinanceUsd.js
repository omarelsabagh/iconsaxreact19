import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M11.4 2.35L6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 00-.71 0zM15.3 6.26l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.19-.2-.51-.2-.71 0zM19.21 10.162l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0zM4.091 13.84l-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.4 2.35 6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 0 0-.71 0ZM12.95 8.61l-6.7 6.7c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.51-.2-.71 0M19.21 10.162l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0ZM4.091 13.84l-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.4 2.35 6.26 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.526.526 0 0 0-.72 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M15.3 6.26 6.26 15.3c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73a.516.516 0 0 0-.72.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.21 10.162-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "m4.09 13.84-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71L4.8 13.84c-.2.2-.52.2-.71 0Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.4 2.4 6.3 7.5c-.2.2-.2.5 0 .7L8 9.9c.2.2.5.2.7 0l5.1-5.1c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM15.3 6.3l-9 9c-.2.2-.2.5 0 .7L8 17.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7L16 6.3c-.2-.2-.5-.2-.7 0ZM19.2 10.2l-9 9c-.2.2-.2.5 0 .7l1.7 1.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM4.1 13.8l-1.7-1.7c-.2-.2-.2-.5 0-.7l1.7-1.7c.2-.2.5-.2.7 0l1.7 1.7c.2.2.2.5 0 .7l-1.7 1.7c-.2.2-.5.2-.7 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.34 10.829c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l5.15-5.15a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-5.15 5.15c-.25.25-.57.37-.89.37Zm-1.38-2.98 1.38 1.38 4.79-4.79-1.38-1.38-4.79 4.79ZM8.34 18.64c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l9.05-9.05a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-9.05 9.05c-.25.25-.57.37-.89.37Zm-1.38-2.98 1.38 1.38 8.7-8.7-1.38-1.38-8.7 8.7ZM12.24 22.541c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l9.05-9.05a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-9.05 9.05c-.25.25-.57.37-.89.37Zm-1.37-2.98 1.38 1.38 8.7-8.7-1.38-1.38-8.7 8.7ZM4.44 14.739c-.32 0-.64-.12-.88-.36l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l1.73-1.73a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-1.73 1.73c-.25.24-.57.36-.89.36Zm-1.38-2.98 1.38 1.38 1.38-1.38-1.38-1.38-1.38 1.38Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.4 2.35 6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 0 0-.71 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "m15.3 6.26-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.19-.2-.51-.2-.71 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.21 10.162-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "m4.091 13.84-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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

var BinanceUsd = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BinanceUsd.displayName = 'BinanceUsd';

export { BinanceUsd as default };
