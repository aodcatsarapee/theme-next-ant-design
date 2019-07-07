
import { Layout } from 'antd';
import Login from '.'
import AdminHOC from '../components/layouts/admin.hoc'
import Loading from '../components/loading'
export default class Home extends React.Component {
  state = {
    Loading: true
  }
  render() {
    return (
      <div>
        {
          this.state.Loading === true ?
            <Loading />
            :
            <AdminHOC>
              <h1>5555</h1>
            </AdminHOC>

        }
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Loading: false })
    }, 500);
  }
}

