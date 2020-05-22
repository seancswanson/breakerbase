import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button, Checkbox } from 'antd';

const layout = {
  layout: 'vertical',
  labelCol: {
    offset: 14,
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 16,
  },
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { mockLogin } = this.props;

    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div
        style={{
          display: 'flex',
          flex: '1',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        class="user-form-wrapper"
      >
        <Card title="Log In">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ padding: '0 20px' }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  mockLogin('in');
                }}
              >
                Sign In
              </Button>
            </Form.Item>
            <Link to="/signup">Don't have an account?</Link>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;
