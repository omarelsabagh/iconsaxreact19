'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.25 7.86H2v8.33c0 .06 0 .12.01.17h9.24v-8.5ZM7.691 6.36h3.56V2h-3.53v4.24c0 .04-.02.08-.03.12ZM6.219 6.24V2.16c-2.22.46-3.67 1.94-4.09 4.2h4.11c-.01-.04-.02-.08-.02-.12ZM16.22 2h-3.47v4.36h3.47V2ZM17.71 6.358h4.16c-.42-2.28-1.89-3.77-4.15-4.21v4.18c0 .01-.01.02-.01.03ZM17.719 21.85c2.19-.43 3.63-1.83 4.1-3.99h-4.1v3.99ZM16.22 17.86h-3.47V22h3.47v-4.14ZM12.75 16.36h9.24c.01-.05.01-.11.01-.17V7.86h-9.25v8.5ZM11.249 17.86h-3.53V22h3.53v-4.14ZM2.18 17.86c.47 2.14 1.89 3.54 4.04 3.98v-3.98H2.18Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M2.52 17.11h18.96M2.52 7.11h18.96M6.969 17.11v4.35M12 17.11v4.86M16.969 17.11v4.41M6.969 2.11v4.35M12 2.11v4.86M12 7.031v11M16.969 2.11v4.41",
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
    d: "M22 7.81v8.38c0 .06 0 .12-.01.17 0 .54-.06 1.04-.17 1.5-.47 2.16-1.91 3.56-4.1 3.99-.47.1-.97.15-1.5.15h-8.5c-.53-.01-1.03-.06-1.5-.16-2.15-.44-3.57-1.84-4.04-3.98-.11-.46-.17-.96-.17-1.5-.01-.05-.01-.11-.01-.17V7.81c0-.51.04-1 .13-1.45C2.55 4.1 4 2.62 6.22 2.16c.47-.11.97-.16 1.5-.16h8.51c.53 0 1.03.05 1.49.15 2.26.44 3.73 1.93 4.15 4.21.09.45.13.94.13 1.45Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12.75 7.86v8.5h9.24c0 .54-.06 1.04-.17 1.5h-4.1v3.99c-.47.1-.97.15-1.5.15v-4.14h-3.47V22h-1.5v-4.14H7.72V22c-.53-.01-1.03-.06-1.5-.16v-3.98H2.18c-.11-.46-.17-.96-.17-1.5h9.24v-8.5H2v-.05c0-.51.04-1 .13-1.45h4.11c-.01-.04-.02-.08-.02-.12V2.16c.47-.11.97-.16 1.5-.16v4.24c0 .04-.02.08-.03.12h3.56V2h1.5v4.36h3.47V2h.01c.53 0 1.03.05 1.49.15v4.18c0 .01-.01.02-.01.03h4.16c.09.45.13.94.13 1.45v.05h-9.25Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM2.52 17.11h18.96M2.52 7.11h18.96M6.97 17.11v4.35M12 17.11v4.86M16.97 17.11v4.41M6.97 2.11v4.35M12 2.11v4.86M12 7.03v11M16.97 2.11v4.41",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.48 17.86H2.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.96a.749.749 0 1 1 0 1.5ZM21.48 7.86H2.52a.749.749 0 1 1 0-1.5h18.96a.749.749 0 1 1 0 1.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M6.969 22.21c-.41 0-.75-.34-.75-.75v-4.35c0-.41.34-.75.75-.75s.75.34.75.75v4.35c0 .42-.34.75-.75.75ZM12 22.72c-.41 0-.75-.34-.75-.75v-4.86c0-.41.34-.75.75-.75s.75.34.75.75v4.86c0 .41-.34.75-.75.75ZM16.969 22.27c-.41 0-.75-.34-.75-.75v-4.41c0-.41.34-.75.75-.75s.75.34.75.75v4.41c0 .42-.34.75-.75.75ZM6.969 7.21c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.35c0 .42-.34.75-.75.75ZM12 7.72c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.86c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 18.781c-.41 0-.75-.34-.75-.75v-11c0-.41.34-.75.75-.75s.75.34.75.75v11c0 .41-.34.75-.75.75ZM16.969 7.27c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.41c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2.52 17.11h18.96M2.52 7.11h18.96M6.969 17.11v4.35M12 17.11v4.86M16.969 17.11v4.41M6.969 2.11v4.35M12 2.11v4.86M12 7.031v11M16.969 2.11v4.41"
  })));
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

var VideoHorizontal = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
VideoHorizontal.displayName = 'VideoHorizontal';

module.exports = VideoHorizontal;
