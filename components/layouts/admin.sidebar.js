import React, { Component } from 'react';
import "./index.css";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;
class AdminSidebar extends Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'home'];
  state = {
    openKeys: [],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="250"
        style={{ background: "#242A33" }}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            marginTop: 10,
            width: '20vh',
            height: 40,
            background: "#ffff",
            marginTop: 16,
            marginRight: 24,
            marginBottom: 16,
            marginLeft: 30

          }}
        />

        <Menu
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          defaultSelectedKeys={['home']}
          style={{ width: '100%', background: '#242A33' }}
        >

          <Menu.Item key="home">
            <Icon type="pie-chart" />
            Option 1
        </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="1" className="active-menu" >Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default AdminSidebar;