webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiderDemo; });
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "C:\\Users\\AODCAt\\Desktop\\with-ant-design-app\\pages\\index.js";

var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a.Footer,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a.Sider;

var SiderDemo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(SiderDemo, _React$Component);

  function SiderDemo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SiderDemo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(SiderDemo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(SiderDemo, [{
    key: "render",
    value: function render() {
      var _this = this;

      // submenu keys of first level
      rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
      state = {
        openKeys: ['sub1']
      };

      onOpenChange = function onOpenChange(openKeys) {
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
      };

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Sider, {
        breakpoint: "lg",
        collapsedWidth: "0",
        onBreakpoint: function onBreakpoint(broken) {
          console.log(broken);
        },
        onCollapse: function onCollapse(collapsed, type) {
          console.log(collapsed, type);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
        mode: "inline",
        openKeys: this.state.openKeys,
        onOpenChange: this.onOpenChange,
        style: {
          width: 256
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SubMenu, {
        key: "sub1",
        title: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "mail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Navigation One")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Option 1"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Option 2"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Option 3"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Option 4")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SubMenu, {
        key: "sub2",
        title: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "appstore",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Navigation Two")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Option 5"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Option 6"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SubMenu, {
        key: "sub3",
        title: "Submenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Option 7"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Option 8"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SubMenu, {
        key: "sub4",
        title: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "setting",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Navigation Three")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Option 9"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Option 10"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Option 11"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Option 12")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Header, {
        style: {
          background: '#fff',
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Content, {
        style: {
          margin: '24px 16px 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          padding: 24,
          background: '#fff',
          minHeight: 360
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "content")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Footer, {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Ant Design \xA92018 Created by Ant UED")));
    }
  }]);

  return SiderDemo;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.dcc0e1a8e9b41e28a5e7.hot-update.js.map