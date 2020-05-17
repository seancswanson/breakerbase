import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Header>
        <div className="logo">BreakHQ</div>
        {isLoggedIn ? (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="sessions">Sessions</Menu.Item>
            <Menu.Item key="train">Train</Menu.Item>
            <Menu.Item key="library">Library</Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="contribute">Contribute</Menu.Item>
            <Menu.Item key="login">Log In</Menu.Item>
          </Menu>
        )}
      </Header>
    );
  }
}

export default Navbar;
