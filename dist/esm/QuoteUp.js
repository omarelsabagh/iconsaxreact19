import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.09 11.631H3.4c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.687.687 0 0 0-.95-.24c-3.38 2-4.56 3.22-4.56 9.03v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c0-1.75-1.33-3.08-3.09-3.08ZM18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.368 18.14c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12.352h5.8c.96 0 1.72.45 2.16 1.14M2 12.351c0-6.05 1.13-7.05 4.53-9.07M13.629 12.352h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8M13.629 12.351c0-6.05 1.13-7.05 4.53-9.07",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.088 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12.35h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58H4.58C3.16 20.73 2 19.57 2 18.15v-5.8",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12.35C2 6.3 3.13 5.3 6.53 3.28M13.63 12.35h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.63 12.35c0-6.05 1.13-7.05 4.53-9.07",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.8 21.47H4.58c-1.83 0-3.33-1.49-3.33-3.33v-5.8c0-.41.34-.75.75-.75h5.8c1.9 0 3.33 1.43 3.33 3.33v3.22c-.01 1.9-1.44 3.33-3.33 3.33ZM2.75 13.1v5.05c0 1.01.82 1.83 1.83 1.83H7.8c1.06 0 1.83-.77 1.83-1.83v-3.22c0-1.06-.77-1.83-1.83-1.83H2.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 13.099c-.41 0-.75-.34-.75-.75 0-6.25 1.27-7.56 4.9-9.71.36-.21.82-.09 1.03.26.21.36.09.82-.26 1.03-3.24 1.92-4.17 2.72-4.17 8.42 0 .41-.34.75-.75.75ZM19.421 21.47h-3.22c-1.83 0-3.33-1.49-3.33-3.33v-5.8c0-.41.34-.75.75-.75h5.8c1.9 0 3.33 1.43 3.33 3.33v3.22c0 1.9-1.43 3.33-3.33 3.33Zm-5.04-8.37v5.05c0 1.01.82 1.83 1.83 1.83h3.22c1.06 0 1.83-.77 1.83-1.83v-3.22c0-1.06-.77-1.83-1.83-1.83h-5.05Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.629 13.099c-.41 0-.75-.34-.75-.75 0-6.25 1.27-7.56 4.9-9.71.36-.21.82-.09 1.03.26.21.36.09.82-.26 1.03-3.24 1.92-4.17 2.72-4.17 8.42 0 .41-.34.75-.75.75Z",
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
    d: "M2 12.352h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58H4.58c-1.42 0-2.58-1.16-2.58-2.58v-5.8M2 12.351c0-6.05 1.13-7.05 4.53-9.07"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M13.629 12.352h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8M13.629 12.351c0-6.05 1.13-7.05 4.53-9.07",
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

var QuoteUp = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
QuoteUp.displayName = 'QuoteUp';

export { QuoteUp as default };
