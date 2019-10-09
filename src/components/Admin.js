import React, { Component } from 'react';
import {
    Card, CardHeader,
    CardBody, CardTitle, CardText
  } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import HeaderAdm from "./HeaderAdm";
import Footer from "./Footer";


class Admin extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3002/history_logins')
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: data })
            console.log(this.state.users)
        })
        .catch(console.log)
    }

    render() {

        // if(this.state.loggedIn === false){
        //     return <Redirect to="/"/>
        // }

        return (
            <div>
                <HeaderAdm />
                <div className="col-xs-12">
                    <h3>History Logins</h3>
                    {this.state.users && this.state.users.map((user) => (
                            <Card>
                                <CardHeader>{user.id}</CardHeader>
                                    <CardBody>
                                        <CardTitle>Email : {user.email}</CardTitle>
                                        <CardText>
                                            Password : {user.password}
                                            {/* Email Trainer : {email_trainer} */}
                                        </CardText>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                <Footer />
            </div>
        );
    }
}
export default Admin;