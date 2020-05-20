import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ResponsiveAntMenu from './ResponsiveAntMenu';
import { Avatar, Layout, Menu } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

import 'antd/lib/menu/style/css';
import 'antd/lib/popover/style/css';
import { UserOutlined } from '@ant-design/icons';
import Login from '../../components/Login/Login';

const { Header } = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isLoggedIn, location } = this.props;
    console.log(this);
    return (
      <Header>
        <Link className="logo" to={isLoggedIn ? '/app' : '/'}>
          BreakHQ
        </Link>
        <ResponsiveAntMenu
          activeLinkKey={location.pathname}
          theme="dark"
          mobileMenuContent={(isMenuShown) =>
            isMenuShown ? <CloseOutlined /> : <MenuOutlined />
          }
          menuClassName={'responsive-ant-menu'}
        >
          {(onLinkClick) => (
            <Menu>
              <Menu.Item key="/app/session-log">
                <Link to="/app/session-log">Sessions</Link>
              </Menu.Item>
              <Menu.Item key="/app/trainer">
                <Link to="/app/trainer">Train</Link>
              </Menu.Item>
              <Menu.Item key="/app/move-library">
                <Link to="/app/move-library">Library</Link>
              </Menu.Item>
              <Menu.Item key="/app/profile">
                <Link to="/app/profile">
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Link>
              </Menu.Item>
            </Menu>
          )}
        </ResponsiveAntMenu>
        {/* {isLoggedIn ? (
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
        )} */}
      </Header>
    );
  }
}
const NavbarWithRouter = withRouter(Navbar);
export default NavbarWithRouter;
