// React imports
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from 'react-router-dom';

// Ant Design imports
import { Layout, Menu, Breadcrumb, Button } from 'antd';

// Components and Partials imports
import Navbar from './partials/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import SessionLog from './components/SessionLog/SessionLog';
import Trainer from './components/Trainer/Trainer';
import MoveLibrary from './components/MoveLibrary/MoveLibrary';
import Landing from './components/Landing/Landing';
import MyFooter from './partials/MyFooter/MyFooter';

// Stylesheet import
import './App.less';

const { Content } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  breadcrumbNameMap = {
    '/session-log': 'Session Log',
    '/session-log/new': 'New Entry',
    '/session-log/edit': 'Edit Entry',
    '/trainer': 'Drill Builder',
    '/trainer/new': 'New Drill',
    '/trainer/edit': 'Edit Drill',
    '/trainer/generate': 'Generate Drill',
    '/move-library': 'Move Library',
    '/move-library/new': 'New Move',
    '/move-library/edit': 'Edit Move',
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
        <div className="App">
          <Layout className="layout">
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
            {isLoggedIn ? (
              <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Switch>
                  <Route path="/overview" component={Overview} />
                  <Route path="/session-log" component={SessionLog} />
                  <Route path="/trainer" component={Trainer} />
                  <Route path="/move-library" component={MoveLibrary} />
                </Switch>
              </Content>
            ) : (
              <Landing></Landing>
            )}
            {/* <div className="site-layout-content">Content</div> */}
            <MyFooter></MyFooter>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
