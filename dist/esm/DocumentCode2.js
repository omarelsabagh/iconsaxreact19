import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 2H8C4.5 2 3 4 3 7v4.47c0 .35.34.59.66.47a6.45 6.45 0 0 1 3.64-.31c2.6.52 4.67 2.66 5.1 5.27.26 1.59-.06 3.1-.79 4.35-.2.33.04.75.43.75H16c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5Zm2.5 7.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 0 1 0-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L3.89 18l1.27 1.27Zm4.32-.81-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 0 1 0-.92L8.11 18l-1.27-1.27a.658.658 0 0 1 0-.92c.25-.25.66-.25.92 0l1.73 1.73c.24.26.24.66-.01.92Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 13.03V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7M11 22h5c3.5 0 5-2 5-5",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2M7 17l2 2-2 2",
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
    d: "M21 7v10c0 3-1.5 5-5 5H9c1.21-.91 2-2.37 2-4 0-2.76-2.24-5-5-5-1.13 0-2.17.37-3 1V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 3.75a.75.75 0 0 1 .75.75v2c0 .686.564 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5h-2a2.756 2.756 0 0 1-2.75-2.75v-2a.75.75 0 0 1 .75-.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 0 1 0-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L3.89 18l1.27 1.27Zm4.32-.81-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 0 1 0-.92L8.1 18l-1.27-1.27a.658.658 0 0 1 0-.92c.25-.25.66-.25.92 0l1.73 1.73c.25.26.25.66 0 .92Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 22h5c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2M7 17l2 2-2 2",
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
    d: "M16 22.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8C5.14 2.75 3.75 4.14 3.75 7v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM4 21.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM7 21.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 22h5c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2M7 17l2 2-2 2",
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

var DocumentCode2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
DocumentCode2.displayName = 'DocumentCode2';

export { DocumentCode2 as default };
