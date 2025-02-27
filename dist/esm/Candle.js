import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.5 4.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.5H5.5C3.91 4.5 3 5.41 3 7v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-6.5h.25c1.59 0 2.5-.91 2.5-2.5V7c0-1.59-.91-2.5-2.5-2.5ZM18.5 8.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.5h-.25c-1.59 0-2.5.91-2.5 2.5v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h.25c1.59 0 2.5-.91 2.5-2.5v-6c0-1.59-.91-2.5-2.5-2.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2M9.5 11.02V13c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2M20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2Z",
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
    d: "M7.5 4.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.5H5.5C3.91 4.5 3 5.41 3 7v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-6.5h.25c1.59 0 2.5-.91 2.5-2.5V7c0-1.59-.91-2.5-2.5-2.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 8.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.5h-.25c-1.59 0-2.5.91-2.5 2.5v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h.25c1.59 0 2.5-.91 2.5-2.5v-6c0-1.59-.91-2.5-2.5-2.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2M9.5 7v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2ZM20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2Z",
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
    d: "M6.5 22.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM6.5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17.5 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17.5 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 15.75h-2c-1.72 0-2.75-1.03-2.75-2.75V7c0-1.72 1.03-2.75 2.75-2.75h2c1.72 0 2.75 1.03 2.75 2.75v6c0 1.72-1.03 2.75-2.75 2.75Zm-2-10c-.89 0-1.25.36-1.25 1.25v6c0 .89.36 1.25 1.25 1.25h2c.89 0 1.25-.36 1.25-1.25V7c0-.89-.36-1.25-1.25-1.25h-2ZM18.5 19.75h-2c-1.72 0-2.75-1.03-2.75-2.75v-6c0-1.72 1.03-2.75 2.75-2.75h2c1.72 0 2.75 1.03 2.75 2.75v6c0 1.72-1.03 2.75-2.75 2.75Zm-2-10c-.89 0-1.25.36-1.25 1.25v6c0 .89.36 1.25 1.25 1.25h2c.89 0 1.25-.36 1.25-1.25v-6c0-.89-.36-1.25-1.25-1.25h-2Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 7v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2ZM20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2Z",
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

var Candle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Candle.displayName = 'Candle';

export { Candle as default };
