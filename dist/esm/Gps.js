import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 11.25h-2.04c-.36-3.81-3.4-6.86-7.21-7.21V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.04c-3.81.36-6.86 3.4-7.21 7.21H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.04c.36 3.81 3.4 6.86 7.21 7.21V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.04c3.81-.36 6.86-3.4 7.21-7.21H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-10 3.87c-1.72 0-3.12-1.4-3.12-3.12 0-1.72 1.4-3.12 3.12-3.12 1.72 0 3.12 1.4 3.12 3.12 0 1.72-1.4 3.12-3.12 3.12Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 5.365A7.5 7.5 0 1 1 5.365 8.5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 4V2M4 12H2M12 20v2M20 12h2",
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
    d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.999 15.119a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24ZM12.75 2v2.04h-.01C12.5 4.01 12.25 4 12 4s-.5.01-.74.04h-.01V2c0-.41.34-.75.75-.75s.75.34.75.75ZM4 12c0 .25.01.51.04.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.04c-.03.24-.04.5-.04.75ZM12.75 19.96V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.04h.01c.24.03.49.04.74.04s.5-.01.74-.04h.01ZM22.75 12c0 .41-.34.75-.75.75h-2.04c.03-.24.04-.5.04-.75s-.01-.51-.04-.75H22c.41 0 .75.34.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 4V2M4 12H2M12 20v2M20 12h2",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 20.25c-4.55 0-8.25-3.7-8.25-8.25S7.45 3.75 12 3.75s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25Zm0-15c-3.72 0-6.75 3.03-6.75 6.75s3.03 6.75 6.75 6.75 6.75-3.03 6.75-6.75S15.72 5.25 12 5.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12 15a3 3 0 100-6 3 3 0 000 6zM12 4V2M4 12H2M12 20v2M20 12h2",
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

var Gps = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Gps.displayName = 'Gps';

export { Gps as default };
