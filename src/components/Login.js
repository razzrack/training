import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Label,
    ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
        };
    }

    showLoginBox(){
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }

    showRegisterBox(){
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    render() {
        return (
            <div className="root-container">
                <div className="box-controller">
                    <ButtonGroup>
                        <Button className={"controller" +
                            (this.state.isLoginOpen
                                ? "selected-controller" : "")}
                                onClick={this
                                .showLoginBox
                                .bind(this)}>
                                Login
                        </Button>
                        <Button className={"controller" +
                            (this.state.isRegisterOpen
                                ? "selected-controller" : "")}
                                onClick={this
                                .showRegisterBox
                                .bind(this)}>
                                Register
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox/>}
                    {this.state.isRegisterOpen && <RegisterBox/>}
                </div>
            </div>
          );
    }
}

//Login Box
class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      let loggedIn = false
      this.state = {
        accounts: [],
        email: '',
        password: '',
        errors: [],
        loggedIn
      }
    }

    componentDidMount() {
        fetch('http://localhost:3002/accounts')
        .then(res => res.json())
        .then((data) => {
            this.setState({ accounts: data })
            console.log(this.state.accounts)
        })
        .catch(console.log)
    }
    
    // state = {
    //   email: '',
    //   password: '',
    //   errors: [],
    //   loggedIn: false
    // };

    // handleChange = (event) => {
    //     const input = event.target;
    //     const values = input.type === 'password' ? input.checked : input.value;

    //     this.setState({ [input.name]: values });
    // }

    // handleFormSubmit = () =>{
    //     const { user, rememberMe } = this.state;
    //     localStorage.setItem('rememberMe', rememberMe);
    //     localStorage.setItem('user', rememberMe ? user : '');
    // };

    showValidationErr(elm, msg) {
        this.setState((prevState) => ( { errors: [...prevState.errors, { elm, msg }] } ));
      }
  
      clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for(let err of prevState.errors) {
                if(elm !== err.elm) {
                  newArr.push(err);
                }
            }
            return {errors: newArr};
        });
      }
  
      onEmailChange(e) {
          this.setState({ email: e.target.value});
          this.clearValidationErr("email");
      }
  
      onPasswordChange(e) {
          this.setState({ password: e.target.value});
          this.clearValidationErr("password");
  
          this.setState({pwdState: "weak"});
          if (e.target.value.length > 8) {
              this.setState({pwdState: "medium"});
          } else if (e.target.value.length > 12) {
              this.setState({pwdState: "strong"});
          }
      }
      
  
      submitLogin = (e) => {
        e.preventDefault();
        let email = "email";
        let password = "password";
        const url = 'http://localhost:3002/history_logins/'
        const dataHistory =  {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(url, dataHistory)
        .then(res => console.log(res.data));
        // localStorage.setItem(email, this.state.email)
        // localStorage.setItem(password, this.state.password)
        
        // if(this.state.email === localStorage.getItem("email_akun" 
        // && this.state.password === localStorage.getItem("password_akun"))) {
        if(this.state.email==="nama" && this.state.password==="nama") {
            localStorage.setItem(email, this.state.email)
            localStorage.setItem(password, this.state.password)
            this.setState({
                loggedIn: true
            })
        }

        this.setState({
            email: "",
            password: ""
        })
        

    }

    //     //   e.preventDefault()
        //   console.log(this.state);
          
        //   if(this.state.email ==="admin@gmail.com" && this.state.password === "admin123") {
        //     localStorage.setItem("token", "asdadaasd")
        //     this.setState({
        //         loggedIn: true
        //     })
        //   } else {
        //       if(this.state.email === "") {
        //         this.showValidationErr("email", "Email tidak boleh kosong!")  
        //       } if(this.state.password === "") {
        //         this.showValidationErr("password", "Password tidak boleh kosong!")
        //       }
        //   }
  
    render() {
        let emailErr = null,
        passwordErr = null;

        for(let err of this.state.errors) {
            if(err.elm === "email") {
                emailErr = err.msg;
            } if(err.elm === "password") {
                passwordErr = err.msg;
            }
        }

        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        
        return (
            <div className="inner-container">
          <ListGroup>
            <ListGroupItem>
                <Label for="labelLogin">Login</Label>
            </ListGroupItem>
            <ListGroupItem>
                <Form onSubmit={this.submitForm}>
                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input
                            type="text"
                            name="email"
                            id="login-input"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this
                                .onEmailChange
                                .bind(this)}
                        />
                        <small className="danger-error">{emailErr
                            ? emailErr
                            : ""}
                        </small>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="login-input"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this
                                .onPasswordChange
                                .bind(this)}
                                />
                        <small className="danger-error">{passwordErr
                            ? passwordErr
                            : ""}
                        </small>
                    </FormGroup>
                    <Button onClick={this
                        .submitLogin
                        .bind(this)}>Login</Button>
                </Form>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    }  
}

