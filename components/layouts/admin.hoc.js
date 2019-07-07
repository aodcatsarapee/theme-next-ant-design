import React, { Component } from 'react'
import AdminHeader from './admin.header'
import AdminSidebar from './admin.sidebar'
import AdminContent from './admin.content'
import AdminFooter from './admin.footer'

import { Layout, Menu, Icon, Avatar } from 'antd';
export default class AdminHOC extends Component {
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <AdminSidebar />
                <Layout>
                    <AdminHeader />
                    <AdminContent title={this.props.contenttile}>
                        {this.props.children}
                    </AdminContent>
                    <AdminFooter />
                </Layout>
            </Layout>
        )
    }
}
