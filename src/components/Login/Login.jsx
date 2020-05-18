import React, { Component } from 'react';
import { Button } from 'antd';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { mockLogin } = this.props;

    return (
      <div>
        Login!!{' '}
        <Button
          type="primary"
          onClick={() => {
            mockLogin('in');
          }}
        >
          Log In
        </Button>
      </div>
    );
  }
}

export default Login;
