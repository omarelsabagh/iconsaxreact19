import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.017 7.992c.398.566-.076 1.258-.769 1.258H3a1 1 0 0 1-1-1V6.42C2 3.98 3.98 2 6.42 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.805 0 3.402.897 4.367 2.272ZM21.983 11.747a1 1 0 0 0-1-.997H3a1 1 0 0 0-1 1v4.9C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65l-.017-4.903ZM14.54 16.97l-2.15 1.88a.578.578 0 0 1-.78 0l-2.15-1.88c-.68-.6-.77-1.62-.2-2.33.57-.72 1.6-.85 2.34-.3l.4.3.4-.3c.74-.55 1.77-.42 2.34.3.57.71.48 1.73-.2 2.33Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m9.2 14.78 2.58 2.26c.12.11.31.11.43 0l2.58-2.26c.67-.59.76-1.59.2-2.29s-1.58-.83-2.29-.29l-.7.54-.71-.53c-.72-.54-1.73-.41-2.29.29-.56.69-.47 1.7.2 2.28Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5M22 14.988v2.01c0 4-1 5-5 5H7c-4 0-5-1-5-5",
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
    d: "M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.99 10.841c-.02-.49-.1-.95-.25-1.4H2v7.21c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58c0-.07 0-.16-.01-.23Zm-7.45 5.13-2.15 1.88a.578.578 0 0 1-.78 0l-2.15-1.88c-.68-.6-.77-1.62-.21-2.33.58-.72 1.6-.85 2.34-.3l.4.3.4-.3a1.69 1.69 0 0 1 2.34.3c.58.71.49 1.73-.19 2.33Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m9.2 14.78 2.58 2.26c.12.11.31.11.43 0l2.58-2.26c.67-.59.76-1.59.2-2.29s-1.58-.83-2.29-.29l-.7.54-.71-.53c-.72-.54-1.73-.41-2.29.29-.56.69-.47 1.7.2 2.28Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.998 17.881c-.25 0-.51-.09-.71-.27l-2.58-2.26c-.97-.85-1.1-2.31-.29-3.32a2.4 2.4 0 0 1 3.33-.42l.25.19.26-.2a2.4 2.4 0 0 1 3.33.42c.81 1.01.68 2.47-.29 3.32l-2.58 2.26c-.21.19-.47.28-.72.28Zm-2.31-3.66 2.31 2.02 2.31-2.02c.37-.32.42-.87.11-1.25a.903.903 0 0 0-1.26-.16l-.71.53c-.27.2-.63.2-.9 0l-.71-.53a.904.904 0 0 0-1.26.16c-.3.38-.25.93.11 1.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75Zm-10-20c-3.58 0-4.25.68-4.25 4.25v10c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-6c0-3.57-.67-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.68-.9-1.8-.9H7Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "m9.2 14.78 2.58 2.26c.12.11.31.11.43 0l2.58-2.26c.67-.59.76-1.59.2-2.29s-1.58-.83-2.29-.29l-.7.54-.71-.53c-.72-.54-1.73-.41-2.29.29-.56.69-.47 1.7.2 2.28Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
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

var FolderFavorite = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
FolderFavorite.displayName = 'FolderFavorite';

export { FolderFavorite as default };
