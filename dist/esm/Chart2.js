import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.91 16.19c0 .64-.52 1.16-1.17 1.16-.64 0-1.16-.52-1.16-1.16v-3.26c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16v3.26Zm6.51 0c0 .64-.52 1.16-1.16 1.16-.65 0-1.17-.52-1.17-1.16V7.81c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16v8.38Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 10.738v3.2M12 15.682v-2.92M12 9v1.01M17 10.738v3.2M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.42 7.808v8.38c0 .64-.52 1.16-1.16 1.16-.65 0-1.17-.52-1.17-1.16v-8.38c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16ZM9.91 12.93v3.26c0 .64-.52 1.16-1.17 1.16-.64 0-1.16-.52-1.16-1.16v-3.26c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 18.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2s-2 .9-2 2v9a2 2 0 0 0 2 2ZM8.5 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 0 0 2 2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 19.25c-1.52 0-2.75-1.23-2.75-2.75v-9c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v9c0 1.52-1.23 2.75-2.75 2.75Zm0-13c-.69 0-1.25.56-1.25 1.25v9a1.25 1.25 0 0 0 2.5 0v-9c0-.69-.56-1.25-1.25-1.25ZM8.5 19.25c-1.52 0-2.75-1.23-2.75-2.75V13c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v3.5c0 1.52-1.23 2.75-2.75 2.75Zm0-7.5c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 0 0 2.5 0V13c0-.69-.56-1.25-1.25-1.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M15.5 18.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2s-2 .9-2 2v9a2 2 0 0 0 2 2ZM8.5 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 0 0 2 2Z",
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

var Chart2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Chart2.displayName = 'Chart2';

export { Chart2 as default };
