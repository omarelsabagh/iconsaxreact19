import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07ZM18.28 10.14v3.72c0 2.95-2.4 5.35-5.35 5.35H9.26c-.79 0-1.27-.87-.85-1.53L15.67 6.2c.36-.57 1.17-.62 1.62-.11.72.83.99 2.12.99 4.05ZM16.4 1.87a.745.745 0 0 0-1.03.23l-1.71 2.71c-.23-.01-.47-.02-.73-.02H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 3.05.7 4.51 2.74 5.06L3.37 21.1c-.22.35-.12.81.23 1.03.12.08.26.12.4.12.25 0 .49-.12.63-.35l12-19c.23-.35.12-.81-.23-1.03Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M4 21.5l4.09-6.47L16 2.5M2 14c0 3.4.72 4.63 3.39 4.92M7 5c-4 0-5 1-5 5M13 18.998c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M14.5 4.87 5.52 19.09C2.87 18.71 2 17.27 2 13.86v-3.72c0-4.1 1.25-5.35 5.35-5.35h5.58c.58 0 1.1.02 1.57.08ZM18.28 10.139v3.72c0 2.95-2.4 5.35-5.35 5.35H7.45l8.78-13.9c1.52.69 2.05 2.15 2.05 4.83Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 22.25c-.14 0-.28-.04-.4-.12a.736.736 0 0 1-.23-1.03l12-19c.22-.35.69-.45 1.03-.23.35.22.46.68.23 1.03l-12 19c-.14.23-.38.35-.63.35Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M4 21.5l12-19M7 5c-4 0-5 1-5 5v4c0 3.4.72 4.63 3.39 4.92M13 19c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25ZM4 22.25c-.14 0-.28-.04-.4-.12a.736.736 0 0 1-.23-1.03l12-19c.22-.35.69-.45 1.03-.23.35.22.46.68.23 1.03l-12 19c-.14.23-.38.35-.63.35Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.39 19.67h-.08c-3.4-.38-4.06-2.36-4.06-5.67v-4c0-4.41 1.34-5.75 5.75-5.75.41 0 .75.34.75.75s-.34.75-.75.75c-3.57 0-4.25.68-4.25 4.25v4c0 3.32.68 3.95 2.72 4.18.41.05.71.42.66.83-.04.38-.37.66-.74.66ZM13 19.752c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.57 0 4.25-.68 4.25-4.25v-4c0-3.31-.68-3.95-2.71-4.18a.751.751 0 0 1-.66-.83c.05-.41.41-.72.83-.66 3.38.38 4.04 2.37 4.04 5.67v4c0 4.41-1.34 5.75-5.75 5.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".34",
    d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 21.5 12-19M7 5c-4 0-5 1-5 5v4c0 3.4.72 4.63 3.39 4.92",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".34",
    d: "M13 18.998c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92",
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

var BatteryDisable = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BatteryDisable.displayName = 'BatteryDisable';

export { BatteryDisable as default };
