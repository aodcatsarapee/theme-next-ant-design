webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/antd/lib/avatar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/avatar/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Avatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
    _this.state = {
      scale: 1,
      isImgExist: true
    };

    _this.setScale = function () {
      if (!_this.avatarChildren || !_this.avatarNode) {
        return;
      }

      var childrenWidth = _this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale

      var nodeWidth = _this.avatarNode.offsetWidth; // denominator is 0 is no meaning

      if (childrenWidth === 0 || nodeWidth === 0 || _this.lastChildrenWidth === childrenWidth && _this.lastNodeWidth === nodeWidth) {
        return;
      }

      _this.lastChildrenWidth = childrenWidth;
      _this.lastNodeWidth = nodeWidth; // add 4px gap for each side to get better performance

      _this.setState({
        scale: nodeWidth - 8 < childrenWidth ? (nodeWidth - 8) / childrenWidth : 1
      });
    };

    _this.handleImgLoadError = function () {
      var onError = _this.props.onError;
      var errorFlag = onError ? onError() : undefined;

      if (errorFlag !== false) {
        _this.setState({
          isImgExist: false
        });
      }
    };

    _this.renderAvatar = function (_ref) {
      var _classNames, _classNames2;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          shape = _a.shape,
          size = _a.size,
          src = _a.src,
          srcSet = _a.srcSet,
          icon = _a.icon,
          className = _a.className,
          alt = _a.alt,
          others = __rest(_a, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt"]);

      var _this$state = _this.state,
          isImgExist = _this$state.isImgExist,
          scale = _this$state.scale;
      var prefixCls = getPrefixCls('avatar', customizePrefixCls);
      var sizeCls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
      var classString = (0, _classnames["default"])(prefixCls, className, sizeCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames2, "".concat(prefixCls, "-image"), src && isImgExist), _defineProperty(_classNames2, "".concat(prefixCls, "-icon"), icon), _classNames2));
      var sizeStyle = typeof size === 'number' ? {
        width: size,
        height: size,
        lineHeight: "".concat(size, "px"),
        fontSize: icon ? size / 2 : 18
      } : {};
      var children = _this.props.children;

      if (src && isImgExist) {
        children = React.createElement("img", {
          src: src,
          srcSet: srcSet,
          onError: _this.handleImgLoadError,
          alt: alt
        });
      } else if (icon) {
        children = React.createElement(_icon["default"], {
          type: icon
        });
      } else {
        var childrenNode = _this.avatarChildren;

        if (childrenNode || scale !== 1) {
          var transformString = "scale(".concat(scale, ") translateX(-50%)");
          var childrenStyle = {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString
          };
          var sizeChildrenStyle = typeof size === 'number' ? {
            lineHeight: "".concat(size, "px")
          } : {};
          children = React.createElement("span", {
            className: "".concat(prefixCls, "-string"),
            ref: function ref(node) {
              return _this.avatarChildren = node;
            },
            style: _extends({}, sizeChildrenStyle, childrenStyle)
          }, children);
        } else {
          children = React.createElement("span", {
            className: "".concat(prefixCls, "-string"),
            ref: function ref(node) {
              return _this.avatarChildren = node;
            }
          }, children);
        }
      }

      return React.createElement("span", _extends({}, others, {
        style: _extends({}, sizeStyle, others.style),
        className: classString,
        ref: function ref(node) {
          return _this.avatarNode = node;
        }
      }), children);
    };

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScale();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.setScale();

      if (prevProps.src !== this.props.src) {
        this.setState({
          isImgExist: true,
          scale: 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderAvatar);
    }
  }]);

  return Avatar;
}(React.Component);

exports["default"] = Avatar;
Avatar.defaultProps = {
  shape: 'circle',
  size: 'default'
};

/***/ }),

/***/ "./node_modules/antd/lib/avatar/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/avatar/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/avatar/style/index.css");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiderDemo; });
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar/style/css */ "./node_modules/antd/lib/avatar/style/css.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_17__);















var _jsxFileName = "C:\\Users\\AODCAt\\Desktop\\with-ant-design-app\\pages\\index.js";



var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default.a.Footer,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default.a.Sider;
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.SubMenu;

var SiderDemo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(SiderDemo, _React$Component);

  function SiderDemo() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SiderDemo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(SiderDemo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "rootSubmenuKeys", ['sub1', 'sub2', 'home']);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      openKeys: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onOpenChange", function (openKeys) {
      var latestOpenKey = openKeys.find(function (key) {
        return _this.state.openKeys.indexOf(key) === -1;
      });

      if (_this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        _this.setState({
          openKeys: openKeys
        });
      } else {
        _this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(SiderDemo, [{
    key: "render",
    value: function render() {
      var _ref;

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default.a, {
        style: {
          height: "100vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Sider, {
        breakpoint: "lg",
        collapsedWidth: "0",
        width: "250",
        style: {
          background: "#242A33"
        },
        onBreakpoint: function onBreakpoint(broken) {
          console.log(broken);
        },
        onCollapse: function onCollapse(collapsed, type) {
          console.log(collapsed, type);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        style: (_ref = {
          marginTop: 10,
          width: '20vh',
          height: 40,
          background: "#ffff"
        }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref, "marginTop", 16), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref, "marginRight", 24), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref, "marginBottom", 16), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref, "marginLeft", 30), _ref),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
        theme: "dark",
        mode: "inline",
        openKeys: this.state.openKeys,
        onOpenChange: this.onOpenChange,
        defaultSelectedKeys: ['home'],
        style: {
          width: '100%',
          background: "#242A33"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
        key: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "pie-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), "Option 1"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(SubMenu, {
        key: "sub1",
        title: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "mail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Navigation One")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
        key: "1",
        className: "active-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Option 1"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Option 2"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Option 3"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
        key: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Option 4")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(SubMenu, {
        key: "sub2",
        title: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "appstore",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Navigation Two")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
        key: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Option 5"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
        key: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Option 6")))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Header, {
        style: {
          background: '#fff',
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        style: {
          width: '50%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        style: {
          width: '50%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        style: {
          float: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: "large",
        icon: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Content, {
        style: {
          margin: '24px 16px 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        style: {
          padding: 24,
          background: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "content")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Footer, {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Ant Design \xA92018 Created by Ant UED")));
    }
  }]);

  return SiderDemo;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.2ea5072b1c38262b75ad.hot-update.js.map