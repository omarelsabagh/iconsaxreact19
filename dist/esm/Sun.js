import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 3.75h1.25V8.5c0 .41.34.75.75.75s.75-.34.75-.75V3.75H14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75ZM14 20.25h-1.25V15.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.75H10c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM2.83 9.879c.12.07.25.1.37.1.26 0 .51-.13.65-.38l.63-1.08 4.12 2.38c.11.07.24.1.37.1.26 0 .51-.13.65-.38.21-.35.08-.81-.27-1.02l-4.12-2.38.62-1.08c.21-.36.08-.82-.27-1.02a.738.738 0 0 0-1.02.27l-2 3.46a.75.75 0 0 0 .27 1.03ZM21.169 14.121a.738.738 0 0 0-1.02.27l-.63 1.08-4.12-2.37a.746.746 0 0 0-.75 1.29l4.11 2.38-.62 1.08a.746.746 0 0 0 .64 1.12c.26 0 .51-.13.65-.38l2-3.46c.22-.35.1-.8-.26-1.01ZM18.77 7.22 14.65 9.6c-.36.21-.48.67-.27 1.02.14.24.39.38.65.38.13 0 .26-.03.37-.1l4.11-2.38.63 1.08c.14.24.39.38.65.38.13 0 .26-.03.37-.1.36-.21.48-.67.27-1.02l-2-3.46a.742.742 0 0 0-1.02-.27c-.36.21-.48.67-.27 1.02l.63 1.07ZM5.23 16.781l4.11-2.38c.36-.21.48-.67.27-1.02a.742.742 0 0 0-1.02-.27l-4.11 2.38-.63-1.08a.742.742 0 0 0-1.02-.27c-.36.21-.48.67-.27 1.02l2 3.46c.14.24.39.38.65.38.13 0 .26-.03.37-.1.36-.21.48-.67.27-1.02l-.62-1.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 8V6.5M12 4V3M12 21v-5.5M10 3h4M10 21h4M8.97 10.25 4.21 7.5M19.791 16.5l-4.76-2.75M3.21 9.23l2-3.46M18.79 18.23l2-3.46M8.97 13.75A3.47 3.47 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 0 7",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.791 7.5-2.74 1.58-2.02 1.17M8.97 13.75 4.21 16.5M20.79 9.23l-2-3.46M5.21 18.23l-2-3.46",
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
    d: "M10 3.75h1.25V8.5c0 .41.34.75.75.75s.75-.34.75-.75V3.75H14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75ZM14 20.25h-1.25V15.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.75H10c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM2.831 9.879c.12.07.25.1.37.1.26 0 .51-.13.65-.38l.63-1.08 4.12 2.38c.11.07.24.1.37.1.26 0 .51-.13.65-.38.21-.36.08-.82-.27-1.02l-4.11-2.38.62-1.08c.21-.36.08-.82-.27-1.02a.738.738 0 0 0-1.02.27l-2 3.46c-.22.37-.1.82.26 1.03ZM21.169 14.121a.738.738 0 0 0-1.02.27l-.63 1.08-4.12-2.37a.746.746 0 0 0-.75 1.29l4.11 2.38-.62 1.08a.746.746 0 0 0 .64 1.12c.26 0 .51-.13.65-.38l2-3.46c.22-.35.1-.8-.26-1.01ZM18.768 7.22l-4.11 2.38c-.36.21-.48.67-.27 1.02.14.24.39.38.65.38.13 0 .26-.03.37-.1l4.11-2.38.63 1.08c.14.24.39.38.65.38.13 0 .26-.03.37-.1.36-.21.48-.67.27-1.02l-2-3.46a.742.742 0 0 0-1.02-.27c-.36.21-.48.67-.27 1.02l.62 1.07ZM5.23 16.781l4.11-2.38c.36-.21.48-.67.27-1.02a.742.742 0 0 0-1.02-.27l-4.11 2.38-.63-1.08a.742.742 0 0 0-1.02-.27c-.36.21-.48.67-.27 1.02l2 3.46c.14.24.39.38.65.38.13 0 .26-.03.37-.1.36-.21.48-.67.27-1.02l-.62-1.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 8.5V3M12 21v-5.5M10 3h4M10 21h4M8.97 10.25 4.21 7.5M19.79 16.5l-4.76-2.75M3.21 9.23l2-3.46M18.79 18.23l2-3.46M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5ZM19.79 7.5l-4.76 2.75M8.97 13.75 4.21 16.5M20.79 9.23l-2-3.46M5.21 18.23l-2-3.46",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 9.25c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v5.5c0 .41-.34.75-.75.75ZM12 21.75c-.41 0-.75-.34-.75-.75v-5.5c0-.41.34-.75.75-.75s.75.34.75.75V21c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 21.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.972 11.001c-.13 0-.26-.03-.37-.1l-4.76-2.75a.742.742 0 0 1-.27-1.02c.21-.36.67-.48 1.02-.27l4.76 2.75a.746.746 0 0 1-.38 1.39ZM19.788 17.251c-.13 0-.26-.03-.37-.1l-4.76-2.75a.742.742 0 0 1-.27-1.02c.21-.36.67-.48 1.02-.27l4.76 2.75a.746.746 0 0 1-.38 1.39Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.212 9.98c-.13 0-.26-.03-.37-.1a.742.742 0 0 1-.27-1.02l2-3.46c.21-.36.67-.48 1.02-.27.36.21.48.67.27 1.02l-2 3.46c-.14.24-.4.37-.65.37ZM18.79 18.98c-.13 0-.26-.03-.37-.1a.742.742 0 0 1-.27-1.02l2-3.46c.21-.36.67-.48 1.02-.27.36.21.48.67.27 1.02l-2 3.46c-.13.24-.39.37-.65.37ZM12 16.252c-1.51 0-2.92-.81-3.68-2.12-.38-.66-.57-1.37-.57-2.13 0-.76.19-1.47.57-2.12A4.266 4.266 0 0 1 12 7.762c1.51 0 2.92.81 3.68 2.12.38.66.57 1.37.57 2.13 0 .76-.19 1.47-.57 2.12a4.266 4.266 0 0 1-3.68 2.12Zm0-7a2.755 2.755 0 0 0 0 5.51 2.755 2.755 0 0 0 0-5.51Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.028 11.001c-.26 0-.51-.13-.65-.38a.746.746 0 0 1 .27-1.02l4.76-2.75a.746.746 0 0 1 .75 1.29l-4.76 2.75c-.11.08-.24.11-.37.11ZM4.212 17.251c-.26 0-.51-.13-.65-.38a.746.746 0 0 1 .27-1.02l4.76-2.75a.746.746 0 0 1 .75 1.29l-4.76 2.75c-.11.08-.24.11-.37.11Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.79 9.98c-.26 0-.51-.13-.65-.38l-2-3.46a.746.746 0 0 1 1.29-.75l2 3.46c.21.36.08.82-.27 1.02-.11.08-.24.11-.37.11ZM5.212 18.98c-.26 0-.51-.13-.65-.38l-2-3.46a.746.746 0 0 1 1.29-.75l2 3.46c.21.36.08.82-.27 1.02a.66.66 0 0 1-.37.11Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 8.5V3M12 21v-5.5M10 3h4M10 21h4M8.97 10.25 4.21 7.5M19.791 16.5l-4.76-2.75M3.21 9.23l2-3.46M18.79 18.23l2-3.46M19.791 7.5l-4.76 2.75M8.97 13.75 4.21 16.5M20.79 9.23l-2-3.46M5.21 18.23l-2-3.46"
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

var Sun = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Sun.displayName = 'Sun';

export { Sun as default };
