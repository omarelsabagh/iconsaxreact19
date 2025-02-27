import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19.38 15.98v1.04c0 1.59-.6 2.23-2.12 2.23H5.38v-5.5h11.88c1.52 0 2.12.64 2.12 2.23ZM14.38 7.48v1.04c0 1.59-.61 2.23-2.12 2.23H5.38v-5.5h6.88c1.51 0 2.12.64 2.12 2.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.38 22c-.41 0-.75-.34-.75-.75V2.75c-.01-.42.33-.75.75-.75s.75.34.75.75v18.5c-.01.41-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1M5.1 10.75h6.8c1.5 0 2.1-.64 2.1-2.23M5.1 5.25h6.8M5 1.988v20",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19.38 15.98v1.04c0 1.59-.6 2.23-2.12 2.23H5.38v-5.5h11.88c1.52 0 2.12.64 2.12 2.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M14.38 7.48v1.04c0 1.59-.61 2.23-2.12 2.23H5.38v-5.5h6.88c1.51 0 2.12.64 2.12 2.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.38 22c-.41 0-.75-.34-.75-.75V2.75c-.01-.42.33-.75.75-.75s.75.34.75.75v18.5c-.01.41-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1M5.1 5.25h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23H5.1M5 1.99v20",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.9 20H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.8c1.01 0 1.35-.21 1.35-1.48v-1.04c0-1.27-.34-1.48-1.35-1.48H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98ZM11.9 11.5H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.8c1.01 0 1.35-.21 1.35-1.48V7.48c0-1.27-.34-1.48-1.35-1.48H5.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 22.738c-.41 0-.75-.34-.75-.75v-20c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1M5.1 5.25h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23H5.1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 1.988v20",
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

var AlignLeft = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
AlignLeft.displayName = 'AlignLeft';

export { AlignLeft as default };
