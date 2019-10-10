import React, { Component } from 'react';
import {
    Card, CardHeader,
    CardBody, CardTitle, CardText, Jumbotron, Container
  } from 'reactstrap';
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        users: [],
        materis: []
    }

    componentDidMount() {
        fetch('http://localhost:3002/accounts')
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: data })
            console.log(this.state.users)
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <Header />
                <Jumbotron fluid>
                    <Container fluid>

                    </Container>
                </Jumbotron>
                {/* <div className="container">
                    <div className="col-xs-12">
                    <h1>Accounts</h1>
                    {this.state.users && this.state.users.map((user) => (
                        <Card>
                            <CardHeader>{user.id}</CardHeader>
                                <CardBody>
                                    <CardTitle>{user.nama_depan} {user.nama_belakang}</CardTitle>
                                    <CardText>
                                        Email : {user.email_akun}
                                        {/* Email Trainer : {email_trainer} 
                                    </CardText>
                            </CardBody>
                        </Card>
                    ))}
                    </div>
                </div> */}
                <Footer />
            </div>
        );
    }
}
export default Home;