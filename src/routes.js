import React, { Component } from 'react';
import { 
  // Switch, 
  BrowserRouter as Router, Route } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {getProfileFetch, logoutUser} from './redux/actions';
import Home from './components/Home';
import Trainer from './components/Trainer';
import Event from './components/Event';
import About from './components/About';
import Admin from './components/Admin';
import Profile from './components/Profile';
// import Signup from './components/Signup';
// import Login from './components/Login';

class routes extends Component {
    // componentDidMount = () => {
    //     this.props.getProfileFetch()
    //   }
    
    //   handleClick = event => {
    //     event.preventDefault()
    //     // Remove the token from localStorage
    //     localStorage.removeItem("token")
    //     // Remove the user object from the Redux store
    //     this.props.logoutUser()
    //   }

    render() {
      return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin"  component={Admin} />
                <Route exact path="/trainer" component={Trainer} />
                <Route exact path="/event" component={Event} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                {/* <Switch>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                </Switch>
                {this.props.currentUser.username
                    ? <button onClick={this.handleClick}>Log Out</button>
                    : null
                } */}
            </div>
        </Router>
        );
    }
}

// const mapStateToProps = state => ({
//   currentUser: state.reducer.currentUser
// })

// const mapDispatchToProps = dispatch => ({
//   getProfileFetch: () => dispatch(getProfileFetch()),
//   logoutUser: () => dispatch(logoutUser())
// })

export default routes
// connect(mapStateToProps, mapDispatchToProps)(routes);