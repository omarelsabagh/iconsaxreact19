import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM11.5 17.25c0 .36-.36.6-.69.46-1.21-.52-2.79-1-3.89-1.14l-.19-.02c-.61-.08-1.11-.65-1.11-1.27v-7.7c0-.77.62-1.34 1.38-1.28 1.25.1 3.1.7 4.26 1.36.16.09.24.26.24.43v9.16Zm6.88-1.98c0 .62-.5 1.19-1.11 1.27l-.21.02c-1.09.15-2.66.62-3.87 1.13-.33.14-.69-.1-.69-.46V8.08a.5.5 0 0 1 .25-.44c1.16-.65 2.97-1.23 4.2-1.34h.04c.77 0 1.39.62 1.39 1.39v7.58Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.38 15.271v-7.69c0-.77-.62-1.33-1.38-1.27h-.04c-1.34.11-3.37.8-4.51 1.51l-.11.07c-.18.11-.49.11-.68 0l-.16-.1c-1.13-.71-3.16-1.38-4.5-1.49-.76-.06-1.38.51-1.38 1.27v7.7c0 .61.5 1.19 1.11 1.26l.18.03c1.38.18 3.52.89 4.74 1.56l.03.01c.17.1.45.1.61 0 1.22-.68 3.37-1.38 4.76-1.57l.21-.03c.62-.07 1.12-.64 1.12-1.26ZM12 8.102v9.56",
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
    d: "M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 8.089v9.16c0 .36-.36.6-.69.46-1.21-.52-2.79-1-3.89-1.14l-.19-.02c-.61-.08-1.11-.65-1.11-1.27v-7.7c0-.76.62-1.33 1.38-1.27 1.25.1 3.1.7 4.26 1.36.15.07.24.24.24.42ZM18.38 7.7v7.57c0 .62-.5 1.19-1.11 1.27l-.21.02c-1.09.15-2.66.62-3.87 1.13-.33.14-.69-.1-.69-.46V8.08a.5.5 0 0 1 .25-.44c1.16-.65 2.97-1.23 4.2-1.34h.04c.77.01 1.39.63 1.39 1.4Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.38 15.27V7.58c0-.77-.62-1.33-1.38-1.27h-.04c-1.34.11-3.37.8-4.51 1.51l-.11.07c-.18.11-.49.11-.68 0l-.16-.1C10.37 7.08 8.34 6.41 7 6.3c-.76-.06-1.38.51-1.38 1.27v7.7c0 .61.5 1.19 1.11 1.26l.18.03c1.38.18 3.52.89 4.74 1.56l.03.01c.17.1.45.1.61 0 1.22-.68 3.37-1.38 4.76-1.57l.21-.03c.62-.07 1.12-.64 1.12-1.26ZM12 8.1v9.56",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.001 18.95c-.24 0-.48-.06-.68-.17-1.16-.63-3.21-1.31-4.5-1.48l-.19-.03c-.98-.12-1.76-1-1.76-2.01v-7.7c0-.57.24-1.12.65-1.5.42-.38.96-.57 1.54-.52 1.46.12 3.58.82 4.83 1.6l.1.06.04-.03c1.26-.79 3.38-1.5 4.85-1.63h.1c.52-.05 1.08.15 1.49.52.42.38.65.91.65 1.49v7.69c0 1-.78 1.88-1.77 2.01l-.21.03c-1.28.17-3.34.85-4.48 1.48-.19.14-.42.19-.66.19Zm-5.11-11.9a.52.52 0 0 0-.35.13c-.11.1-.16.24-.16.39v7.7c0 .24.22.49.45.52l.19.03c1.46.2 3.7.93 5 1.64 1.21-.7 3.46-1.45 4.93-1.64l.22-.03c.23-.03.45-.28.45-.52V7.58c0-.16-.06-.29-.16-.39a.536.536 0 0 0-.41-.13h-.1c-1.16.1-3.07.74-4.11 1.4l-.1.06c-.44.27-1.06.27-1.48.01l-.15-.09c-1.05-.66-2.96-1.29-4.17-1.39h-.05Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18.412c-.41 0-.75-.34-.75-.75v-9.56c0-.41.34-.75.75-.75s.75.34.75.75v9.56c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M18.381 15.271v-7.69c0-.77-.62-1.33-1.38-1.27h-.04c-1.34.11-3.37.8-4.51 1.51l-.11.07c-.18.11-.49.11-.68 0l-.16-.1c-1.13-.71-3.16-1.38-4.5-1.49-.76-.06-1.38.51-1.38 1.27v7.7c0 .61.5 1.19 1.11 1.26l.18.03c1.38.18 3.52.89 4.74 1.56l.03.01c.17.1.45.1.61 0 1.22-.68 3.37-1.38 4.76-1.57l.21-.03c.62-.07 1.12-.64 1.12-1.26ZM12 8.102v9.56"
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

var BookSquare = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BookSquare.displayName = 'BookSquare';

export { BookSquare as default };
