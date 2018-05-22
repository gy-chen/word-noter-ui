import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthenticatedRoute from './container/AuthenticatedRoute';
import WordNoterApp from './WordNoterApp';
import LoginRedirect from './component/LoginRedirect';
import Header from './container/Header';
import LoginCallback from './container/LoginCallback';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route path="/login/redirect" component={LoginRedirect} />
          <Route path="/login/callback" component={LoginCallback} />
          <AuthenticatedRoute path="/" exact component={WordNoterApp} />
        </div>
      </Router>
    );
  }
}

export default App;
