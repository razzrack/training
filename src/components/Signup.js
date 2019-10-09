import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../redux/actions';

class Signup extends Component {
  state = {
    nama_depan: "",
    nama_belakang: "",
    email_akun: "",
    password_akun: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Nama Depan</label>
          <input
            name='nama_depan'
            placeholder='Nama Depan'
            value={this.state.nama_depan}
            onChange={this.handleChange}
            /><br/>

        <label>Nama Belakang</label>
          <textarea
            name='nama_belakang'
            placeholder='Nama Belakang'
            value={this.state.nama_belakang}
            onChange={this.handleChange}
            /><br/>

        <label>Email</label>
        <input
          name='email_akun'
          placeholder='Email'
          value={this.state.email_akun}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password_akun'
          placeholder='Password'
          value={this.state.password_akun}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);