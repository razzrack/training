import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route, Router } from 'react-router-dom';
import Logins from './components/Logins';
import Admin from './components/Admin';
import Logout from './components/Logout';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Logins}/>
        <Route exact path="/admin" component={Admin}/>
        {/* <Route exact path="/b" component={B}/> */}
      </Router>
    );
  }
} 



export default App;