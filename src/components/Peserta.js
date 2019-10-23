import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
    FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form, Table } from 'reactstrap';
import Header from "./Header";
import Footer from "./Footer";

export default class Peserta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama_peserta: "",
            email_peserta: "",
            no_hp: ""
        }

    //   toggle() {
    //     this.setState(prevState => ({
    //       modal: !prevState.modal
    //     }));
    //   }
    }

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

    render() {
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
                                    {/* <Redirect to="/event"/> */}
                                        Tambah</Button>
                                </Form>
                            </ListGroupItem>
                                    </Col>
                                    <Col>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama Peserta</th>
                                                    <th>Email Peserta</th>
                                                    <th>No HP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
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
