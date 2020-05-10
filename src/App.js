import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard'
import Profile from './components/dashboard/profile/profile'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router >
  );
}

export default App;
