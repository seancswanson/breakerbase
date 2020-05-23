import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import ResponsiveAntMenu from './ResponsiveAntMenu';
import { Avatar, Layout, Menu } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/auth';

import 'antd/lib/menu/style/css';
import 'antd/lib/popover/style/css';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Login from '../../components/Login/Login';

const { Header } = Layout;

function Navbar(props) {
  const { isLoggedIn, location } = props;
  const { setTokens } = useAuth();

  console.log(this);
  return (
    <Header>
      <Link className="logo" to={isLoggedIn ? '/app' : '/'}>
        BreakerBase
      </Link>
      <ResponsiveAntMenu
        activeLinkKey={location.pathname}
        theme={() => 'dark'}
        mobileMenuContent={(isMenuShown) =>
          isMenuShown ? <CloseOutlined /> : <MenuOutlined />
        }
        menuClassName={'responsive-ant-menu'}
      >
        {(onLinkClick) => (
          <Menu>
            <Menu.Item key="/app/session-log">
              <Link to="/app/session-log">Session Log</Link>
            </Menu.Item>
            <Menu.Item key="/app/trainer">
              <Link to="/app/trainer">Trainer</Link>
            </Menu.Item>
            <Menu.Item key="/app/move-library">
              <Link to="/app/move-library">Move Library</Link>
            </Menu.Item>
            <Menu.Item key="/app/profile">
              <Link to="/app/profile">
                <Avatar shape="square" icon={<UserOutlined />} />
              </Link>
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setTokens();
              }}
            >
              <LogoutOutlined />
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

const NavbarWithRouter = withRouter(Navbar);
export default NavbarWithRouter;
