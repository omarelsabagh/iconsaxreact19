import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.02 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H6.43c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63v-9.18c0-1.72-.62-3.01-1.73-3.63Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-.14M18 12h1.8M2 14.04c0 2.04 1.02 3.06 3.06 3.06h1.46c.38 0 .76.11 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L7.6 6.59c-.33.2-.7.31-1.08.31H5.06C3.02 6.9 2 7.92 2 9.96",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M15.75 7.412v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37c-.8 0-1.66-.27-2.54-.82l-2.92-1.83c-.2-.12-.43-.19-.66-.19H5.5v-11.5h.93c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45 1.11.62 1.73 1.91 1.73 3.63Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 6.25v11.5H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 9.96v4.08c0 2.04 1.02 3.06 3.06 3.06h1.46c.38 0 .76.11 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L7.6 6.59c-.33.2-.7.31-1.08.31H5.06C3.02 6.9 2 7.92 2 9.96Z",
    stroke: color,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12h4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13.878 20.589c-.79 0-1.66-.28-2.53-.83l-2.92-1.83c-.2-.12-.43-.19-.66-.19h-1.44c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h1.43c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.88-1.08 4-.46 1.12.62 1.73 1.91 1.73 3.64v9.17c0 1.72-.62 3.02-1.73 3.64-.44.26-.93.38-1.46.38Zm-7.55-12.84c-1.58 0-2.25.67-2.25 2.25v4c0 1.58.67 2.25 2.25 2.25h1.43c.52 0 1.02.14 1.46.42l2.92 1.83c.97.6 1.87.76 2.48.42.61-.34.96-1.19.96-2.32v-9.19c0-1.14-.35-1.99-.96-2.32-.61-.34-1.51-.19-2.48.42l-2.92 1.82c-.44.28-.94.42-1.46.42h-1.43ZM19.328 16.75a.75.75 0 0 1-.6-1.2 5.94 5.94 0 0 0 0-7.1.75.75 0 0 1 1.2-.9 7.44 7.44 0 0 1 0 8.9c-.14.2-.37.3-.6.3Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 9.96v4.08c0 2.04 1.02 3.06 3.06 3.06h1.46c.38 0 .76.11 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L7.6 6.59c-.33.2-.7.31-1.08.31H5.06C3.02 6.9 2 7.92 2 9.96Z",
    stroke: color,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M18 12h4",
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

var VolumeLow = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
VolumeLow.displayName = 'VolumeLow';

export { VolumeLow as default };
