import { Layout, Avatar } from 'antd';
const { Header } = Layout;
const AdminHeader = () => {
  return (
      <Header style={{ background: '#1976D2', display: 'flex' }} >
        <div style={{ width: '50%' }}></div>
        <div style={{ width: '50%' }}>
          <div style={{ float: "right", marginRight: -30 }}>
            <a href="#" style={{ marginLeft: 5 }}>
              <Avatar size={40} icon="user" />
              {/* <b style={{marginLeft: 5, fontSize: 16 }}>Admin</b> */}
            </a>
          </div>
        </div>
      </Header>
  )
}

export default AdminHeader;