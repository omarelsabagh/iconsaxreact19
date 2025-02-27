import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.25 5.998v13.91c0 .71-.72 1.2-1.37.93-1.86-.78-4.17-1.46-5.81-1.68l-.31-.04c-.97-.12-1.76-1.01-1.76-1.98V5.248c0-1.2.97-2.17 2.17-2.17h.07c1.88.16 4.65 1.04 6.48 2.03a1 1 0 0 1 .53.89ZM19.83 3.078h-.06c-.24.02-.5.05-.77.1-1.23.2-2.69.62-4 1.14-.62.25-1.2.52-1.71.79-.33.18-.54.52-.54.89v13.91c0 .71.72 1.2 1.37.93 1.86-.78 4.17-1.46 5.81-1.68l.31-.04c.97-.12 1.76-1.01 1.76-1.98V5.248c0-1.2-.97-2.17-2.17-2.17Zm-.56 10.65c0 .39-.28.56-.62.37l-1.06-.59a.49.49 0 0 0-.41 0l-1.06.59c-.34.19-.62.02-.62-.37v-3.07c0-.46.38-.84.84-.84h2.1c.46 0 .84.38.84.84v3.07h-.01Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 4.662c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.29.18.77.18 1.06 0l.17-.11c.63-.39 1.43-.78 2.3-1.13v4.08l2-1.33 2 1.33v-5.22c.27-.05.53-.08.77-.1h.06c1.19-.1 2.17.79 2.17 1.99v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.26.15-.69.15-.96 0l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04c-.96-.12-1.74-1.02-1.74-1.98v-7.89M12 5.488v15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 2.781v5.22l-2-1.33-2 1.33v-4.08c1.31-.52 2.77-.94 4-1.14Z",
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
    d: "M12 5.302v16.03c.17 0 .35-.03.49-.11l.04-.02c1.92-1.05 5.27-2.15 7.44-2.44l.29-.04c.96-.12 1.74-1.02 1.74-1.98V4.662c0-1.19-.97-2.09-2.16-1.99-2.1.17-5.28 1.23-7.06 2.34l-.25.15c-.15.09-.34.14-.53.14Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 4.67v12.07c0 .96.78 1.86 1.74 1.98l.33.04c2.18.29 5.54 1.4 7.46 2.46.13.08.29.11.47.11V5.3c-.19 0-.38-.05-.53-.14l-.17-.11C9.52 3.93 6.33 2.86 4.23 2.68h-.06C2.98 2.58 2 3.47 2 4.67ZM19 2.781v4.29c0 .4-.44.64-.78.42L17 6.681l-1.22.81a.504.504 0 0 1-.78-.42v-3.15c1.31-.52 2.77-.94 4-1.14Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 4.67v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.26.15-.69.15-.96 0l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04C2.78 18.6 2 17.7 2 16.74V4.66c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.29.18.77.18 1.06 0l.17-.11c.63-.39 1.43-.78 2.3-1.13V8l2-1.33L19 8V2.78c.27-.05.53-.08.77-.1h.06c1.19-.1 2.17.79 2.17 1.99ZM12 5.49v15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 2.78V8l-2-1.33L15 8V3.92c1.31-.52 2.77-.94 4-1.14Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22.08c-.3 0-.6-.07-.85-.21-1.87-1.02-5.15-2.1-7.21-2.37l-.29-.04c-1.31-.16-2.39-1.39-2.39-2.72V4.66c0-.79.31-1.51.88-2.03.57-.52 1.31-.77 2.09-.7 2.19.18 5.51 1.28 7.39 2.45l.24.14c.07.03.22.04.28 0l.16-.1c.67-.42 1.51-.83 2.43-1.2a.76.76 0 0 1 .7.08c.21.14.33.37.33.62V6.6l.83-.55c.25-.17.58-.17.83 0l.83.55V2.78c0-.36.26-.67.61-.74.29-.05.58-.09.84-.11h.12c.73-.06 1.48.19 2.04.71.57.52.88 1.24.88 2.03v12.07c0 1.34-1.08 2.56-2.4 2.72l-.33.04c-2.06.27-5.36 1.36-7.19 2.37-.22.14-.52.21-.82.21ZM3.98 3.41c-.32 0-.61.11-.84.32-.25.23-.39.56-.39.93v12.08c0 .59.51 1.16 1.08 1.24l.3.04c2.25.3 5.7 1.43 7.7 2.53.09.04.22.05.27.03 2.01-1.11 5.47-2.25 7.73-2.55l.34-.04c.57-.07 1.08-.65 1.08-1.24V4.68c0-.37-.14-.69-.39-.93-.25-.23-.6-.34-.96-.32h-.14V8c0 .28-.15.53-.4.66s-.54.12-.77-.04l-1.58-1.05-1.58 1.05c-.23.15-.52.17-.77.04a.754.754 0 0 1-.4-.66V5.07c-.43.21-.82.42-1.16.62l-.16.1c-.55.34-1.33.34-1.86.01l-.24-.15C9.15 4.59 6.07 3.57 4.11 3.41h-.13Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21.238c-.41 0-.75-.34-.75-.75v-15c0-.41.34-.75.75-.75s.75.34.75.75v15c0 .42-.34.75-.75.75ZM19 8.749c-.15 0-.29-.04-.42-.13L17 7.569l-1.58 1.05c-.23.15-.52.17-.77.04a.755.755 0 0 1-.4-.66v-4.08c0-.31.19-.58.47-.7 1.38-.55 2.89-.98 4.16-1.18.22-.04.44.03.61.17.17.14.26.35.26.57v5.22c0 .28-.15.53-.4.66a.73.73 0 0 1-.35.09Zm-2-2.83c.14 0 .29.04.42.13l.83.55v-2.91c-.8.18-1.67.44-2.5.75v2.16l.83-.55a.74.74 0 0 1 .42-.13Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 4.672v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.26.15-.69.15-.96 0l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04c-.96-.12-1.74-1.02-1.74-1.98V4.662c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.29.18.77.18 1.06 0l.17-.11c.63-.39 1.43-.78 2.3-1.13 1.31-.52 2.77-.94 4-1.14.27-.05.53-.08.77-.1h.06c1.19-.1 2.17.79 2.17 1.99Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    d: "M12 5.488v15M19 2.781v5.22l-2-1.33-2 1.33v-4.08c1.31-.52 2.77-.94 4-1.14Z",
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

var BookSaved = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BookSaved.displayName = 'BookSaved';

export { BookSaved as default };
