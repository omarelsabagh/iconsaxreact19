import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.63 12.24l-4.29 4.29a.75.75 0 01-1.06 0l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.08.39-.22.53z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M18.07 14.43L12 20.5l-6.07-6.07M12 12v8.33M12 3.5v4.53"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M11.47 18.53l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.07.38-.22.53l-4.29 4.29a.75.75 0 01-1.06 0z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 21.25c-.19 0-.38-.07-.53-.22L5.4 14.96a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 19.44l5.54-5.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 21.08c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75s.75.34.75.75v16.83c0 .41-.34.75-.75.75z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M18.07 14.43L12 20.5l-6.07-6.07"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M12 3.5v16.83",
    opacity: ".4"
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

var ArrowDown = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ArrowDown.displayName = 'ArrowDown';

export { ArrowDown as default };
