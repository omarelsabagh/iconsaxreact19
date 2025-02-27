import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 2H8C5.24 2 3 4.24 3 7v10c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5ZM8.86 18.63c-.19.19-.44.29-.7.29a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.09-.09.2-.16.32-.21.25-.1.52-.1.77 0 .06.02.12.05.17.09.06.03.11.08.15.12.19.19.3.45.3.71a1 1 0 0 1-.3.71Zm-1.71-4.71c0-.13.03-.26.08-.38A.998.998 0 0 1 8.54 13c.06.02.12.05.17.09.06.03.11.08.15.12.09.1.17.2.22.33.05.12.07.25.07.38a.99.99 0 0 1-1.38.92 1 1 0 0 1-.62-.92Zm5.71 4.71c-.09.09-.2.16-.32.21a.984.984 0 0 1-1.09-.21 1 1 0 0 1-.3-.71c0-.07.01-.13.02-.2l.06-.18.09-.18c.04-.05.08-.1.13-.15a1.017 1.017 0 0 1 1.41 0c.19.19.29.45.29.71 0 .27-.1.52-.29.71Zm0-4a.99.99 0 0 1-.71.29c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .09.1.17.2.22.33.05.12.07.25.07.38 0 .27-.1.52-.29.71ZM9 10.46c-1.03 0-1.88-.84-1.88-1.88v-1c0-1.03.84-1.88 1.88-1.88h6c1.03 0 1.88.84 1.88 1.88v1c0 1.03-.84 1.88-1.88 1.88H9Zm7.86 8.17a.99.99 0 0 1-1.09.21.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71c0-.26.1-.52.29-.71.27-.28.72-.36 1.09-.21.12.05.23.12.32.21.19.19.29.45.29.71 0 .27-.1.52-.29.71Zm.22-4.33a.99.99 0 0 1-.93.62c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71 0 .13-.03.26-.08.38Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12.97V15c0 5 2 7 7 7h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 7.578v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.136 14h.012M11.995 14h.012M15.855 14h.011M8.136 17.5h.012M11.995 17.5h.012M15.855 17.5h.011",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M8 22h8c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H8C5.24 2 3 4.24 3 7v10c0 2.76 2.24 5 5 5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.001 5.71h-6c-1.03 0-1.88.84-1.88 1.88v1c0 1.03.84 1.88 1.88 1.88h6c1.03 0 1.88-.84 1.88-1.88v-1c0-1.04-.84-1.88-1.88-1.88ZM8.158 14.919c-.14 0-.27-.03-.39-.08a1 1 0 0 1-.62-.92c0-.13.03-.26.08-.38a.998.998 0 0 1 1.31-.54c.06.02.12.05.17.09.06.03.11.08.15.12.09.1.17.2.22.33.05.12.07.25.07.38a.99.99 0 0 1-.99 1ZM12.148 14.921c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .09.1.17.2.22.33.05.12.07.25.07.38a.99.99 0 0 1-1 1ZM16.148 14.921c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71 0 .13-.03.26-.08.38s-.12.23-.22.33a.99.99 0 0 1-.71.29ZM8.158 18.92a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.09-.09.2-.16.32-.21.25-.1.52-.1.77 0 .06.02.12.05.17.09.06.03.11.08.15.12.19.19.3.45.3.71a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29ZM12.148 18.92c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.07.01-.13.02-.2l.06-.18.09-.18c.04-.05.08-.1.13-.15a1.017 1.017 0 0 1 1.41 0c.19.19.29.45.29.71 0 .27-.1.52-.29.71-.09.09-.2.16-.32.21-.12.05-.25.08-.39.08ZM16.15 18.92c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71c0-.26.1-.52.29-.71.27-.28.72-.36 1.09-.21.12.05.23.12.32.21.19.19.29.45.29.71a.99.99 0 0 1-1 1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.136 14h.012M11.995 14h.012M15.854 14h.012M8.136 17.5h.012M11.995 17.5h.012M15.854 17.5h.012",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 22.75h-4c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-4-20C5.39 2.75 3.75 4.39 3.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-4Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 10.828H9c-1.24 0-2.25-1.01-2.25-2.25v-1c0-1.24 1.01-2.25 2.25-2.25h6c1.24 0 2.25 1.01 2.25 2.25v1c0 1.24-1.01 2.25-2.25 2.25Zm-6-4c-.41 0-.75.34-.75.75v1c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-1c0-.41-.34-.75-.75-.75H9ZM8.15 14.919c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71.986.986 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.998.998 0 0 1 1.31.54c.05.12.08.25.08.38a1 1 0 0 1-.3.71.99.99 0 0 1-.71.29ZM12.16 14.922a.99.99 0 0 1-1-1 .986.986 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.972.972 0 0 1 .77 0c.12.05.23.12.32.21.09.1.17.2.22.33.05.12.08.25.08.38a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29ZM16.15 14.921c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.54-.54.986.986 0 0 1-.07-.38.986.986 0 0 1 .29-.71c.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71a1 1 0 0 1-.3.71c-.18.18-.43.29-.71.29ZM8.158 18.919a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71 1.017 1.017 0 0 1 .45-.83c.05-.04.11-.07.17-.09.06-.03.13-.05.19-.06.33-.06.67.04.9.27.05.05.09.1.13.15l.09.18.06.18c.01.07.02.13.02.2a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29ZM12.158 18.919a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.23-.23.58-.33.9-.27.06.01.13.03.19.06.06.02.12.05.17.09.05.03.1.08.15.12.19.19.29.45.29.71a.99.99 0 0 1-.99 1ZM16.15 18.92a.99.99 0 0 1-.99-1c0-.26.1-.52.29-.71.09-.09.2-.16.32-.21.37-.15.82-.07 1.09.21.19.19.29.45.29.71 0 .27-.1.52-.29.71-.09.09-.2.16-.32.21-.12.05-.25.08-.39.08Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M16.5 7.578v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M8.136 14h.012M11.995 14h.012M15.855 14h.011M8.136 17.5h.012M11.995 17.5h.012M15.855 17.5h.011",
    stroke: color,
    strokeWidth: "2",
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

var Calculator = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Calculator.displayName = 'Calculator';

export { Calculator as default };
