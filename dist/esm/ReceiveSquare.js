import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-7.72 8.98c.29-.29.77-.29 1.06 0l1.72 1.72V6.51c0-.41.34-.75.75-.75s.75.34.75.75v6.19l1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3a.776.776 0 01-.53.22.753.753 0 01-.53-.22l-3-3a.754.754 0 010-1.06zm9.77 6.24c-2.01.67-4.12 1.01-6.24 1.01s-4.23-.34-6.24-1.01a.753.753 0 01-.47-.95c.13-.39.55-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.12.4-.09.82-.48.95z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 11.51l3 3 3-3M12 14.51v-8M6 16.51c3.89 1.3 8.11 1.3 12 0"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M11.471 15.04a.776.776 0 00.53.22.753.753 0 00.53-.22l3-3c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-1.72 1.72V6.51c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.19l-1.72-1.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3 3zM18.71 16.28a.749.749 0 00-.95-.47 18.333 18.333 0 01-11.53 0 .753.753 0 00-.95.47c-.13.39.08.82.47.95 2.01.67 4.12 1.01 6.24 1.01s4.23-.34 6.24-1.01c.4-.14.61-.56.48-.95z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 11.51l3 3 3-3M12 14.51v-8M6 16.51c3.89 1.3 8.11 1.3 12 0"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 15.26c-.19 0-.38-.07-.53-.22l-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 13.45l2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12 15.26c-.41 0-.75-.34-.75-.75v-8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .42-.34.75-.75.75zM12 18.23c-2.11 0-4.23-.34-6.24-1.01a.753.753 0 01-.47-.95c.13-.39.55-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.13.39-.08.82-.47.95-2.02.68-4.14 1.01-6.25 1.01z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M9 11.51l3 3 3-3M12 14.51v-8M6 16.51c3.89 1.3 8.11 1.3 12 0"
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

var ReceiveSquare = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ReceiveSquare.displayName = 'ReceiveSquare';

export { ReceiveSquare as default };
