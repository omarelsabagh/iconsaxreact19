import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 2H6C4.34 2 3 3.33 3 4.97v10.91c0 1.64 1.34 2.97 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69c.56-.56 1.33-.87 2.12-.87H18c1.66 0 3-1.33 3-2.97V4.97C21 3.33 19.66 2 18 2Zm-7.62 11.01c.41 0 .75.34.75.75s-.34.75-.75.75H7.7c-.44 0-.85-.21-1.11-.57-.25-.34-.31-.76-.19-1.16.35-1.07 1.21-1.65 1.97-2.17.8-.54 1.25-.88 1.25-1.46 0-.52-.42-.94-.94-.94s-.93.43-.93.95c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.34 1.09-2.44 2.44-2.44 1.35 0 2.44 1.09 2.44 2.44 0 1.41-1.06 2.13-1.91 2.71-.53.36-1.03.7-1.28 1.15h2.44v-.01Zm6.62.07h-.21v.69c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.69h-1.97c-.49 0-.94-.26-1.19-.68-.25-.43-.25-.96 0-1.38.68-1.17 1.47-2.5 2.19-3.66.32-.51.93-.74 1.5-.58.57.17.97.69.96 1.29v3.52H17c.41 0 .75.34.75.75s-.34.74-.75.74Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.29 11.58V8.64c-.59.96-1.2 1.99-1.75 2.93h1.75v.01Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.07",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9.163c0-.93.76-1.69 1.69-1.69.93 0 1.69.76 1.69 1.69 0 1.88-2.67 2.08-3.26 3.87-.12.37.19.74.58.74h2.68M16.04 13.76V8.05a.58.58 0 0 0-.42-.56.593.593 0 0 0-.66.25c-.72 1.16-1.5 2.48-2.18 3.64-.11.19-.11.44 0 .63s.32.31.55.31H17",
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
    d: "M18 18.862h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.982c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.38 14.51H7.7c-.44 0-.85-.21-1.11-.57-.25-.34-.31-.76-.19-1.16.35-1.07 1.21-1.65 1.97-2.17.8-.54 1.25-.88 1.25-1.46a.939.939 0 1 0-1.88 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.34 1.09-2.44 2.44-2.44 1.35 0 2.44 1.09 2.44 2.44 0 1.41-1.06 2.13-1.91 2.71-.53.36-1.03.7-1.28 1.15h2.44c.41 0 .75.34.75.75s-.33.75-.74.75ZM16.04 14.509c-.41 0-.75-.34-.75-.75v-.69h-1.97c-.49 0-.94-.26-1.19-.68-.25-.43-.25-.96 0-1.38.68-1.17 1.47-2.5 2.19-3.66.32-.51.93-.74 1.5-.58.57.17.97.69.96 1.29v3.52H17c.41 0 .75.34.75.75s-.34.75-.75.75h-.21v.69c0 .41-.33.74-.75.74Zm-.75-5.87c-.59.96-1.2 1.99-1.75 2.93h1.75v-2.93Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9.16c0-.93.76-1.69 1.69-1.69.93 0 1.69.76 1.69 1.69 0 1.88-2.67 2.08-3.26 3.87-.12.37.19.74.58.74h2.68M16.04 13.76V8.05a.58.58 0 0 0-.42-.56.593.593 0 0 0-.66.25c-.72 1.16-1.5 2.48-2.18 3.64-.11.19-.11.44 0 .63s.32.31.55.31H17",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22.752c-.7 0-1.41-.27-1.94-.8l-1.71-1.69c-.43-.42-.99-.65-1.59-.65H6c-2.07 0-3.75-1.67-3.75-3.72V4.982c0-2.05 1.68-3.72 3.75-3.72h12c2.07 0 3.75 1.67 3.75 3.72v10.91c0 2.05-1.68 3.72-3.75 3.72h-.76c-.6 0-1.17.23-1.59.65l-1.71 1.69c-.53.53-1.24.8-1.94.8Zm-6-20c-1.24 0-2.25 1-2.25 2.22v10.91c0 1.23 1.01 2.22 2.25 2.22h.76c1 0 1.94.39 2.65 1.09l1.71 1.69c.49.48 1.28.48 1.77 0l1.71-1.69c.71-.7 1.65-1.09 2.65-1.09H18c1.24 0 2.25-1 2.25-2.22V4.972c0-1.23-1.01-2.22-2.25-2.22H6Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.38 14.511H7.7c-.44 0-.85-.21-1.11-.57-.25-.34-.31-.76-.19-1.16.35-1.07 1.21-1.65 1.97-2.17.8-.54 1.25-.88 1.25-1.46a.939.939 0 1 0-1.88 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.34 1.09-2.44 2.44-2.44 1.35 0 2.44 1.09 2.44 2.44 0 1.41-1.06 2.13-1.91 2.71-.53.36-1.03.7-1.28 1.15h2.44c.41 0 .75.34.75.75s-.33.75-.74.75ZM16.039 14.509c-.41 0-.75-.34-.75-.75v-.69h-1.97c-.49 0-.94-.26-1.19-.68-.25-.43-.25-.96 0-1.38.68-1.17 1.47-2.5 2.19-3.66.32-.51.93-.74 1.5-.58.57.17.97.69.96 1.29v3.52h.22c.41 0 .75.34.75.75s-.34.75-.75.75h-.21v.69c0 .41-.33.74-.75.74Zm-.75-5.87c-.59.96-1.2 1.99-1.75 2.93h1.75v-2.93Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 18.862h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.982c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M7 9.159c0-.93.76-1.69 1.69-1.69.93 0 1.69.76 1.69 1.69 0 1.88-2.67 2.08-3.26 3.87-.12.37.19.74.58.74h2.68M16.04 13.76V8.05a.58.58 0 0 0-.42-.56.593.593 0 0 0-.66.25c-.72 1.16-1.5 2.48-2.18 3.64-.11.19-.11.44 0 .63s.32.31.55.31H17",
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

var I24Support = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
I24Support.displayName = 'I24Support';

export { I24Support as default };
