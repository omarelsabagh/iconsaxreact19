'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: color,
    d: "M12 4.75c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14a1.498 1.498 0 010-2.5c.08-.05.17-.1.26-.13.09-.04.18-.07.28-.09A1.499 1.499 0 1112 4.75zM12 9.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.499 1.499 0 01.23-2.31c.08-.05.17-.1.26-.13a1.417 1.417 0 011.14 0c.09.03.18.08.26.13a1.499 1.499 0 01.23 2.31c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03zM12 13.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.454 1.454 0 01-.41-.77 1.499 1.499 0 01.41-1.35c.07-.07.15-.13.23-.19.08-.05.17-.1.26-.14.09-.03.18-.06.28-.08a1.499 1.499 0 011.76 1.76c-.02.1-.05.19-.09.28a1.264 1.264 0 01-.32.49c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03zM12 16.751c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.23-.23.58-.33.9-.27.07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .26-.11.52-.29.71-.05.04-.1.08-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02zM12 20a.776.776 0 01-.53-.22.633.633 0 01-.16-.24.75.75 0 11.69.46zM12 22.07a.47.47 0 01-.35-.15.47.47 0 01-.15-.35.501.501 0 011 0c0 .13-.05.26-.15.35a.47.47 0 01-.35.15zM3.5 9.25a1.499 1.499 0 01-1.06-2.56c.55-.56 1.56-.56 2.12 0A1.499 1.499 0 014.33 9c-.08.05-.17.1-.26.13a1.357 1.357 0 01-.57.12zM20.5 9.25c-.39 0-.78-.16-1.06-.44S19 8.14 19 7.75c0-.1.01-.2.03-.29.02-.1.05-.19.08-.28.04-.09.09-.18.14-.26.06-.08.12-.16.19-.23s.15-.13.23-.19c.08-.05.17-.1.26-.13a1.417 1.417 0 011.14 0c.09.03.18.08.26.13.08.06.16.12.23.19s.13.15.19.23c.05.08.1.17.13.26a1.357 1.357 0 01.12.57A1.499 1.499 0 0121.33 9c-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.1.02-.19.03-.29.03zM20.5 12.749c-.06 0-.13-.01-.19-.02a.603.603 0 01-.19-.06.757.757 0 01-.18-.09c-.05-.03-.1-.08-.15-.12-.04-.05-.09-.1-.12-.15a.757.757 0 01-.09-.18.636.636 0 01-.06-.18c-.01-.07-.02-.13-.02-.2 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.19-.06.12-.03.25-.03.38 0 .07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.05.04-.1.09-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02zM3.5 12.749c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zM20.5 15.498a.75.75 0 110-1.498.75.75 0 010 1.498zM3.5 15.502a.75.75 0 01-.69-1.04c.03-.09.09-.17.16-.24.27-.28.78-.28 1.06 0a.776.776 0 01.22.53.776.776 0 01-.22.53.75.75 0 01-.53.22zM20.5 18c-.07 0-.13-.01-.19-.04a.355.355 0 01-.16-.11.47.47 0 01-.15-.35.501.501 0 011 0c0 .13-.05.26-.15.35a.47.47 0 01-.35.15zM3.5 18c-.13 0-.26-.05-.35-.15A.47.47 0 013 17.5a.501.501 0 011 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15zM7.75 7a1.357 1.357 0 01-.57-.12c-.1-.03-.18-.08-.26-.13a1.516 1.516 0 01-.67-1.25c0-.39.16-.78.44-1.06.56-.56 1.56-.56 2.12 0a1.499 1.499 0 01-.23 2.31c-.08.05-.17.1-.26.13a1.357 1.357 0 01-.57.12zM16.25 7a1.358 1.358 0 01-.57-.12c-.09-.03-.18-.08-.26-.13a2.11 2.11 0 01-.23-.19c-.07-.07-.13-.15-.19-.23-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29a1.516 1.516 0 01.67-1.25c.08-.05.17-.1.26-.13a1.417 1.417 0 011.14 0c.09.03.18.08.26.13a1.516 1.516 0 01.67 1.25c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 01-.57.12zM7.75 11.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08a1.454 1.454 0 01-.49-.33 1.499 1.499 0 010-2.12c.56-.56 1.56-.56 2.12 0a1.499 1.499 0 01-1.06 2.56zM16.25 11.25a1.358 1.358 0 01-.57-.12c-.09-.03-.18-.08-.26-.13-.08-.06-.16-.12-.23-.19s-.13-.15-.19-.23c-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29 0-.39.16-.78.44-1.06.07-.07.15-.13.23-.19.08-.05.17-.1.26-.13a1.417 1.417 0 011.14 0c.09.03.18.08.26.13a1.516 1.516 0 01.67 1.25c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 01-.57.12zM7.75 14.75c-.13 0-.26-.03-.38-.08a.933.933 0 01-.33-.21c-.09-.1-.16-.21-.21-.33a.995.995 0 01-.08-.38c0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33c-.19.18-.45.29-.71.29zM16.25 14.75c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.17-.04.06-.08.11-.12.16-.19.18-.45.29-.71.29zM7.75 17.75a.75.75 0 110-1.499.75.75 0 010 1.499zM16.25 17.75a.776.776 0 01-.53-.22.633.633 0 01-.16-.24.717.717 0 010-.58c.04-.09.09-.17.16-.24.07-.07.15-.12.24-.16a.73.73 0 01.58 0c.09.04.17.09.24.16A.776.776 0 0117 17a.776.776 0 01-.22.53.75.75 0 01-.53.22zM7.75 20c-.13 0-.26-.05-.35-.15a.47.47 0 01-.15-.35.501.501 0 011 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15zM16.25 20c-.07 0-.13-.01-.19-.04a.355.355 0 01-.16-.11.355.355 0 01-.11-.16.406.406 0 01-.04-.19.501.501 0 011 0c0 .07-.01.13-.04.19-.02.06-.06.12-.11.16a.47.47 0 01-.35.15z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 3.2v.01M12 7.7v.01M12 11.7v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 15.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 19.2v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.2v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 7.7v.01M20.5 7.7v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.5 11.7v.01M3.5 11.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.5 14.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.5 17.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 14.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 17.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 9.7v.01M7.75 5.5v.01M16.2 9.7v.01M16.25 5.5v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 13.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 16.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 19.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.2 13.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.2 16.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.2 19.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 4.75c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19A1.499 1.499 0 0 1 11.17 2c.08-.05.17-.1.26-.13.09-.04.18-.07.28-.09A1.499 1.499 0 1 1 12 4.75ZM12 9.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.499 1.499 0 0 1 .23-2.31c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.499 1.499 0 0 1 .23 2.31c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03ZM12 13.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.454 1.454 0 0 1-.41-.77 1.499 1.499 0 0 1 .41-1.35c.07-.07.15-.13.23-.19.08-.05.17-.1.26-.14.09-.03.18-.06.28-.08a1.499 1.499 0 0 1 1.76 1.76c-.02.1-.05.19-.09.28a1.264 1.264 0 0 1-.32.49c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".6",
    d: "M12 16.751c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.23-.23.58-.33.9-.27.07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .26-.11.52-.29.71-.05.04-.1.08-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 20a.776.776 0 0 1-.53-.22.633.633 0 0 1-.16-.24.75.75 0 1 1 .69.46Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".2",
    d: "M12 22.07a.47.47 0 0 1-.35-.15.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35a.47.47 0 0 1-.35.15Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 9.25a1.499 1.499 0 0 1-1.06-2.56c.55-.56 1.56-.56 2.12 0A1.499 1.499 0 0 1 4.33 9c-.08.05-.17.1-.26.13a1.357 1.357 0 0 1-.57.12ZM20.5 9.25c-.39 0-.78-.16-1.06-.44S19 8.14 19 7.75c0-.1.01-.2.03-.29.02-.1.05-.19.08-.28.04-.09.09-.18.14-.26.06-.08.12-.16.19-.23s.15-.13.23-.19c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13.08.06.16.12.23.19s.13.15.19.23c.05.08.1.17.13.26a1.358 1.358 0 0 1 .12.57A1.499 1.499 0 0 1 21.33 9c-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.1.02-.19.03-.29.03Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".6",
    d: "M20.5 12.749c-.06 0-.13-.01-.19-.02a.603.603 0 0 1-.19-.06.757.757 0 0 1-.18-.09c-.05-.03-.1-.08-.15-.12-.04-.05-.09-.1-.12-.15a.757.757 0 0 1-.09-.18.636.636 0 0 1-.06-.18c-.01-.07-.02-.13-.02-.2 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.19-.06.12-.03.25-.03.38 0 .07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.05.04-.1.09-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02ZM3.5 12.749c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M20.5 15.498a.75.75 0 1 1 0-1.498.75.75 0 0 1 0 1.498ZM3.5 15.502a.75.75 0 0 1-.69-1.04c.03-.09.09-.17.16-.24.27-.28.78-.28 1.06 0a.776.776 0 0 1 .22.53.776.776 0 0 1-.22.53.75.75 0 0 1-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".2",
    d: "M20.5 18c-.07 0-.13-.01-.19-.04a.355.355 0 0 1-.16-.11.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35a.47.47 0 0 1-.35.15ZM3.5 18c-.13 0-.26-.05-.35-.15A.47.47 0 0 1 3 17.5a.501.501 0 0 1 1 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.75 7a1.357 1.357 0 0 1-.57-.12c-.1-.03-.18-.08-.26-.13a1.516 1.516 0 0 1-.67-1.25c0-.39.16-.78.44-1.06.56-.56 1.56-.56 2.12 0a1.499 1.499 0 0 1-.23 2.31c-.08.05-.17.1-.26.13a1.357 1.357 0 0 1-.57.12ZM16.25 7a1.358 1.358 0 0 1-.57-.12c-.09-.03-.18-.08-.26-.13a2.11 2.11 0 0 1-.23-.19c-.07-.07-.13-.15-.19-.23-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29a1.516 1.516 0 0 1 .67-1.25c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.516 1.516 0 0 1 .67 1.25c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 0 1-.57.12ZM7.75 11.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08a1.454 1.454 0 0 1-.49-.33 1.499 1.499 0 0 1 0-2.12c.56-.56 1.56-.56 2.12 0a1.499 1.499 0 0 1-1.06 2.56ZM16.25 11.25a1.358 1.358 0 0 1-.57-.12c-.09-.03-.18-.08-.26-.13-.08-.06-.16-.12-.23-.19s-.13-.15-.19-.23c-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29 0-.39.16-.78.44-1.06.07-.07.15-.13.23-.19.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.516 1.516 0 0 1 .67 1.25c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 0 1-.57.12Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".6",
    d: "M7.75 14.75c-.13 0-.26-.03-.38-.08a.933.933 0 0 1-.33-.21c-.09-.1-.16-.21-.21-.33a.995.995 0 0 1-.08-.38c0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33c-.19.18-.45.29-.71.29ZM16.25 14.75c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.17-.04.06-.08.11-.12.16-.19.18-.45.29-.71.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7.75 17.75a.75.75 0 1 1 0-1.499.75.75 0 0 1 0 1.499ZM16.25 17.75a.776.776 0 0 1-.53-.22.633.633 0 0 1-.16-.24.717.717 0 0 1 0-.58c.04-.09.09-.17.16-.24.07-.07.15-.12.24-.16a.73.73 0 0 1 .58 0c.09.04.17.09.24.16A.776.776 0 0 1 17 17a.776.776 0 0 1-.22.53.75.75 0 0 1-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".2",
    d: "M7.75 20c-.13 0-.26-.05-.35-.15a.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15ZM16.25 20c-.07 0-.13-.01-.19-.04a.355.355 0 0 1-.16-.11.355.355 0 0 1-.11-.16.406.406 0 0 1-.04-.19.501.501 0 0 1 1 0c0 .07-.01.13-.04.19-.02.06-.06.12-.11.16a.47.47 0 0 1-.35.15Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 3.2v.01M12 7.7v.01M12 11.7v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 15.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 19.2v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 22.2v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 7.7v.01M20.5 7.7v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.5 11.7v.01M3.5 11.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.5 14.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20.5 17.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 14.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 17.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 9.7v.01M7.75 5.5v.01M16.2 9.7v.01M16.25 5.5v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 13.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 16.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 19.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.2 13.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.2 16.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16.2 19.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 4.75c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14a1.498 1.498 0 0 1 0-2.5c.08-.05.17-.1.26-.13.09-.04.18-.07.28-.09A1.499 1.499 0 1 1 12 4.75ZM12 9.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.499 1.499 0 0 1 .23-2.31c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.499 1.499 0 0 1 .23 2.31c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03ZM12 13.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.454 1.454 0 0 1-.41-.77 1.499 1.499 0 0 1 .41-1.35c.07-.07.15-.13.23-.19.08-.05.17-.1.26-.14.09-.03.18-.06.28-.08a1.499 1.499 0 0 1 1.76 1.76c-.02.1-.05.19-.09.28a1.264 1.264 0 0 1-.32.49c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03ZM12 16.751c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.23-.23.58-.33.9-.27.07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .26-.11.52-.29.71-.05.04-.1.08-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02ZM12 20a.776.776 0 0 1-.53-.22.633.633 0 0 1-.16-.24.75.75 0 1 1 .69.46ZM12 22.07a.47.47 0 0 1-.35-.15.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35a.47.47 0 0 1-.35.15ZM3.5 9.25a1.499 1.499 0 0 1-1.06-2.56c.55-.56 1.56-.56 2.12 0A1.499 1.499 0 0 1 4.33 9c-.08.05-.17.1-.26.13a1.357 1.357 0 0 1-.57.12ZM20.5 9.25c-.39 0-.78-.16-1.06-.44S19 8.14 19 7.75c0-.1.01-.2.03-.29.02-.1.05-.19.08-.28.04-.09.09-.18.14-.26.06-.08.12-.16.19-.23s.15-.13.23-.19c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13.08.06.16.12.23.19s.13.15.19.23c.05.08.1.17.13.26a1.357 1.357 0 0 1 .12.57A1.499 1.499 0 0 1 21.33 9c-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.1.02-.19.03-.29.03ZM20.5 12.749c-.06 0-.13-.01-.19-.02a.603.603 0 0 1-.19-.06.757.757 0 0 1-.18-.09c-.05-.03-.1-.08-.15-.12-.04-.05-.09-.1-.12-.15a.757.757 0 0 1-.09-.18.636.636 0 0 1-.06-.18c-.01-.07-.02-.13-.02-.2 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.19-.06.12-.03.25-.03.38 0 .07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.05.04-.1.09-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02ZM3.5 12.749c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM20.5 15.498a.75.75 0 1 1 0-1.498.75.75 0 0 1 0 1.498ZM3.5 15.502a.75.75 0 0 1-.69-1.04c.03-.09.09-.17.16-.24.27-.28.78-.28 1.06 0a.776.776 0 0 1 .22.53.776.776 0 0 1-.22.53.75.75 0 0 1-.53.22ZM20.5 18c-.07 0-.13-.01-.19-.04a.355.355 0 0 1-.16-.11.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35a.47.47 0 0 1-.35.15ZM3.5 18c-.13 0-.26-.05-.35-.15A.47.47 0 0 1 3 17.5a.501.501 0 0 1 1 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15ZM7.75 7a1.357 1.357 0 0 1-.57-.12c-.1-.03-.18-.08-.26-.13a1.516 1.516 0 0 1-.67-1.25c0-.39.16-.78.44-1.06.56-.56 1.56-.56 2.12 0a1.499 1.499 0 0 1-.23 2.31c-.08.05-.17.1-.26.13a1.357 1.357 0 0 1-.57.12ZM16.25 7a1.358 1.358 0 0 1-.57-.12c-.09-.03-.18-.08-.26-.13a2.11 2.11 0 0 1-.23-.19c-.07-.07-.13-.15-.19-.23-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29a1.516 1.516 0 0 1 .67-1.25c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.516 1.516 0 0 1 .67 1.25c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 0 1-.57.12ZM7.75 11.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08a1.454 1.454 0 0 1-.49-.33 1.499 1.499 0 0 1 0-2.12c.56-.56 1.56-.56 2.12 0a1.499 1.499 0 0 1-1.06 2.56ZM16.25 11.25a1.358 1.358 0 0 1-.57-.12c-.09-.03-.18-.08-.26-.13-.08-.06-.16-.12-.23-.19s-.13-.15-.19-.23c-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29 0-.39.16-.78.44-1.06.07-.07.15-.13.23-.19.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.516 1.516 0 0 1 .67 1.25c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 0 1-.57.12ZM7.75 14.75c-.13 0-.26-.03-.38-.08a.933.933 0 0 1-.33-.21c-.09-.1-.16-.21-.21-.33a.995.995 0 0 1-.08-.38c0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33c-.19.18-.45.29-.71.29ZM16.25 14.75c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.17-.04.06-.08.11-.12.16-.19.18-.45.29-.71.29ZM7.75 17.75a.75.75 0 1 1 0-1.499.75.75 0 0 1 0 1.499ZM16.25 17.75a.776.776 0 0 1-.53-.22.633.633 0 0 1-.16-.24.717.717 0 0 1 0-.58c.04-.09.09-.17.16-.24.07-.07.15-.12.24-.16a.73.73 0 0 1 .58 0c.09.04.17.09.24.16A.776.776 0 0 1 17 17a.776.776 0 0 1-.22.53.75.75 0 0 1-.53.22ZM7.75 20c-.13 0-.26-.05-.35-.15a.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15ZM16.25 20c-.07 0-.13-.01-.19-.04a.355.355 0 0 1-.16-.11.355.355 0 0 1-.11-.16.406.406 0 0 1-.04-.19.501.501 0 0 1 1 0c0 .07-.01.13-.04.19-.02.06-.06.12-.11.16a.47.47 0 0 1-.35.15Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 3.2v.01M12 7.7v.01M12 11.7v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 15.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 19.2v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M12 22.2v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.5 7.7v.01M20.5 7.7v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M20.5 11.7v.01M3.5 11.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M20.5 14.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M20.5 17.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M3.5 14.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M3.5 17.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M7.8 9.7v.01M7.75 5.5v.01M16.2 9.7v.01M16.25 5.5v.01",
    stroke: color,
    strokeWidth: "3",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7.8 13.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7.8 16.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M7.8 19.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M16.2 13.7v.01",
    stroke: color,
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M16.2 16.7v.01",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    opacity: ".4",
    d: "M16.2 19.7v.01",
    stroke: color,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
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

var OceanProtocol = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
OceanProtocol.displayName = 'OceanProtocol';

module.exports = OceanProtocol;
