import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';

import Overview from '../Overview/Overview';
import SessionLog from '../SessionLog/SessionLog';
import Trainer from '../Trainer/Trainer';
import MoveLibrary from '../MoveLibrary/MoveLibrary';

const { Content } = Layout;

function Home() {
  // Will be able to use this if I convert App to a function component.
  // location = useLocation();

  const breadcrumbNameMap = {
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

  // this.pathSnippets = this.location.pathname.split('/').filter((i) => i);
  // console.log(pathSnippets);
  // this.extraBreadcrumbItems = pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
  //   return (
  //     <Breadcrumb.Item key={url}>
  //       <Link to={url}>{this.breadcrumbNameMap[url]}</Link>
  //     </Breadcrumb.Item>
  //   );
  // });

  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Route exact path="/app" component={Overview} />
      <Switch>
        <Route path="/app/session-log" component={SessionLog} />
        <Route path="/app/trainer" component={Trainer} />
        <Route path="/app/move-library" component={MoveLibrary} />
      </Switch>{' '}
      {/* <div className="site-layout-content">Content</div> */}
    </Content>
  );
}

export default Home;
