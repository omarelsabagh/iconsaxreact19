import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM17 17.47c-1.71 0-3.31-.74-4.59-2.11-1.45 1.31-3.34 2.11-5.41 2.11-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.47 0 6.34-2.75 6.71-6.27h-6.7c-.41 0-.75-.34-.75-.75s.34-.74.75-.74h4.24v-.93c0-.41.34-.75.75-.75s.75.34.75.75v.93h1.69c.02 0 .04-.01.06-.01.02 0 .04.01.06.01h2.43c.41 0 .75.34.75.75s-.34.75-.75.75h-1.78a8.754 8.754 0 0 1-1.77 4.56c1 1.11 2.25 1.71 3.56 1.71.41 0 .75.34.75.75s-.34.74-.75.74Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.992 8.96h-9.98M12 7.281v1.68M14.5 8.941c0 4.3-3.36 7.78-7.5 7.78",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.72c-1.8 0-3.4-.96-4.55-2.47",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
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
    d: "M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.998 15.97c-1.31 0-2.56-.6-3.56-1.71a8.526 8.526 0 0 0 1.77-4.56h1.78c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.43c-.02 0-.04-.01-.06-.01-.02 0-.04.01-.06.01h-1.69v-.93c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.93h-4.24c-.41 0-.75.34-.75.75s.34.75.75.75h6.69c-.37 3.52-3.23 6.27-6.71 6.27-.41 0-.75.34-.75.75s.34.75.75.75c2.07 0 3.96-.8 5.41-2.11 1.27 1.36 2.88 2.11 4.59 2.11.41 0 .75-.34.75-.75s-.33-.75-.74-.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.99 8.96H7.01M12 7.28v1.68M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.72c-1.8 0-3.4-.96-4.55-2.47",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.988 9.71h-9.98c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.98c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9.711c-.41 0-.75-.34-.75-.75v-1.68c0-.41.34-.75.75-.75s.75.34.75.75v1.68c0 .41-.34.75-.75.75ZM7 17.471c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.72 0 6.75-3.15 6.75-7.03 0-.41.34-.75.75-.75s.75.34.75.75c0 4.71-3.7 8.53-8.25 8.53Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.001 17.47c-1.97 0-3.8-.98-5.14-2.77a.75.75 0 0 1 1.2-.9c1.06 1.4 2.46 2.17 3.95 2.17.41 0 .75.34.75.75s-.35.75-.76.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.988 8.96h-9.98M12 7.281v1.68M14.5 8.941c0 4.3-3.36 7.78-7.5 7.78"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.72c-1.8 0-3.4-.96-4.55-2.47"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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

var LanguageSquare = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
LanguageSquare.displayName = 'LanguageSquare';

export { LanguageSquare as default };
