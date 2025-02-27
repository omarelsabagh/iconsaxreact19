import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12.67 12.75H10.5v2.67h2.17c.74 0 1.33-.6 1.33-1.33 0-.73-.6-1.34-1.33-1.34zM12.67 8.578H10.5v2.67h2.17c.74 0 1.33-.6 1.33-1.33 0-.73-.6-1.34-1.33-1.34z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M23 11c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.27V6c0-1.66-1.34-3-3-3H7C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.27A2.785 2.785 0 011 11.01v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2zm-7.5 3.08c0 1.56-1.27 2.83-2.83 2.83H9.75c-.41 0-.75-.34-.75-.75V7.83c0-.41.34-.75.75-.75h2.92c1.56 0 2.83 1.27 2.83 2.83 0 .82-.35 1.57-.92 2.08.57.53.92 1.27.92 2.09z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 3C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.26A2.785 2.785 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.26V6c0-1.66-1.34-3-3-3h-4.75",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.75 11.998h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75v-8.33h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75",
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
    d: "M17 3H7C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.26A2.785 2.785 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.26V6c0-1.66-1.34-3-3-3Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.67 16.92H9.75c-.41 0-.75-.34-.75-.75V7.84c0-.41.34-.75.75-.75h2.92c1.56 0 2.83 1.27 2.83 2.83 0 .82-.35 1.57-.92 2.08.56.52.92 1.26.92 2.08 0 1.57-1.27 2.84-2.83 2.84Zm-2.17-1.5h2.17a1.33 1.33 0 1 0 0-2.66H10.5v2.66Zm0-4.17h2.17a1.33 1.33 0 1 0 0-2.66H10.5v2.66Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 3H7C5.3 3 4 4.3 4 6v.8c0 .8-.1 1.5-.4 2.3C3.3 10.2 2.2 11 1 11v2c1.2 0 2.3.8 2.6 1.9.3.7.4 1.5.4 2.3v.8c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-.8c0-.8.1-1.5.4-2.3.4-1.1 1.4-1.9 2.6-1.9v-2c-1.2 0-2.3-.8-2.6-1.9-.3-.7-.4-1.5-.4-2.3V6c0-1.7-1.3-3-3-3Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.8 12h2.9c1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1H9.8V7.8h2.9c1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1H9.8Z",
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
    d: "M17 21.75H7c-2.07 0-3.75-1.68-3.75-3.75v-.84c0-.69-.11-1.37-.33-2.03A2.021 2.021 0 0 0 1 13.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75.87 0 1.65-.56 1.92-1.38.22-.66.33-1.34.33-2.03V6c0-2.07 1.68-3.75 3.75-3.75h10c2.07 0 3.75 1.68 3.75 3.75v.84c0 .69.11 1.37.33 2.03.28.83 1.05 1.38 1.92 1.38.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75-.87 0-1.65.56-1.92 1.38-.22.66-.33 1.34-.33 2.03V18c0 2.07-1.68 3.75-3.75 3.75ZM1.75 12.33a3.51 3.51 0 0 1 2.59 2.33c.27.81.41 1.65.41 2.5V18c0 1.24 1.01 2.25 2.25 2.25h10c1.24 0 2.25-1.01 2.25-2.25v-.84c0-.85.14-1.69.41-2.5.4-1.2 1.4-2.07 2.59-2.33v-.66a3.51 3.51 0 0 1-2.59-2.33 7.89 7.89 0 0 1-.41-2.5V6c0-1.24-1.01-2.25-2.25-2.25H7C5.76 3.75 4.75 4.76 4.75 6v.84c0 .85-.14 1.69-.41 2.5-.4 1.2-1.4 2.07-2.59 2.33v.66Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.67 16.92H9.75c-.41 0-.75-.34-.75-.75V7.84c0-.41.34-.75.75-.75h2.92c1.56 0 2.83 1.27 2.83 2.83 0 .82-.35 1.57-.92 2.08.56.52.92 1.26.92 2.08 0 1.57-1.27 2.84-2.83 2.84Zm-2.17-1.5h2.17a1.33 1.33 0 1 0 0-2.66H10.5v2.66Zm0-4.17h2.17a1.33 1.33 0 1 0 0-2.66H10.5v2.66Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 3H7C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.26A2.785 2.785 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.26V6c0-1.66-1.34-3-3-3Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M9.75 11.998h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75v-8.33h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75",
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

var Bootstrap = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Bootstrap.displayName = 'Bootstrap';

export { Bootstrap as default };
