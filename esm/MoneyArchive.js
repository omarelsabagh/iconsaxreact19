import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 9.75H8c-.69 0-1.25.56-1.25 1.25v1.05c.03-.01.05-.02.08-.03.12-.06.25-.1.38-.14.06-.02.12-.04.19-.06.2-.04.4-.07.61-.07h8c.21 0 .41.03.61.07.06.01.12.04.19.06.13.04.26.08.38.14.03.01.06.02.08.03V11A1.28 1.28 0 0 0 16 9.75ZM16 13.25H8c-.69 0-1.25.56-1.25 1.25v.5H9.5c.41 0 .75.34.75.75 0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75c0-.41.34-.75.75-.75h2.75v-.5c0-.69-.56-1.25-1.25-1.25ZM16 6.5H8c-.69 0-1.25.56-1.25 1.25v.81c.38-.19.8-.31 1.25-.31h8c.45 0 .87.12 1.25.31v-.81c0-.69-.56-1.25-1.25-1.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM19 16.5h-3.84A3.258 3.258 0 0 1 12 19c-1.53 0-2.82-1.07-3.16-2.5H5c-.41 0-.75-.34-.75-.75S4.59 15 5 15h.25V7.75C5.25 6.23 6.48 5 8 5h8c1.52 0 2.75 1.23 2.75 2.75V15H19c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2ZM19 15.75h-1M6 15.75H5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2Z",
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
    d: "M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 15h-.25V7.75C18.75 6.23 17.52 5 16 5H8C6.48 5 5.25 6.23 5.25 7.75V15H5c-.41 0-.75.34-.75.75s.34.75.75.75h3.84C9.18 17.93 10.47 19 12 19c1.53 0 2.82-1.07 3.16-2.5H19c.41 0 .75-.34.75-.75S19.41 15 19 15Zm-2.21-3.12a4.39 4.39 0 0 0-.19-.06c-.2-.04-.4-.07-.61-.07h-8c-.21 0-.41.03-.61.07-.06.01-.12.04-.19.06-.13.04-.26.08-.38.14-.03.01-.06.02-.08.03V11c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v1.05c-.03-.01-.05-.02-.08-.03-.1-.06-.23-.1-.36-.14ZM8 6.5h8c.69 0 1.25.56 1.25 1.25v.81c-.38-.19-.8-.31-1.25-.31H8c-.45 0-.87.12-1.25.31v-.81c0-.69.56-1.25 1.25-1.25Zm6.5 8.5c-.41 0-.75.34-.75.75 0 .96-.79 1.75-1.75 1.75s-1.75-.79-1.75-1.75c0-.41-.34-.75-.75-.75H6.75v-.5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v.5H14.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2ZM19 15.75h-1M6 15.75H5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 15.25c-.41 0-.75-.34-.75-.75 0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.75C5.25 6.23 6.48 5 8 5h8c1.52 0 2.75 1.23 2.75 2.75v6.75c0 .41-.34.75-.75.75Zm-10-3.5h8c.45 0 .88.11 1.25.3v-4.3c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v4.3c.37-.19.8-.3 1.25-.3Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 16.5h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 16.5H5c-.41 0-.75-.34-.75-.75S4.59 15 5 15h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 14.75c-.41 0-.75-.34-.75-.75v-3c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-1.52 1.23-2.75 2.75-2.75h8c1.52 0 2.75 1.23 2.75 2.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19c-1.53 0-2.82-1.07-3.16-2.5H6c-.41 0-.75-.34-.75-.75V14.5c0-1.52 1.23-2.75 2.75-2.75h8c1.52 0 2.75 1.23 2.75 2.75v1.25c0 .41-.34.75-.75.75h-2.84A3.258 3.258 0 0 1 12 19Zm-5.25-4H9.5c.41 0 .75.34.75.75 0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75c0-.41.34-.75.75-.75h2.75v-.5c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2ZM19 15.75h-1M6 15.75H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2Z"
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

var MoneyArchive = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
MoneyArchive.displayName = 'MoneyArchive';

export { MoneyArchive as default };
