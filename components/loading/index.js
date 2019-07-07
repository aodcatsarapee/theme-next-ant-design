import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Layout, Card } from 'antd';

const Loading = (props) => {
    return (
        <Layout
            style={{
                height: '100vh',
                marginTop: 250,
                alignItems: 'center',
                background: "#FFF",
                color :'#1976D2'
            }}
        >
            <Icon type="loading" style={{ fontSize: 80 }} />
            <p style={{ fontSize: 25, marginTop: 20 }}>กำลังโหลด....</p>
        </Layout >
    )
}
export default Loading