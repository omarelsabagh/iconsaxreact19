'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m22.34 9.33-2-1c-.37-.18-.83-.04-1.01.33-.19.38-.04.83.33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.76.76 0 0 0-.41-.67ZM6 6.89C6 5.5 6.85 5 7.89 5h5.23C14.15 5 15 5.5 15 6.89v1.23C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89Zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14V9M2 22h17",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.39 9.998h4.23c1.04 0 1.89-.5 1.89-1.89v-1.23c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23c0 1.39.85 1.89 1.89 1.89ZM6.5 13h3M17.5 16.01 22 16v-6l-2-1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.89 10h5.23c1.04 0 1.89-.5 1.89-1.89V6.88C15 5.5 14.15 5 13.11 5H7.88C6.85 5 6 5.5 6 6.89v1.23C6 9.5 6.85 10 7.89 10ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM22.75 9.998v6c0 .41-.33.75-.75.75l-4.5.01v-1.5l3.75-.01v-4.79l-1.59-.79a.745.745 0 0 1-.33-1.01c.18-.37.64-.51 1.01-.33l2 1c.25.13.41.39.41.67Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14ZM2 22h17",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.39 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23C6.5 9.5 7.35 10 8.39 10ZM6.5 13h3M17.5 16.01 22 16v-6l-2-1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.5 22.75h-14c-.41 0-.75-.34-.75-.75V5c0-2.24 1.51-3.75 3.75-3.75h8c2.24 0 3.75 1.51 3.75 3.75v17c0 .41-.34.75-.75.75Zm-13.25-1.5h12.5V5c0-1.41-.84-2.25-2.25-2.25h-8c-1.41 0-2.25.84-2.25 2.25v16.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.612 10.748h-4.23c-1.63 0-2.64-1.01-2.64-2.64v-1.23c0-1.63 1.01-2.64 2.64-2.64h4.23c1.63 0 2.64 1.01 2.64 2.64v1.23c0 1.63-1.01 2.64-2.64 2.64Zm-4.22-5c-.81 0-1.14.33-1.14 1.14v1.23c0 .81.33 1.14 1.14 1.14h4.23c.81 0 1.14-.33 1.14-1.14v-1.23c0-.81-.33-1.14-1.14-1.14h-4.23ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.5 16.758a.749.749 0 1 1 0-1.5l3.75-.01v-4.79l-1.59-.79a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l2 1c.25.13.41.39.41.67v6c0 .41-.33.75-.75.75l-4.49.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17.5 22.75h-14c-.41 0-.75-.34-.75-.75V5c0-2.24 1.51-3.75 3.75-3.75h8c2.24 0 3.75 1.51 3.75 3.75v17c0 .41-.34.75-.75.75Zm-13.25-1.5h12.5V5c0-1.41-.84-2.25-2.25-2.25h-8c-1.41 0-2.25.84-2.25 2.25v16.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.612 10.748h-4.23c-1.63 0-2.64-1.01-2.64-2.64v-1.23c0-1.63 1.01-2.64 2.64-2.64h4.23c1.63 0 2.64 1.01 2.64 2.64v1.23c0 1.63-1.01 2.64-2.64 2.64Zm-4.22-5c-.81 0-1.14.33-1.14 1.14v1.23c0 .81.33 1.14 1.14 1.14h4.23c.81 0 1.14-.33 1.14-1.14v-1.23c0-.81-.33-1.14-1.14-1.14h-4.23ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.5 16.758a.749.749 0 1 1 0-1.5l3.75-.01v-4.79l-1.59-.79a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l2 1c.25.13.41.39.41.67v6c0 .41-.33.75-.75.75l-4.49.02Z",
    fill: color
  }));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });
  }
};

var GasStation = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var _ref7$variant = _ref7.variant,
      variant = _ref7$variant === void 0 ? 'Linear' : _ref7$variant,
      _ref7$color = _ref7.color,
      color = _ref7$color === void 0 ? 'currentColor' : _ref7$color,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? '24' : _ref7$size,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement("svg", _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
GasStation.displayName = 'GasStation';

module.exports = GasStation;