//Register Box
class RegisterBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nama_depan: "",
            nama_belakang: "",
            email_akun: "",
            password_akun: "",
            errors: [],
            pwdState: null,
        };
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);

    }
    

    showValidationErr(elm, msg) {
      this.setState((prevState) => ( { errors: [...prevState.errors, { elm, msg }] } ));
    }

    clearValidationErr(elm) {
      this.setState((prevState) => {
          let newArr = [];
          for(let err of prevState.errors) {
              if(elm !== err.elm) {
                newArr.push(err);
              }
          }
          return {errors: newArr};
      });
    }

    onFirstNameChange(e) {
        this.setState({ nama_depan: e.target.value });
        this.clearValidationErr("nama_depan");
    }

    onLastNameChange(e) {
        this.setState({ nama_belakang: e.target.value});
        this.clearValidationErr("nama_belakang");
    }

    onEmailChange(e) {
        this.setState({ email_akun: e.target.value});
        this.clearValidationErr("email_akun");
    }

    onPasswordChange(e) {
        this.setState({ password_akun: e.target.value});
        this.clearValidationErr("password_akun");

        this.setState({pwdState: "weak"});
        if (e.target.value.length > 8) {
            this.setState({pwdState: "medium"});
        } else if (e.target.value.length > 12) {
            this.setState({pwdState: "strong"});
        }
    }
  
    onSubmitRegister = (e) => {
        e.preventDefault();
        const url = 'http://localhost:3002/accounts/'
        const dataAccount =  {
            nama_depan: this.state.nama_depan,
            nama_belakang: this.state.nama_belakang,
            email_akun: this.state.email_akun,
            password_akun: this.state.password_akun
        }
        axios.post(url, dataAccount)
        .then(res => console.log(res.data));
        
        if(this.state.nama_depan === "") {
          this.showValidationErr("nama_depan", "Nama Depan tidak boleh kosong!")
        } 
        if(this.state.nama_belakang === "") {
          this.showValidationErr("nama_belakang", "Nama Belakang tidak boleh kosong!")
        }
        if(this.state.email_akun === "") {
          this.showValidationErr("email_akun", "Email tidak boleh kosong!")  
        }
        if(this.state.password_akun === "") {
          this.showValidationErr("password_akun", "Password tidak boleh kosong!")
        }

        this.setState({
            nama_depan: "",
            nama_belakang: "",
            email_akun: "",
            password_akun: ""
        })

    }

    render() {
      let firstnameErr = null,
        lastnameErr = null,
        emailErr = null,
        passwordErr = null;

      for(let err of this.state.errors) {
          if(err.elm === "firstname") {
            firstnameErr = err.msg;
          } if(err.elm === "lastname") {
            lastnameErr = err.msg;
          } if(err.elm === "email") {
            emailErr = err.msg;
          } if(err.elm === "password") {
            passwordErr = err.msg;
          }
      }

    let pwdWeak = false,
        pwdMedium = false,
        pwdStrong = false;
    
    if (this.state.pwdState === "weak") {
        pwdWeak = true;
    } else if (this.state.pwdState === "medium") {
        pwdWeak = true;
        pwdMedium = true;
    } else if (this.state.pwdState === "strong") {
        pwdWeak = true;
        pwdMedium = true;
        pwdStrong = true;
    }

      return (
        <div className="inner-container">
          <ListGroup>
            <ListGroupItem>
                <Label for="labelLogin">Register</Label>
            </ListGroupItem>
            <ListGroupItem>
                <Form 
                // onSubmit={this.onSubmitRegister}
                >
                    <FormGroup>
                        <Label for="firstname">Nama Depan</Label>
                        <Input
                            type="text"
                            name="firstname"
                            id="login-input"
                            placeholder="Nama Depan"
                            value={this.state.nama_depan}
                            onChange={this
                                .onFirstNameChange
                                .bind(this)}
                        />
                        <small className="danger-error">{firstnameErr
                            ? firstnameErr
                            : ""}
                        </small>
                        {/* <FormFeedback>
                            { fullnameErr ? fullnameErr : ""}
                        </FormFeedback> */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Nama Belakang</Label>
                        <Input
                            type="text"
                            name="lastname"
                            id="login-input"
                            placeholder="Nama Belakang"
                            value={this.state.nama_belakang}
                            onChange={this
                                .onLastNameChange
                                .bind(this)}
                        />
                        <small className="danger-error">{lastnameErr
                            ? lastnameErr
                            : ""}
                        </small>
                        {/* <FormFeedback>
                            { fullnameErr ? fullnameErr : ""}
                        </FormFeedback> */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input
                            type="text"
                            name="email"
                            id="login-input"
                            placeholder="Email Address"
                            value={this.state.email_akun}
                            onChange={this
                                .onEmailChange
                                .bind(this)}
                        />
                        <small className="danger-error">{emailErr
                            ? emailErr
                            : ""}
                        </small>
                        {/* <FormFeedback>
                            { emailErr ? emailErr : ""}
                        </FormFeedback> */}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="login-input"
                            placeholder="Password"
                            value={this.state.password_akun}
                            onChange={this
                                .onPasswordChange
                                .bind(this)}
                        />
                        <small className="danger-error">{passwordErr
                            ? passwordErr
                            : ""}
                        </small>

                        {this.state.password && <div className="password-state">
                            <div
                                className={"pwd pwd-weak" + (pwdWeak
                                    ? "show"
                                    : "")}></div>
                            <div
                                className={"pwd pwd-medium" + (pwdMedium
                                    ? "show"
                                    : "")}></div>
                            <div
                                className={"pwd pwd-strong" + (pwdStrong
                                    ? "show"
                                    : "")}></div>
                        </div>}
                        {/* <FormFeedback>
                            { passwordErr ? passwordErr : ""}
                        </FormFeedback> */}
                    </FormGroup>
                    <Button
                        onClick={this.onSubmitRegister}
                        >Register</Button>
                    </Form>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    }
}

export default Login;