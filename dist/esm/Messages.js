import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.999 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-1.86 0-3.57-.63-4.87-1.68l.6-.71c4.62-.35 8.27-4.01 8.27-8.47 0-.76-.11-1.51-.31-2.23 2.27 1.2 3.81 3.48 3.81 6.09Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.3 6.07C15.13 3.67 12.52 2 9.5 2 5.36 2 2 5.13 2 9c0 2.29 1.18 4.32 3 5.6l1.34 2.95c.31.67 1.21.79 1.68.23l.55-.66L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93ZM12 9.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 2c3.02 0 5.63 1.67 6.8 4.07.45.89.7 1.88.7 2.93 0 3.87-3.36 7-7.5 7l-.93 1.12-.55.66c-.47.56-1.37.44-1.68-.23L5 14.6C3.18 13.32 2 11.29 2 9c0-2.27 1.15-4.28 2.95-5.56",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-2.42 0-4.58-1.07-5.93-2.74L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93 1.63.37 3.04 1.24 4.06 2.43M7 9h5",
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
    d: "M17 9c0 3.87-3.36 7-7.5 7l-.93 1.12-.55.66c-.47.56-1.37.44-1.68-.23L5 14.6C3.18 13.32 2 11.29 2 9c0-3.87 3.36-7 7.5-7 3.02 0 5.63 1.67 6.8 4.07.45.89.7 1.88.7 2.93Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-2.42 0-4.58-1.07-5.93-2.74L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93 3.27.75 5.7 3.51 5.7 6.79ZM12 9.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 9c0 3.87-3.36 7-7.5 7l-.93 1.12-.55.66c-.47.56-1.37.44-1.68-.23L5 14.6C3.18 13.32 2 11.29 2 9c0-3.87 3.36-7 7.5-7 3.02 0 5.63 1.67 6.8 4.07.45.89.7 1.88.7 2.93Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-2.42 0-4.58-1.07-5.93-2.74L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93 3.27.75 5.7 3.51 5.7 6.79ZM7 9h5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.99 22.78c-.6 0-1.17-.3-1.56-.83l-1.2-1.6c0 .01-.05-.02-.07-.02h-.37c-3.42 0-5.54-.93-5.54-5.54v-4c0-4.21 2.57-5.31 4.73-5.5.24-.03.52-.04.81-.04h6.4c3.62 0 5.54 1.92 5.54 5.54v4c0 .29-.01.57-.05.84-.18 2.13-1.28 4.7-5.49 4.7h-.4l-1.24 1.62c-.39.53-.96.83-1.56.83ZM6.79 6.75c-.23 0-.45.01-.66.03-2.32.2-3.38 1.47-3.38 4.01v4c0 3.43 1.06 4.04 4.04 4.04h.4c.45 0 .96.25 1.24.61l1.2 1.61c.22.3.5.3.72 0l1.2-1.6c.29-.39.75-.62 1.24-.62h.4c2.54 0 3.81-1.07 4-3.35.03-.24.04-.46.04-.69v-4c0-2.79-1.25-4.04-4.04-4.04h-6.4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.992 14.191c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM13.191 14.191c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM6.8 14.191c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.94 16.29c-.2 0-.4-.08-.54-.23a.727.727 0 0 1-.2-.61c.03-.21.04-.43.04-.66v-4c0-2.79-1.25-4.04-4.04-4.04H6.8c-.23 0-.45.01-.66.03a.76.76 0 0 1-.61-.2.762.762 0 0 1-.23-.6c.18-2.16 1.29-4.73 5.5-4.73h6.4c3.62 0 5.54 1.92 5.54 5.54v4c0 4.21-2.57 5.31-4.73 5.5h-.07ZM6.92 5.25h6.27c3.62 0 5.54 1.92 5.54 5.54v3.87c1.7-.42 2.5-1.67 2.5-3.87v-4c0-2.79-1.25-4.04-4.04-4.04h-6.4c-2.2 0-3.44.8-3.87 2.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 9c0 3.87-3.36 7-7.5 7l-.93 1.12-.55.66c-.47.56-1.37.44-1.68-.23L5 14.6C3.18 13.32 2 11.29 2 9c0-3.87 3.36-7 7.5-7 3.02 0 5.63 1.67 6.8 4.07.45.89.7 1.88.7 2.93Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M22 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-2.42 0-4.58-1.07-5.93-2.74L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93 3.27.75 5.7 3.51 5.7 6.79ZM7 9h5",
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

var Messages = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Messages.displayName = 'Messages';

export { Messages as default };
