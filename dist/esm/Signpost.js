import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m18.34 14.13-2.18-1.75c-.31-.24-.7-.38-1.1-.38h-2.31V9h4.47c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75H8.96c-.39 0-.78.14-1.09.38L5.68 4.13c-.87.7-.87 2.04 0 2.74l2.19 1.75c.31.24.7.38 1.09.38h2.29v3H6.8c-.97 0-1.75.78-1.75 1.75v3.5c0 .97.78 1.75 1.75 1.75h4.45v2.25H9c-.41 0-.75.34-.75.75s.34.75.75.75h6c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V19h2.31c.4 0 .79-.14 1.1-.38l2.18-1.75c.88-.7.88-2.04 0-2.74Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13.03 1.998H8.96c-.4 0-.78.14-1.09.38l-2.19 1.75c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75M6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74ZM12 12V9M12 22v-3M9 22h6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18.97 3.75v3.5c0 .97-.78 1.75-1.75 1.75H8.96c-.39 0-.78-.14-1.09-.38L5.68 6.87c-.87-.7-.87-2.04 0-2.74l2.19-1.75c.31-.24.7-.38 1.09-.38h8.26c.97 0 1.75.78 1.75 1.75ZM18.34 16.87l-2.18 1.75c-.31.24-.7.38-1.1.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75h8.26c.4 0 .79.14 1.1.38l2.18 1.75c.88.7.88 2.04 0 2.74Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12.75 9h-1.5v3h1.5V9ZM15.75 22c0 .41-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V19h1.5v2.25H15c.41 0 .75.34.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17.22 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74ZM6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74ZM12 12V9M12 22v-3M9 22h6",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17.22 9.75H8.96c-.56 0-1.12-.19-1.56-.55L5.21 7.45c-.6-.48-.94-1.19-.94-1.95s.34-1.48.94-1.95L7.4 1.8c.44-.35 1-.55 1.56-.55h8.26a2.5 2.5 0 0 1 2.5 2.5v3.5a2.5 2.5 0 0 1-2.5 2.5Zm-8.26-7c-.23 0-.45.08-.62.22L6.15 4.72a1 1 0 0 0-.38.78c0 .3.14.59.38.78l2.19 1.75c.18.14.4.22.62.22h8.26c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1H8.96ZM15.06 19.75H6.8a2.5 2.5 0 0 1-2.5-2.5v-3.5a2.5 2.5 0 0 1 2.5-2.5h8.26c.57 0 1.12.19 1.56.55l2.19 1.75c.6.48.94 1.19.94 1.95s-.34 1.48-.94 1.95l-2.19 1.75c-.44.36-.99.55-1.56.55Zm-8.26-7c-.55 0-1 .45-1 1v3.5c0 .55.45 1 1 1h8.26c.23 0 .45-.08.62-.22l2.19-1.75a1 1 0 0 0 .38-.78 1 1 0 0 0-.38-.78l-2.19-1.75c-.18-.14-.4-.22-.62-.22H6.8Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 22.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17.22 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74ZM6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12 12V9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12 22v-3M9 22h6"
  })));
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

var Signpost = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Signpost.displayName = 'Signpost';

export { Signpost as default };
