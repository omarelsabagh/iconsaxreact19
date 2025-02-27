'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.75 16h2.75c2.8 0 3.5-.7 3.5-3.5V8.3c0-2.8-.7-3.5-3.5-3.5h-2.1c-.7 0-.85-.21-1.12-.56l-1.05-1.4c-.4-.53-.63-.84-1.68-.84H8.5C5.7 2 5 2.7 5 5.5v7c0 2.8.7 3.5 3.5 3.5h2.75v3c0 .05.02.09.03.14a2 2 0 0 0-1.14 1.14c-.05-.01-.09-.03-.14-.03H6c-.41 0-.75.34-.75.75s.34.75.75.75h4c.05 0 .09-.02.14-.03a1.992 1.992 0 0 0 3.72 0c.05.01.09.03.14.03h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.05 0-.09.02-.14.03a2 2 0 0 0-1.14-1.14c.01-.05.03-.09.03-.14v-3Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16v3M10 21c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2M18 21h-4M10 21H6M5 5.5C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5V9.34",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M18.75 21c0 .41-.34.75-.75.75h-4c-.05 0-.09-.02-.14-.03a1.992 1.992 0 0 1-3.72 0c-.05.01-.09.03-.14.03H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.05 0 .09.02.14.03a2 2 0 0 1 1.14-1.14c-.01-.05-.03-.09-.03-.14v-3h1.5v3c0 .05-.02.09-.03.14a2 2 0 0 1 1.14 1.14c.05-.01.09-.03.14-.03h4c.41 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5v-7C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16v3M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21h-4M10 21H6",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5v-7C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 19.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 23.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18 21.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 21.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.5 16.75h-7c-3.22 0-4.25-1.03-4.25-4.25v-7c0-3.22 1.03-4.25 4.25-4.25h1.05c1.33 0 1.76.45 2.28 1.14l1.05 1.4c.2.26.2.26.52.26h2.1c3.22 0 4.25 1.03 4.25 4.25v4.2c0 3.22-1.03 4.25-4.25 4.25Zm-7-14c-2.39 0-2.75.36-2.75 2.75v7c0 2.39.36 2.75 2.75 2.75h7c2.39 0 2.75-.36 2.75-2.75V8.3c0-2.39-.36-2.75-2.75-2.75h-2.1c-.99 0-1.35-.37-1.71-.85l-1.06-1.41c-.35-.47-.4-.54-1.08-.54H8.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 16v3",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M18 21h-4M10 21H6",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M19 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5v-7C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
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

var FolderConnection = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
FolderConnection.displayName = 'FolderConnection';

module.exports = FolderConnection;
