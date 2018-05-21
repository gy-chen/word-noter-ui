import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './container/AuthenticatedRoute';
import WordNoterApp from './WordNoterApp';
import LoginLink from './component/LoginLink';
import LoginRedirect from './component/LoginRedirect';
import Header from './container/Header';
import LoginCallback from './container/LoginCallback';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Header} />
            <Route path="/login/redirect" component={LoginRedirect} />
            <Route path="/login/callback" component={LoginCallback} />
            <Route path="/login" exact component={LoginLink} />
            <AuthenticatedRoute path="/" exact component={WordNoterApp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
