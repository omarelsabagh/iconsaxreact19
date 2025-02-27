import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.25 12c0-.41.34-.75.75-.75h3V7.5c0-.55-.45-1-1-1H7.77C4.62 6.5 1.88 9.08 2 12.22a5.5 5.5 0 0 0 1.61 3.67c1 .99 2.37 1.61 3.89 1.61H10c.55 0 1-.45 1-1v-3.75H8c-.41 0-.75-.34-.75-.75ZM20.39 8.11c-1-.99-2.37-1.61-3.89-1.61H14c-.55 0-1 .45-1 1v3.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3v3.75c0 .55.45 1 1 1h2.23c3.15 0 5.89-2.58 5.76-5.72a5.49 5.49 0 0 0-1.6-3.67ZM13 11.25h-2v1.5h2v-1.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.988 17.5h1.51c3.02 0 5.5-2.47 5.5-5.5 0-3.02-2.47-5.5-5.5-5.5h-1.51M2.37 10.012c-.24.62-.37 1.29-.37 1.99 0 3.02 2.47 5.5 5.5 5.5H9M9 6.5H7.5c-.83 0-1.61.18-2.32.51M8 12h8",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15.408 18.592c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73 2.82 0 5.12-2.3 5.12-5.12 0-2.82-2.3-5.12-5.12-5.12a5.13 5.13 0 0 0-5.12 5.12c0 .4-.33.73-.73.73-.4 0-.73-.33-.73-.73 0-3.63 2.95-6.59 6.59-6.59 3.64 0 6.58 2.95 6.58 6.58s-2.95 6.59-6.59 6.59Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M22 12a6.59 6.59 0 0 1-6.59 6.59c-1.25 0-2.42-.35-3.41-.96A6.57 6.57 0 0 0 15.17 12 6.57 6.57 0 0 0 12 6.37c1-.6 2.17-.96 3.41-.96A6.59 6.59 0 0 1 22 12Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.59 5.41c.4 0 .73.33.73.73 0 .4-.33.73-.73.73a5.13 5.13 0 0 0-5.12 5.12c0 2.82 2.3 5.12 5.12 5.12 2.82 0 5.12-2.3 5.12-5.12 0-.4.33-.73.73-.73.4 0 .73.33.73.73 0 3.63-2.95 6.59-6.59 6.59C4.94 18.58 2 15.63 2 12s2.95-6.59 6.59-6.59Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".5",
    d: "M15.17 12A6.57 6.57 0 0 1 12 17.63c-1 .6-2.17.96-3.41.96A6.59 6.59 0 0 1 2 12a6.59 6.59 0 0 1 6.59-6.59c1.24 0 2.41.36 3.41.96A6.57 6.57 0 0 1 15.17 12Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.99 21.501c-1.66 0-3.33-.63-4.6-1.9-2.53-2.54-2.53-6.66 0-9.19.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06a5.003 5.003 0 0 0 0 7.07 5.003 5.003 0 0 0 7.07 0c.94-.94 1.46-2.2 1.46-3.54 0-1.33-.52-2.59-1.46-3.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a6.45 6.45 0 0 1 1.9 4.6c0 1.74-.68 3.37-1.9 4.6a6.432 6.432 0 0 1-4.59 1.9Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.068 14.158c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c2.05-2.05 2.05-5.38 0-7.42-2.05-2.05-5.38-2.05-7.42 0a5.22 5.22 0 0 0-1.54 3.71c0 1.4.55 2.72 1.54 3.71.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a6.719 6.719 0 0 1-1.98-4.77c0-1.8.7-3.5 1.98-4.77 2.63-2.63 6.91-2.63 9.55 0 2.63 2.63 2.63 6.92 0 9.55-.15.14-.35.21-.54.21Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6",
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

var Link2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Link2.displayName = 'Link2';

export { Link2 as default };
