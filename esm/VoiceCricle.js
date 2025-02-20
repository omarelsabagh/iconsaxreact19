import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM6.75 14.14c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28Zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14Zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10Zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14Zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9.86v4.29M9 8.43v7.14M12 14.988v2.01M12 7v4.95M15 8.43v7.14M18 9.86v4.29M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75ZM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75ZM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM18 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75ZM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75ZM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM18 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var VoiceCricle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
VoiceCricle.displayName = 'VoiceCricle';

export { VoiceCricle as default };
