// React imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  useLocation,
} from 'react-router-dom';

// Ant Design imports
import { Layout, Menu, Breadcrumb, Button } from 'antd';

// Components and Partials imports
import NavbarWithRouter from './partials/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';
import { browserHistory } from 'react-router';

// Stylesheet import
import './App.less';

// ----------
class App extends Component {
  // ----------
  constructor() {
    super();
    const existingTokens = JSON.parse(localStorage.getItem('tokens'));

    this.state = {
      isLoggedIn: false,
      authTokens: existingTokens,
    };
  }

  // ----------
  setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    this.setState({
      authTokens: data,
    });

    this.mockLogin('in');
  };

  // ----------
  mockLogin = (type) => {
    this.setState({
      isLoggedIn: type === 'in' ? true : false,
    });
  };

  // ----------
  mockSignup = (type) => {
    this.setState({
      isLoggedIn: type === 'in' ? true : false,
    });
  };

  // ----------
  render() {
    const { isLoggedIn, authTokens } = this.state;

    return (
      <AuthContext.Provider value={{ authTokens, setTokens: this.setTokens }}>
        <Router>
          <div className="App">
            <Layout className="layout">
              <NavbarWithRouter isLoggedIn={isLoggedIn}></NavbarWithRouter>
              <Route exact path="/" component={Landing} />
              <Route
                path="/login"
                component={() => <Login mockLogin={this.mockLogin} />}
              />
              <Route
                path="/signup"
                component={() => <Signup mockLogin={this.mockSignup} />}
              />
              <PrivateRoute path="/app" component={Home} />
            </Layout>
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default App;
