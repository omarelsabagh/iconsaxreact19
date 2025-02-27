import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 7.81v4.69h-4.08c-.12-.01-.38-.16-.44-.27l-1.04-1.97c-.41-.78-1.12-1.22-1.88-1.18-.76.04-1.41.55-1.74 1.38l-1.38 3.46-.2-.52c-.49-1.27-1.89-2.23-3.27-2.23L2 11.2V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 16.189v-2.19h-4.08c-.67 0-1.46-.48-1.77-1.07l-1.04-1.97c-.28-.53-.68-.5-.9.05l-2.3 5.81c-.25.65-.67.65-.93 0l-1.14-2.88c-.27-.7-1.11-1.27-1.86-1.27l-5.98.03v3.49c0 3.58 2.1 5.74 5.63 5.8.11.01.23.01.34.01h8c.15 0 .3 0 .44-.01 3.51-.08 5.59-2.23 5.59-5.8ZM2 12.7v3.31c-.02-.32-.03-.66-.03-1.01v-2.3H2Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.97 2c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-2",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m1.97 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06",
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
    d: "M22 7.81V14h-4.08c-.67 0-1.46-.48-1.77-1.07l-1.04-1.97c-.28-.53-.68-.5-.9.05l-2.3 5.81c-.25.65-.67.65-.93 0l-1.14-2.88c-.27-.7-1.11-1.27-1.86-1.27L2 12.7V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 16.189v-2.19h-4.08c-.67 0-1.46-.48-1.77-1.07l-1.04-1.97c-.28-.53-.68-.5-.9.05l-2.3 5.81c-.25.65-.67.65-.93 0l-1.14-2.88c-.27-.7-1.11-1.27-1.86-1.27l-5.98.03v3.49c0 3.58 2.1 5.74 5.63 5.8.11.01.23.01.34.01h8c.15 0 .3 0 .44-.01 3.51-.08 5.59-2.23 5.59-5.8ZM2 12.7v3.31c-.02-.32-.03-.66-.03-1.01v-2.3H2Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.97 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m1.97 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.31 7.75-7.75 7.75Zm-6-20C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.45 18.06c-.24 0-.82-.09-1.16-.96l-1.14-2.88c-.16-.41-.73-.79-1.16-.79l-6 .02a.749.749 0 1 1 0-1.5l6-.02H8c1.05 0 2.17.76 2.56 1.74l.91 2.3 2.06-5.22c.31-.78.86-.89 1.09-.91.23-.01.79.04 1.18.78l1.04 1.97c.18.34.72.67 1.11.67h4.06c.41 0 .75.34.75.75s-.34.75-.75.75h-4.06c-.95 0-1.99-.63-2.43-1.47l-.78-1.48-2.1 5.29c-.37.86-.96.96-1.19.96Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.97 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "m1.97 12.7 6-.02c.75 0 1.59.57 1.87 1.27l1.14 2.88c.26.65.67.65.93 0l2.29-5.81c.22-.56.63-.58.91-.05l1.04 1.97c.31.59 1.11 1.07 1.77 1.07h4.06",
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

var Health = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Health.displayName = 'Health';

export { Health as default };
