import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Login from '../../components/Login/Login';

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
        <Link className="logo" to={isLoggedIn ? '/app' : '/'}>
          BreakHQ
        </Link>
        {isLoggedIn ? (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="sessions">
              <Link to="/app/session-log">Sessions</Link>
            </Menu.Item>
            <Menu.Item key="train">
              <Link to="/app/trainer">Train</Link>
            </Menu.Item>
            <Menu.Item key="library">
              <Link to="/app/move-library">Library</Link>
            </Menu.Item>
            <Menu.Item key="profile">
              <Link to="/app">
                <Avatar shape="square" icon={<UserOutlined />} />
              </Link>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="contribute">
              <Link to="/contribute">Contribute</Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">Log In</Link>
            </Menu.Item>
          </Menu>
        )}
      </Header>
    );
  }
}

export default Navbar;
