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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_admin_hoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/admin.hoc */ "./components/layouts/admin.hoc.js");





var _jsxFileName = "C:\\Users\\AODCAt\\Desktop\\with-ant-design-app\\pages\\index.js";

// import Head from 'next/head';
// import "./index.css";
// import { Layout, Menu, Icon, Avatar } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
// export default class SiderDemo extends React.Component {
//   // submenu keys of first level
//   rootSubmenuKeys = ['sub1', 'sub2', 'home'];
//   state = {
//     openKeys: [],
//   };
//   onOpenChange = openKeys => {
//     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
//     if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       this.setState({ openKeys });
//     } else {
//       this.setState({
//         openKeys: latestOpenKey ? [latestOpenKey] : [],
//       });
//     }
//   };
//   render() {
//     return (
//       <Layout style={{ height: "100vh" }}>
//         <Sider
//           breakpoint="lg"
//           collapsedWidth="0"
//           width="250"
//           style={{ background: "#242A33" }}
//           onBreakpoint={broken => {
//             console.log(broken);
//           }}
//           onCollapse={(collapsed, type) => {
//             console.log(collapsed, type);
//           }}
//         >
//           <div
//             style={{
//               marginTop: 10,
//               width: '20vh',
//               height: 40,
//               background: "#ffff",
//               marginTop: 16,
//               marginRight: 24,
//               marginBottom: 16,
//               marginLeft: 30
//             }}
//           />
//           <Menu
//             theme="dark"
//             mode="inline"
//             openKeys={this.state.openKeys}
//             onOpenChange={this.onOpenChange}
//             defaultSelectedKeys={['home']}
//             style={{ width: '100%', background: '#242A33' }}
//           >
//             <Menu.Item key="home">
//               <Icon type="pie-chart" />
//               Option 1
//             </Menu.Item>
//             <SubMenu
//               key="sub1"
//               title={
//                 <span>
//                   <Icon type="mail" />
//                   <span>Navigation One</span>
//                 </span>
//               }
//             >
//               <Menu.Item key="1" className="active-menu" >Option 1</Menu.Item>
//               <Menu.Item key="2">Option 2</Menu.Item>
//               <Menu.Item key="3">Option 3</Menu.Item>
//               <Menu.Item key="4">Option 4</Menu.Item>
//             </SubMenu>
//             <SubMenu
//               key="sub2"
//               title={
//                 <span>
//                   <Icon type="appstore" />
//                   <span>Navigation Two</span>
//                 </span>
//               }
//             >
//               <Menu.Item key="5">Option 5</Menu.Item>
//               <Menu.Item key="6">Option 6</Menu.Item>
//             </SubMenu>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Header style={{ background: '#1976D2', display: 'flex' }} >
//             <div style={{ width: '50%' }}></div>
//             <div style={{ width: '50%' }}>
//               <div style={{ float: "right" ,marginRight: -30 }}>
//                 <a href="#" style={{ marginLeft: 5}}>
//                   <Avatar size={40} icon="user" style={{background:"#fff"}} />
//                   {/* <b style={{marginLeft: 5, fontSize: 16 }}>Admin</b> */}
//                 </a>
//               </div>
//             </div>
//           </Header>
//           <Content style={{ margin: '24px 16px 0' }}>
//             <div style={{ padding: 24, background: '#fff' }}>content</div>
//           </Content>
//           <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//         </Layout>
//       </Layout>
//     );
//   }
// }



var SiderDemo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SiderDemo, _React$Component);

  function SiderDemo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SiderDemo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SiderDemo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SiderDemo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layouts_admin_hoc__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "5555555");
    }
  }]);

  return SiderDemo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.14c3d1fea49767ae9d92.hot-update.js.map