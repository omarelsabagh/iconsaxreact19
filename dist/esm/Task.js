import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 19.261h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .46-.37.82-.82.82ZM20 12.968h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82ZM20 6.671h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82ZM4.91 8.032c-.22 0-.43-.09-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72c-.16.15-.36.24-.58.24ZM4.91 14.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24ZM4.91 20.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.821.821 0 0 1 1.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 19.5h10M20 12.5h1M11 12.5h5.49M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 19.261h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .46-.37.82-.82.82ZM20 12.968h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82ZM20 6.671h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M4.91 8.032c-.22 0-.43-.09-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72c-.16.15-.36.24-.58.24ZM4.91 14.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24ZM4.91 20.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.821.821 0 0 1 1.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 19.5h10M11 12.5h10M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 20.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 13.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 6.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM4 7.251c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22ZM4 14.251c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22ZM4 21.251c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M11 19.5h10M11 12.5h10M11 5.5h10",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 5.5 1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3",
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

var Task = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Task.displayName = 'Task';

export { Task as default };
