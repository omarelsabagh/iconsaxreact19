import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Zm-1.6 8.28-3.54 3.54c-.14.14-.4.27-.59.3l-1.35.18c-.49.07-.83-.27-.76-.76l.19-1.35c.03-.19.16-.46.3-.59l3.54-3.54c.61-.61 1.32-.9 2.22 0 .89.9.6 1.61-.01 2.22Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 20.901c-.22 0-.45-.03-.62-.09-2.9-.99-9.38-5.12-9.38-12.12 0-1.4.51-2.68 1.36-3.66M21.49 12.002c.32-1.02.51-2.12.51-3.31 0-3.09-2.49-5.59-5.56-5.59-1.82 0-3.43.88-4.44 2.24a5.53 5.53 0 0 0-4.44-2.24",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.21 15.741-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.84 9.161c-.9-.9-1.61-.61-2.22 0l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.62-.6.91-1.31.01-2.21Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.49 12c.32-1.02.51-2.12.51-3.31 0-3.09-2.49-5.59-5.56-5.59-1.82 0-3.43.88-4.44 2.24A5.53 5.53 0 0 0 7.56 3.1C4.49 3.1 2 5.6 2 8.69c0 7 6.48 11.13 9.38 12.13.17.06.39.09.62.09",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21.652c-.22 0-.55-.02-.86-.13-3.82-1.31-9.89-5.95-9.89-12.83 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.214 6.214 0 0 1 4.44-1.84c3.48 0 6.31 2.84 6.31 6.34 0 1.21-.18 2.4-.54 3.54a.75.75 0 1 1-1.43-.45c.31-.99.47-2.03.47-3.08 0-2.67-2.16-4.84-4.81-4.84-1.52 0-2.93.71-3.84 1.93-.28.38-.92.38-1.2 0a4.756 4.756 0 0 0-3.84-1.93c-2.65 0-4.81 2.17-4.81 4.84 0 6.84 6.57 10.63 8.88 11.42.06.02.2.05.37.05.41 0 .75.34.75.75s-.34.73-.75.73Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.82 22.75c-.38 0-.74-.14-1-.4-.31-.31-.45-.76-.38-1.23l.19-1.35c.05-.35.26-.77.51-1.02l3.54-3.54c.48-.48.95-.73 1.46-.78.63-.06 1.24.2 1.82.78.58.58.84 1.19.78 1.82-.05.5-.31.98-.78 1.46l-3.54 3.54c-.25.25-.66.46-1.01.51l-1.35.19c-.09.01-.16.02-.24.02Zm4.49-6.83h-.03c-.14.01-.33.13-.54.35l-3.54 3.54a.38.38 0 0 0-.08.17l-.18 1.25 1.25-.18c.04-.01.14-.06.17-.09l3.54-3.54c.21-.21.34-.4.35-.54.02-.2-.18-.44-.35-.61-.16-.16-.39-.35-.59-.35Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.92 19.221c-.07 0-.14-.01-.2-.03a3.977 3.977 0 0 1-2.74-2.74c-.11-.4.12-.81.52-.92.4-.11.81.12.93.52.23.82.88 1.47 1.7 1.7.4.11.63.53.52.92-.1.33-.4.55-.73.55Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M21.49 12.002c.32-1.02.51-2.12.51-3.31 0-3.09-2.49-5.59-5.56-5.59-1.82 0-3.43.88-4.44 2.24a5.53 5.53 0 0 0-4.44-2.24c-3.07 0-5.56 2.5-5.56 5.59 0 7 6.48 11.13 9.38 12.13.17.06.39.09.62.09",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.21 15.741-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
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

var HeartEdit = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
HeartEdit.displayName = 'HeartEdit';

export { HeartEdit as default };
