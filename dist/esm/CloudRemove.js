import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 11.531c-2.76 0-5 2.24-5 5 0 .74.16 1.44.46 2.06.08.18.17.35.27.51a4.961 4.961 0 0 0 4.27 2.43c1.82 0 3.41-.98 4.27-2.43.1-.16.19-.33.27-.51.3-.62.46-1.32.46-2.06 0-2.76-2.24-5-5-5Zm1.5 6.61c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.3.29.77 0 1.06Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.2 17.29c-.36.32-.75.59-1.17.81-.36.18-.72-.17-.66-.57.04-.29.06-.59.06-.9 0-3.58-2.92-6.5-6.5-6.5s-6.5 2.92-6.5 6.5c0 .46.05.9.14 1.33.07.35-.2.7-.55.61-3.95-.96-3.97-7.04.45-7.36h.05C2.31 2.29 15.85-1.28 17.4 8.1c4.33.55 6.08 6.32 2.8 9.19Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5.54 11.117c-4.68.33-4.68 7.14 0 7.47h1.92M17.47 8c4.33.55 6.08 6.32 2.8 9.19-1 .91-2.29 1.41-3.64 1.4h-.09M5.589 11.119c-2.53-7.03 5.33-10.74 9.54-7.42M12.97 17.61l-2.11-2.11M12.95 15.52l-2.12 2.12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.531c0 .74-.16 1.44-.46 2.06-.08.18-.17.35-.27.51a4.961 4.961 0 0 1-4.27 2.43c-1.82 0-3.41-.98-4.27-2.43-.1-.16-.19-.33-.27-.51-.3-.62-.46-1.32-.46-2.06 0-2.76 2.24-5 5-5s5 2.24 5 5Z",
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
    d: "M20.27 17.189c-1 .91-2.29 1.41-3.64 1.4h-.09c.3-.62.46-1.32.46-2.06 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 .74.16 1.44.46 2.06H5.54c-4.68-.33-4.68-7.14 0-7.47h.05c-3.21-8.93 10.33-12.5 11.88-3.12 4.33.55 6.08 6.32 2.8 9.19Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11.531c-2.76 0-5 2.24-5 5 0 .74.16 1.44.46 2.06.08.18.17.35.27.51a4.961 4.961 0 0 0 4.27 2.43c1.82 0 3.41-.98 4.27-2.43.1-.16.19-.33.27-.51.3-.62.46-1.32.46-2.06 0-2.76-2.24-5-5-5Zm1.5 6.61c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.3.29.77 0 1.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12.97 17.61-2.11-2.11M12.95 15.52l-2.12 2.12M5.54 11.12c-4.68.33-4.68 7.14 0 7.47h1.92M5.59 11.12C2.38 2.19 15.92-1.38 17.47 8c4.33.55 6.08 6.32 2.8 9.19-1 .91-2.29 1.41-3.64 1.4h-.09",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.53c0 .74-.16 1.44-.46 2.06-.08.18-.17.35-.27.51A4.961 4.961 0 0 1 12 21.53c-1.82 0-3.41-.98-4.27-2.43-.1-.16-.19-.33-.27-.51-.3-.62-.46-1.32-.46-2.06 0-2.76 2.24-5 5-5s5 2.24 5 5Z",
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
    d: "M12.97 18.361c-.19 0-.38-.07-.53-.22l-2.11-2.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.11 2.11c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.83 18.389c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.11-2.11c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.11 2.11a.75.75 0 0 1-.53.22ZM7.46 19.34H5.54c-2.94-.21-4.26-2.47-4.26-4.49s1.32-4.28 4.21-4.48c.4-.04.77.28.8.7.03.42-.28.77-.7.8-1.94.14-2.81 1.6-2.81 2.99 0 1.39.87 2.85 2.81 2.99h1.87c.41 0 .75.34.75.75s-.34.74-.75.74Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.67 19.339h-.05c-.41 0-.79-.34-.79-.75 0-.43.33-.75.74-.75 1.24 0 2.33-.43 3.19-1.2 1.56-1.36 1.66-3.32 1.24-4.7-.42-1.37-1.59-2.94-3.63-3.19a.753.753 0 0 1-.65-.62c-.4-2.4-1.69-4.06-3.65-4.66-2.03-.63-4.38-.01-5.85 1.53-1.43 1.49-1.76 3.58-.93 5.88a.75.75 0 1 1-1.41.51c-1.01-2.82-.55-5.52 1.26-7.42 1.85-1.94 4.82-2.71 7.37-1.93 2.34.72 3.99 2.65 4.59 5.33 2.05.46 3.68 2.01 4.33 4.15.71 2.33.07 4.73-1.67 6.25-1.12 1-2.57 1.57-4.09 1.57Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22.281c-2.01 0-3.89-1.07-4.92-2.8a4.08 4.08 0 0 1-.31-.59c-.34-.71-.52-1.51-.52-2.36 0-3.17 2.58-5.75 5.75-5.75s5.75 2.58 5.75 5.75c0 .85-.18 1.65-.53 2.39-.08.19-.19.39-.31.58a5.741 5.741 0 0 1-4.91 2.78Zm0-10a4.26 4.26 0 0 0-4.25 4.25c0 .62.13 1.21.38 1.73.08.17.15.31.23.44a4.227 4.227 0 0 0 3.63 2.08c1.48 0 2.87-.79 3.62-2.06.09-.15.16-.28.23-.43.27-.55.4-1.13.4-1.76.01-2.34-1.9-4.25-4.24-4.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12.97 17.61-2.11-2.11M12.95 15.52l-2.12 2.12",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.54 11.117c-4.68.33-4.68 7.14 0 7.47h1.92M5.59 11.119c-3.21-8.93 10.33-12.5 11.88-3.12 4.33.55 6.08 6.32 2.8 9.19-1 .91-2.29 1.41-3.64 1.4h-.09"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.531c0 .74-.16 1.44-.46 2.06-.08.18-.17.35-.27.51a4.961 4.961 0 0 1-4.27 2.43c-1.82 0-3.41-.98-4.27-2.43-.1-.16-.19-.33-.27-.51-.3-.62-.46-1.32-.46-2.06 0-2.76 2.24-5 5-5s5 2.24 5 5Z",
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

var CloudRemove = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
CloudRemove.displayName = 'CloudRemove';

export { CloudRemove as default };
