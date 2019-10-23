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

class FormPeserta extends Component {
    constructor(){
        super();
        this.state = {
            nama_peserta: "",
            email_peserta: "",
            no_hp: ""
        }
    }

    // componentDidMount() {
    //     const url = 'http://localhost:3002/trainers/'
    //     axios.get(url).then(response => response.data)
    //     .then((data) => {
    //         this.setState({ trainers: data })
    //         console.log(this.state.trainers)
    //     })
        
    // }

    onNamaPesertaChange(e) {
        this.setState({ nama_peserta: e.target.value });
    }

    onEmailTrainerChange(e) {
        this.setState({ email_peserta: e.target.value});
    }

    onNoHpChange(e) {
        this.setState({ no_hp: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:3002/peserta'
        const dataTrainer =  {
            nama_peserta: this.state.nama_peserta,
            email_peserta: this.state.email_peserta,
            no_hp: this.state.no_hp
        }
        axios.post(url, dataTrainer)
        .then(res => console.log(res.data));
        
        this.setState({
            nama_peserta: "",
            email_peserta: "",
            no_hp: ""
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
        // let trainerCard = this.state.trainers.map(trainer => {
        //     return (
        //         <Col>
        //             <TrainerCard trainer={trainer} />
        //         </Col>
        //     )
        // })
        // let profileCard = this.state.pelatih.map(pela => {
        //     return (
        //         <Col>
        //             <ProfileCard pela={pela} />
        //         </Col>
        //     )
        // })
        return (
            <div>
                <Header />
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col md={9}>
                                <Row className="ml-5">
                                    <Col>
                                        <h3>Form Peserta</h3>
                                    </Col>
                                </Row>
                                <Row form className="ml-4 mt-2">
                                    <Col md={4}>
                                    <ListGroupItem>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="nama_peserta">Nama Peserta</Label>
                                    <Input
                                        type="text"
                                        name="nama_peserta"
                                        id="materi-input"
                                        placeholder="Nama Peserta"
                                        onChange={this
                                            .onNamaPesertaChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                <Label for="email_peserta">Email Peserta</Label>
                                    <Input
                                        type="text"
                                        name="email_trainer"
                                        id="materi-input"
                                        placeholder="Email Peserta"
                                        onChange={this
                                            .onEmailTrainerChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                <Label for="no_hp">No HP</Label>
                                    <Input
                                        type="text"
                                        name="password_trainer"
                                        id="materi-input"
                                        placeholder="No HP"
                                        onChange={this
                                            .onNoHpChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <Button
                                    // onClick={this
                                    // .submitRegister
                                    // .bind(this)}
                                    >
                                    <Redirect to="/event"/>
                                        Tambah</Button>
                                </Form>
                        </ListGroupItem>
                                    </Col>
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
export default FormPeserta;