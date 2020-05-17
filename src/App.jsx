import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';

import './App.scss';
import Navbar from './partials/Navbar/Navbar';
import MyFooter from './partials/MyFooter/MyFooter';

const { Content } = Layout;

function App() {
  const breadcrumbNameMap = {
    '/sessions': 'Session Log',
    '/sessions/new': 'New Entry',
    '/sessions/edit': 'Edit Entry',
    '/trainer': 'Drill Builder',
    '/trainer/new': 'New Drill',
    '/trainer/edit': 'Edit Drill',
    '/trainer/generate': 'Generate Drill',
    '/library': 'Move Catalog',
    '/library/new': 'New Move',
    '/library/edit': 'Edit Move',
  };

  return (
    <div className="App">
      <Layout className="layout">
        <Navbar></Navbar>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <MyFooter></MyFooter>
      </Layout>
    </div>
  );
}

export default App;
