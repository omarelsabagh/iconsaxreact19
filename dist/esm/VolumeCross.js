import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m22.531 13.42-1.45-1.45 1.4-1.4c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.4 1.4-1.45-1.45a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.45 1.45-1.49 1.49c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.49-1.49 1.45 1.45c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06ZM14.02 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H6.43c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63v-9.18c0-1.72-.62-3.01-1.73-3.63Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 14.002c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-9.18c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 13.96 18.04 10M19.89 12.11 18 14M21.962 10.04l-.54.54",
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
    d: "m22.531 13.42-1.45-1.45 1.4-1.4c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.4 1.4-1.45-1.45a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.45 1.45-1.49 1.49c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.49-1.49 1.45 1.45c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06Z",
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
    d: "M2 10.16v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.57c0-2.98-2.07-4.12-4.59-2.54L7.49 6.86c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3Z",
    stroke: color,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 14.12-3.96-3.96M21.96 10.2 18 14.16",
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
    d: "M12.55 20.589c-.79 0-1.66-.28-2.53-.83l-2.92-1.83c-.2-.12-.43-.19-.66-.19H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h1.43c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.88-1.08 4-.46 1.12.62 1.73 1.91 1.73 3.64v9.17c0 1.72-.62 3.02-1.73 3.64-.44.26-.94.38-1.46.38ZM5 7.749c-1.58 0-2.25.67-2.25 2.25v4c0 1.58.67 2.25 2.25 2.25h1.43c.52 0 1.02.14 1.46.42l2.92 1.83c.97.6 1.87.76 2.48.42.61-.34.96-1.19.96-2.32v-9.19c0-1.14-.35-1.99-.96-2.32-.61-.34-1.52-.19-2.48.42l-2.93 1.82c-.43.28-.94.42-1.45.42H5ZM22 14.711c-.19 0-.38-.07-.53-.22l-3.96-3.96a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.96 3.96c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.001 14.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.96-3.96c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.96 3.96c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M1 7.002v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-9.18c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3H4c-2 0-3 1-3 3Z",
    stroke: color,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 10.96 17.04 7M20.96 7.04 17 11"
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

var VolumeCross = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
VolumeCross.displayName = 'VolumeCross';

export { VolumeCross as default };
