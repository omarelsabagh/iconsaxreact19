import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.25 5.77V9c0 2.115-.707 2.899-2.619 3.007a.48.48 0 0 1-.5-.487v-1.14c0-3.12-1.39-4.51-4.51-4.51h-1.14a.48.48 0 0 1-.487-.5c.107-1.912.892-2.62 3.007-2.62h3.23c2.29 0 3.02.73 3.02 3.02Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.63 10.381v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.52 18.13a.48.48 0 0 1 .487.501c-.108 1.912-.892 2.62-3.007 2.62H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.115.708-2.9 2.62-3.007a.48.48 0 0 1 .5.486v1.14c0 3.12 1.39 4.51 4.51 4.51h1.14Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.73 14.97c-.08-.4-.12-.85-.12-1.36v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.69 0 3.77 1.08 3.77 3.77v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77ZM12.77 17.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85",
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
    d: "M21.25 5.77V9c0 2.29-.73 3.02-3.02 3.02h-.1v-1.64c0-3.12-1.39-4.51-4.51-4.51h-1.64v-.1c0-2.29.73-3.02 3.02-3.02h3.23c2.29 0 3.02.73 3.02 3.02Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.63 10.381v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12.02 18.13v.1c0 2.29-.73 3.02-3.02 3.02H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.29.73-3.02 3.02-3.02h.1v1.64c0 3.12 1.39 4.51 4.51 4.51h1.64Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.38 10.38v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23c-2.69 0-3.77-1.08-3.77-3.77v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.7.01 3.77 1.08 3.77 3.77z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77zM2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85v2.38c0 2.69 1.08 3.77 3.77 3.77h2.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13.621 18.13h-3.23c-3.13 0-4.52-1.39-4.52-4.52v-3.23c0-3.13 1.39-4.52 4.52-4.52h3.23c3.13 0 4.52 1.39 4.52 4.52v3.23c-.01 3.13-1.4 4.52-4.52 4.52Zm-3.24-10.76c-2.29 0-3.02.73-3.02 3.02v3.23c0 2.29.73 3.02 3.02 3.02h3.23c2.29 0 3.02-.73 3.02-3.02v-3.23c0-2.29-.73-3.02-3.02-3.02h-3.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.23 13.52h-.85c-.41 0-.75-.34-.75-.75v-2.38c0-2.29-.73-3.02-3.02-3.02h-2.38c-.41 0-.75-.34-.75-.75v-.85c0-3.13 1.39-4.52 4.52-4.52h3.23c3.13 0 4.52 1.39 4.52 4.52V9c0 3.13-1.39 4.52-4.52 4.52Zm-.1-1.5h.1c2.29 0 3.02-.73 3.02-3.02V5.77c0-2.29-.73-3.02-3.02-3.02H15c-2.29 0-3.02.73-3.02 3.02v.1h1.63c3.13 0 4.52 1.39 4.52 4.52v1.63ZM9 22.75H5.77c-3.13 0-4.52-1.39-4.52-4.52V15c0-3.13 1.39-4.52 4.52-4.52h.85c.41 0 .75.34.75.75v2.38c0 2.29.73 3.02 3.02 3.02h2.38c.41 0 .75.34.75.75v.85c0 3.13-1.39 4.52-4.52 4.52ZM5.77 11.98c-2.29 0-3.02.73-3.02 3.02v3.23c0 2.29.73 3.02 3.02 3.02H9c2.29 0 3.02-.73 3.02-3.02v-.1h-1.63c-3.13 0-4.52-1.39-4.52-4.52v-1.63h-.1Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17.38 10.38v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23c-2.69 0-3.77-1.08-3.77-3.77v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.7.01 3.77 1.08 3.77 3.77Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77ZM2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85v2.38c0 2.69 1.08 3.77 3.77 3.77h2.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z",
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

var ForwardItem = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ForwardItem.displayName = 'ForwardItem';

export { ForwardItem as default };
