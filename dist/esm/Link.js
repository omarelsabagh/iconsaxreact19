import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.5 14.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-5c-2.62 0-4.75 2.13-4.75 4.75 0 1.1.39 2.17 1.09 3.02.26.32.22.79-.1 1.06-.32.26-.79.22-1.06-.1A6.283 6.283 0 0 1 1.25 8.5c0-3.45 2.8-6.25 6.25-6.25h5c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 21.75h-5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h5c2.62 0 4.75-2.13 4.75-4.75 0-1.1-.39-2.17-1.09-3.02a.758.758 0 0 1 .1-1.06.75.75 0 0 1 1.06.1 6.236 6.236 0 0 1 1.44 3.98c-.01 3.45-2.81 6.25-6.26 6.25Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.27 12A5.46 5.46 0 0 1 2 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.98 21h-.48C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14M20.73 12A5.46 5.46 0 0 1 22 15.5c0 3.02-2.47 5.5-5.5 5.5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.498 14.75h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-5c-2.62 0-4.75 2.13-4.75 4.75 0 1.1.39 2.17 1.09 3.02.26.32.22.79-.1 1.06-.32.26-.79.22-1.06-.1a6.236 6.236 0 0 1-1.44-3.98c0-3.45 2.8-6.25 6.25-6.25h5c3.45 0 6.25 2.8 6.25 6.25s-2.79 6.25-6.24 6.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M16.5 21.75h-5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h5c2.62 0 4.75-2.13 4.75-4.75 0-1.1-.39-2.17-1.09-3.02a.758.758 0 0 1 .1-1.06.75.75 0 0 1 1.06.1 6.236 6.236 0 0 1 1.44 3.98c-.01 3.45-2.81 6.25-6.26 6.25Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.27 12A5.46 5.46 0 0 1 2 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.73 12A5.46 5.46 0 0 1 22 15.5c0 3.02-2.47 5.5-5.5 5.5h-5C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.75 18.5c-3.58 0-6.5-2.92-6.5-6.5s2.92-6.5 6.5-6.5c.41 0 .75.34.75.75S8.16 7 7.75 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5c0-.41.34-.75.75-.75s.75.34.75.75c0 3.58-2.92 6.5-6.5 6.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 18.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.89 0 5.25-2.36 5.25-5.25S18.89 6.75 16 6.75 10.75 9.11 10.75 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-3.72 3.03-6.75 6.75-6.75s6.75 3.03 6.75 6.75-3.03 6.75-6.75 6.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.27 12A5.46 5.46 0 0 1 2 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M20.73 12A5.46 5.46 0 0 1 22 15.5c0 3.02-2.47 5.5-5.5 5.5h-5C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14",
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

var Link = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Link.displayName = 'Link';

export { Link as default };
