import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M21.71 9.9l-2.4-4.82c-.47-.95-1.72-1.72-2.78-1.72H7.47c-1.06 0-2.31.77-2.78 1.72L2.29 9.9c-.58 1.16-.26 2.81.69 3.68l6.93 6.29c1.15 1.04 3.02 1.04 4.17 0l6.93-6.29c.96-.87 1.28-2.53.7-3.68zM16 9.25h-3.25v5.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m18.1 16.22-4.02 3.65c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.47-.95 1.72-1.72 2.78-1.72h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68M12 14.5v-6M8 8.5h8",
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
    opacity: ".4",
    d: "M7.47 3.352h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68l-6.93 6.29c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.46-.95 1.71-1.72 2.77-1.72Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7.75H8c-.41 0-.75.34-.75.75s.34.75.75.75h3.25v5.25c0 .41.34.75.75.75s.75-.34.75-.75V9.25H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.47 3.35h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68l-6.93 6.29c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.46-.95 1.71-1.72 2.77-1.72ZM12 14.5v-6M8 8.5h8",
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
    d: "M12 21.4c-.94 0-1.88-.32-2.59-.97l-6.93-6.29c-1.21-1.1-1.59-3.11-.86-4.57l2.4-4.82c.6-1.2 2.11-2.14 3.45-2.14h9.06c1.34 0 2.85.94 3.45 2.14l2.4 4.82c.73 1.46.35 3.47-.86 4.57l-6.93 6.29c-.71.64-1.65.97-2.59.97ZM7.47 4.1c-.78 0-1.76.61-2.11 1.31l-2.4 4.82c-.42.85-.18 2.15.53 2.79l6.93 6.29c.86.78 2.31.78 3.16 0l6.93-6.29c.7-.64.95-1.94.53-2.79l-2.4-4.82c-.35-.69-1.33-1.3-2.11-1.3H7.47V4.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.25c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.47 3.352h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68l-6.93 6.29c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.46-.95 1.71-1.72 2.77-1.72Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 14.5v-6M8 8.5h8"
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

var Tether = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Tether.displayName = 'Tether';

export { Tether as default };
