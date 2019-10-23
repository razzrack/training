import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import Header from "./Header";
import HeaderAdm from "./HeaderAdm";
import Footer from "./Footer";
import ProfileCard from './cards/ProfileCard';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelatih: [
                {
                    id: "190910104",
                    nama: "Adi Nugraha",
                    skill: "Public Speaker",
                    email: "adi@gmail.com",
                    kodeMateri: "10103",
                    namaMateri: "Manajemen Waktu",
                    jenisMateri: "Motivasi"
                }
            ]
        }
    }

    state = {
        // users: [],
        // materis: []
        user: '',
        rememberMe: false
    }

    handleChange = (event) => {
        const input = event.target;
        const values = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: values });
    }

    handleFormSubmit = () =>{
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    };

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
        let profileCard = this.state.pelatih.map(pela => {
            return (
                <Col>
                    <ProfileCard pela={pela} />
                </Col>
            )
        })
        return (
            <div>
                <HeaderAdm />
                    <Jumbotron fluid>
                        <Container fluid>
                            <Row>
                                <Col sm={3}>
                                    {profileCard}
                                </Col>
                                <Col md={9}>
                                    <Row className="ml-5">
                                        <Col>
                                            <h3>Profile</h3>
                                        </Col>
                                    </Row>
                                    {/* <Row form className="ml-4 mt-2">
                                        <Col md={4}>
                                            <FormGroup>
                                                <Input type="search"
                                                    name="searchTrainer"
                                                    id="searchTrainer"
                                                    placeholder="Cari Trainer"
                                                    className="ml-5 mb-2 mr-sm-2 mb-sm-0"/>
                                            </FormGroup>
                                        </Col>
                                    </Row> */}
                                    <Row className="ml-5 mt-2">
                                        <Jumbotron fluid>
                                            <Container fluid>
                                                {/* <FormGroup>
                                                    <Label for="namamateri">Nama Materi</Label>
                                                        <Input
                                                            type="text"
                                                            name="namamateri"
                                                            id="materi-input"
                                                            placeholder="Nama Materi"
                                                            onChange={this
                                                                .onNamaMateriChange
                                                                .bind(this)}
                                                        />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="jenismateri">Jenis Materi</Label>
                                                        <Input
                                                            type="text"
                                                            name="jenismateri"
                                                            id="materi-input"
                                                            placeholder="Jenis Materi"
                                                            onChange={this
                                                                .onJenisMateriChange
                                                                .bind(this)}
                                                        />
                                                </FormGroup> */}                                                
                                            </Container>
                                        </Jumbotron>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                <Footer />
            </div>
        );
    }
}
export default Profile;