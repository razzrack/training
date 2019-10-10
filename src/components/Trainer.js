import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import TrainerCard from './cards/TrainerCard';
import ProfileCard from './cards/ProfileCard';

class Trainer extends Component {
    constructor(){
        super();
        this.state = {
            trainers: [],
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
            ],
            modal: false,
            id_trainer: "",
            nama_trainer: "",
            skill_trainer: "",
            email_trainer: "",
            password_trainer: ""
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    componentDidMount() {
        const url = 'http://localhost:3002/trainers/'
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({ trainers: data })
            console.log(this.state.trainers)
        })
        
    }

    onIDTrainerChange(e) {
        this.setState({ id_trainer: e.target.value });
    }

    onNamaTrainerChange(e) {
        this.setState({ nama_trainer: e.target.value });
    }

    onSkillTrainerChange(e) {
        this.setState({ skill_trainer: e.target.value});
    }

    onEmailTrainerChange(e) {
        this.setState({ email_trainer: e.target.value});
    }

    onPasswordTrainerChange(e) {
        this.setState({ password_trainer: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:3002/trainers'
        const dataTrainer =  {
            id_trainer: this.state.id_trainer,
            nama_trainer: this.state.nama_trainer,
            skill_trainer: this.state.skill_trainer,
            email_trainer: this.state.email_trainer,
            password_trainer: this.state.password_trainer
        }
        axios.post(url, dataTrainer)
        .then(res => console.log(res.data));
        
        this.setState({
            id_trainer: "",
            nama_trainer: "",
            skill_trainer: "",
            email_trainer: "",
            password_trainer: ""
        })

    }

    // componentDidMount() {
    //     fetch('http://localhost:3002/accounts')
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ accounts: data })
    //     })
    //     .catch(console.log)
    //   }

    render() {
        let trainerCard = this.state.trainers.map(trainer => {
            return (
                <Col>
                    <TrainerCard trainer={trainer} />
                </Col>
            )
        })
        let profileCard = this.state.pelatih.map(pela => {
            return (
                <Col>
                    <ProfileCard pela={pela} />
                </Col>
            )
        })
        return (
            <div>
                <Header />
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col md={9}>
                                <Row className="ml-5">
                                    <Col>
                                        <h3>Trainer</h3>
                                        <Button onClick={this.toggle}>Tambah Data</Button>
                                    </Col>
                                </Row>
                                <Row form className="ml-4 mt-2">
                                    <Col md={4}>
                                        <FormGroup>
                                            {/* <Input type="search"
                                                name="searchTrainer"
                                                id="searchTrainer"
                                                placeholder="Cari Trainer"
                                                className="ml-5 mb-2 mr-sm-2 mb-sm-0"/> */}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    {trainerCard}
                                </Row>
                            </Col>
                            <Col sm={3}>
                                {profileCard}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Tambah Trainer</ModalHeader>
                        <ModalBody>
                        <ListGroupItem>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="id_trainer">ID Trainer</Label>
                                    <Input
                                        type="text"
                                        name="id_trainer"
                                        id="materi-input"
                                        placeholder="ID Trainer"
                                        onChange={this
                                            .onIDTrainerChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="nama_trainer">Nama Trainer</Label>
                                        <Input
                                            type="text"
                                            name="nama_trainer"
                                            id="materi-input"
                                            placeholder="Nama Trainer"
                                            onChange={this
                                                .onNamaTrainerChange
                                                .bind(this)}
                                        />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="skill_trainer">Skill Trainer</Label>
                                        <Input
                                            type="text"
                                            name="skill_trainer"
                                            id="materi-input"
                                            placeholder="Skill Trainer"
                                            onChange={this
                                                .onSkillTrainerChange
                                                .bind(this)}
                                        />
                                </FormGroup>
                                <FormGroup>
                                <Label for="email_trainer">Email Trainer</Label>
                                    <Input
                                        type="text"
                                        name="email_trainer"
                                        id="materi-input"
                                        placeholder="Email Trainer"
                                        onChange={this
                                            .onEmailTrainerChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                <Label for="password_trainer">Password Trainer</Label>
                                    <Input
                                        type="text"
                                        name="password_trainer"
                                        id="materi-input"
                                        placeholder="Password Trainer"
                                        onChange={this
                                            .onPasswordTrainerChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <Button
                                    // onClick={this
                                    // .submitRegister
                                    // .bind(this)}
                                    >
                                    <Redirect to="/trainer"/>
                                        Tambah</Button>
                                </Form>
                        </ListGroupItem>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                <Footer />
            </div>
        );
    }
}
export default Trainer;