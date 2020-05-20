"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _lodash = _interopRequireDefault(require("lodash/throttle"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ResponsiveAntMenu = function ResponsiveAntMenu(props) {
  var MenuMarkup = props.children,
      activeLinkKey = props.activeLinkKey,
      className = props.menuClassName,
      theme = props.theme,
      mode = props.mode,
      mobileMenuContent = props.mobileMenuContent,
      placement = props.placement,
      popoverTrigger = props.popoverTrigger,
      throttleViewportChange = props.throttleViewportChange,
      mobileBreakPoint = props.mobileBreakPoint,
      closeOnClick = props.closeOnClick;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      viewportWidth = _useState2[0],
      setViewportWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMenuShown = _useState4[0],
      setIsMenuShown = _useState4[1];

  var isMobile = function isMobile() {
    return viewportWidth < mobileBreakPoint;
  };

  var onLinkClick = function onLinkClick() {
    return function () {
      return isMobile() && closeOnClick ? setIsMenuShown(false) : null;
    };
  };

  (0, _react.useEffect)(function () {
    setViewportWidth(window.innerWidth);
    var throttledSetViewPortWidth = (0, _lodash["default"])(function () {
      return setViewportWidth(window.innerWidth);
    }, throttleViewportChange);
    window.addEventListener('resize', throttledSetViewPortWidth);
    return function () {
      return window.removeEventListener('resize', throttledSetViewPortWidth);
    };
  }, []);
  var MenuMarkupConfig = {
    theme: !theme ? 'light' : typeof theme === 'function' ? theme(isMobile()) : theme,
    mode: !mode ? 'horizontal' : typeof mode === 'function' ? mode(isMobile()) : mode,
    selectedKeys: ["".concat(activeLinkKey)],
    className: className
  };

  var menuToRender = _react["default"].cloneElement(MenuMarkup(onLinkClick()), MenuMarkupConfig);

  return isMobile() ? _react["default"].createElement(_popover["default"], {
    content: menuToRender,
    trigger: popoverTrigger,
    placement: placement,
    visible: isMenuShown,
    onVisibleChange: setIsMenuShown
  }, mobileMenuContent(isMenuShown)) : menuToRender;
};

ResponsiveAntMenu.propTypes = {
  children: _propTypes.func.isRequired,
  mobileBreakPoint: _propTypes.number,
  closeOnMobileLinkClick: _propTypes.bool,
  throttleViewportChange: _propTypes.number,
  activeLinkKey: _propTypes.string,
  placement: _propTypes.string,
  theme: _propTypes.func,
  mode: (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.string]),
  mobileMenuContent: _propTypes.func.isRequired,
  menuClassName: _propTypes.string,
  popoverTrigger: (0, _propTypes.oneOf)(['click', 'hover', 'focus'])
};
ResponsiveAntMenu.defaultProps = {
  mobileBreakPoint: 575,
  throttleViewportChange: 250,
  placement: 'bottom',
  closeOnClick: true,
  popoverTrigger: 'click'
};
var _default = ResponsiveAntMenu;
exports["default"] = _default;