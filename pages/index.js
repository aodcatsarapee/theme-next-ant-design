import { Form, Icon, Input, Button, Checkbox, Layout, Card } from 'antd';

class Index extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                location.href = "http://localhost:3000/home";
            }
        }); 
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout style={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Card style={{ width: 400 }}>
                    <h1>Sign In</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}

                            <a className="login-form-forgot" href="" style={{ float: "right" }}>
                                Forgot password</a>
                            <br />
                            <Button type="primary" htmlType="submit" shape="round" icon="sign-in" size="large" block style={{ marginTop: 40 }}><b>Log In</b></Button>
                            <center styl3e={{marginTop:20}}>
                                <span>Don't have an account?</span> <a href="">Sign Up!</a>
                            </center>
                        </Form.Item>
                    </Form>
                </Card>
            </Layout>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Index);

export default WrappedNormalLoginForm