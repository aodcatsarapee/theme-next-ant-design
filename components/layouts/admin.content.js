import { Layout } from 'antd';
const { Content } = Layout;

const AdminContent = (props) => {
    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff' }}>
                {props.children}
            </div>
        </Content>
    )
}

export default AdminContent;