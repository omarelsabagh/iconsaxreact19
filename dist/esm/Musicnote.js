import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.719 6.279v1.17c0 .98-.39 1.82-1.08 2.31-.43.32-.96.47-1.51.47-.34 0-.68-.05-1.03-.17l-5.38-1.79v9.73c0 2.62-2.13 4.75-4.75 4.75s-4.75-2.13-4.75-4.75 2.13-4.75 4.75-4.75c1.26 0 2.4.5 3.25 1.3V3.999c0-.97.4-1.81 1.09-2.31.69-.49 1.61-.6 2.53-.3l4.42 1.48c1.36.45 2.46 1.98 2.46 3.41Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.109 16.98c-.09.32-.14.67-.14 1.02 0 2.21 1.79 4 4 4s4-1.79 4-4a3.999 3.999 0 0 0-5.02-3.87M11.969 18V4M14.61 2.11l4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89Z",
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
    d: "M19.26 2.87 14.84 1.4c-.92-.31-1.85-.2-2.53.3-.69.5-1.08 1.34-1.08 2.31v3.77l6.88 2.29c.34.12.69.17 1.02.17.56 0 1.08-.16 1.51-.47.69-.5 1.08-1.34 1.08-2.31V6.28c0-1.43-1.1-2.96-2.46-3.41Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.719 8.27V18c0 2.62-2.13 4.75-4.75 4.75s-4.75-2.13-4.75-4.75 2.13-4.75 4.75-4.75c1.26 0 2.4.5 3.25 1.3V7.77l1.5.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.97 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.97 18V4M14.61 2.11l4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.969 22.75c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25a3.25 3.25 0 0 0-3.25-3.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.969 18.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.33.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.13 10.231c-.33 0-.68-.06-1.02-.17l-4.42-1.47c-1.38-.46-2.46-1.96-2.46-3.41v-1.18c0-.97.4-1.81 1.08-2.31.69-.5 1.61-.6 2.53-.3l4.42 1.47c1.38.46 2.46 1.96 2.46 3.41v1.17c0 .97-.4 1.81-1.08 2.31-.43.33-.96.48-1.51.48Zm-5.31-7.51c-.24 0-.46.06-.63.19-.3.21-.46.6-.46 1.09v1.17c0 .8.67 1.73 1.43 1.99l4.42 1.47c.46.16.89.12 1.18-.09.3-.21.46-.6.46-1.09v-1.17c0-.8-.67-1.73-1.43-1.99l-4.42-1.47c-.19-.07-.38-.1-.55-.1Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.969 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M11.969 18V4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.61 2.11 4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89Z",
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

var Musicnote = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Musicnote.displayName = 'Musicnote';

export { Musicnote as default };
