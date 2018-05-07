import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './container/AuthenticatedRoute';
import WordNoterApp from './WordNoterApp';
import LoginLink from './component/LoginLink';
import LoginRedirect from './component/LoginRedirect';
import LoginCallback from './container/LoginCallback';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login/redirect" component={LoginRedirect} />
            <Route path="/login/callback" component={LoginCallback} />
            <Route path="/login" component={LoginLink} />
            <AuthenticatedRoute path="/" component={WordNoterApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
