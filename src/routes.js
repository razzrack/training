import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {getProfileFetch, logoutUser} from './redux/actions';
import Home from './components/Home';
import Trainer from './components/Trainer';
import Event from './components/Event';
import About from './components/About';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Peserta from './components/Peserta';
// import Signin from './components/auth/Signin';
// import Signup from './components/auth/SignUp';
// import reducers from './Reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// const store = createStoreWithMiddleware(reducers);

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
                    <Route exact path="/peserta" component={Peserta} />
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

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import Router from './routes';
// import './index.css';
// // import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Router />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
