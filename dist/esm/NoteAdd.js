import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.57 4.5c-.66-.49-1.61-.02-1.61.81v.1c0 1.17-.84 2.25-2.01 2.37-1.35.14-2.49-.92-2.49-2.24V4.5c0-.55-.45-1-1-1h-.92c-.55 0-1 .45-1 1v1.04c0 .79-.41 1.49-1.03 1.88-.09.06-.19.11-.29.16-.09.05-.19.09-.3.12-.12.04-.25.07-.39.08-.16.02-.32.02-.48 0-.14-.01-.27-.04-.39-.08a2.694 2.694 0 0 1-.59-.28c-.63-.44-1.03-1.2-1.03-2.01v-.1c0-.77-.82-1.23-1.47-.9-.01.01-.02.01-.03.02-.04.02-.07.04-.11.07-.03.03-.07.05-.1.08-.28.22-.53.47-.74.74-.11.12-.2.25-.28.38a3.498 3.498 0 0 0-.27.46c-.02.02-.03.03-.03.05-.06.12-.12.24-.16.37-.03.05-.04.09-.06.14-.06.15-.1.3-.14.45-.04.14-.07.29-.09.44a5.902 5.902 0 0 0-.06.76v8.76A4.87 4.87 0 0 0 7.37 22h9.26a4.87 4.87 0 0 0 4.87-4.87V8.37c0-1.59-.76-2.98-1.93-3.87ZM12 16.25h-1.69V18a.749.749 0 1 1-1.5 0v-1.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.81V13a.749.749 0 1 1 1.5 0v1.75H12c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.56 18v-5M12 15.5H7M8 2v3M16 2v3M2.94 9.832c-.1-4.7 1.55-6 4.87-6.25l8-.16c3.34.12 5.03 1.35 5.13 6.05l.13 6.17c.08 4.12-.87 6.19-5.87 6.3l-6 .12c-5 .1-6.04-1.94-6.12-6.05l-.04-2.12",
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
    d: "M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM12 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.56 18v-5M12 15.5H7M8 2v3M16 2v3M15.81 3.42c3.34.12 5.03 1.35 5.13 6.05l.13 6.17c.08 4.12-.87 6.19-5.87 6.3l-6 .12c-5 .1-6.04-1.94-6.12-6.05l-.14-6.18c-.1-4.7 1.55-6 4.87-6.25l8-.16Z",
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
    d: "M9.56 18.75c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.85 22.81c-2.47 0-4.1-.54-5.12-1.7-1.18-1.33-1.37-3.32-1.41-5.09l-.13-6.17c-.1-4.73 1.47-6.7 5.57-7.01l8.04-.16h.04c4.11.14 5.75 2.04 5.85 6.78l.12 6.17c.04 1.77-.08 3.77-1.2 5.14-1.02 1.25-2.74 1.86-5.41 1.92l-6 .12h-.35ZM15.8 4.17l-7.97.16c-2.8.22-4.23 1.12-4.14 5.49l.13 6.17c.04 2.12.35 3.36 1.03 4.13.76.86 2.13 1.24 4.33 1.19l6-.12c2.19-.04 3.55-.48 4.28-1.37.65-.79.91-2.04.86-4.16l-.12-6.17c-.1-4.36-1.56-5.22-4.4-5.32Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.56 18v-5M12 15.5H7"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8 2v3M16 2v3M15.81 3.422c3.34.12 5.03 1.35 5.13 6.05l.13 6.17c.08 4.12-.87 6.19-5.87 6.3l-6 .12c-5 .1-6.04-1.94-6.12-6.05l-.14-6.18c-.1-4.7 1.55-6 4.87-6.25l8-.16Z",
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

var NoteAdd = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
NoteAdd.displayName = 'NoteAdd';

export { NoteAdd as default };
