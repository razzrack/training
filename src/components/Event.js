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
import MateriCard from './cards/MateriCard';
import ProfileCard from './cards/ProfileCard';

class Event extends Component {
    constructor(){
        super();
        this.state = {
            materi: [],
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
            mats: [],
            kode_materi: "",
            nama_materi: "",
            jenis_materi: "",
            id_trainer: 0
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    componentDidMount() {
        const url = 'http://localhost:3002/materis/'
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({ materi: data })
            console.log(this.state.materi)
        })
        
    }

    onKodeMateriChange(e) {
        this.setState({ kode_materi: e.target.value });
    }

    onNamaMateriChange(e) {
        this.setState({ nama_materi: e.target.value});
    }

    onJenisMateriChange(e) {
        this.setState({ jenis_materi: e.target.value});
    }

    onIDTrainerChange(e) {
        this.setState({ id_trainer: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:3002/accounts/1/materis'
        const dataMateri =  {
            kode_materi: this.state.kode_materi,
            nama_materi: this.state.nama_materi,
            jenis_materi: this.state.jenis_materi,
            id_trainer: this.state.id_trainer
        }
        axios.post(url, dataMateri)
        .then(res => console.log(res.data));
        
        this.setState({
            kode_materi: "",
            nama_materi: "",
            jenis_materi: "",
            id_trainer: 0
        })

    }

    render() {
        let materiCard = this.state.materi.map(event => {
            return (
                <Col>
                    <MateriCard event={event} />
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
        let matsData = this.state.mats.map(mat => {
            return (
                <Col>
                    <Card>
                            <CardHeader>{mat.kode_materi}</CardHeader>
                                <CardBody>
                                    <CardTitle>{mat.nama_materi}</CardTitle>
                                    <CardText>
                                       {mat.jenis_materi}
                                        {/* Email Trainer : {email_trainer} */}
                                    </CardText>
                            </CardBody>
                        </Card>
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
                                        <h3>Materi</h3>
                                        <Button onClick={this.toggle}>Tambah Data</Button>
                                    </Col>
                                </Row>
                                <Row form className="ml-4 mt-2">
                                    <Col md={4}>
                                        <FormGroup>
                                            {/* <Input type="search"
                                                name="searchMateri"
                                                id="searchMateri"
                                                placeholder="Cari Materi"
                                                className="ml-5 mb-2 mr-sm-2 mb-sm-0"/> */}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    {materiCard}
                                </Row>
                            </Col>
                            <Col sm={3}>
                                {profileCard}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                    {/* {matsData} */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Tambah Materi</ModalHeader>
                        <ModalBody>
                        <ListGroupItem>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="kodemateri">Kode Materi</Label>
                                    <Input
                                        type="text"
                                        name="kodemateri"
                                        id="materi-input"
                                        placeholder="Kode Materi"
                                        onChange={this
                                            .onKodeMateriChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup>
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
                                </FormGroup>
                                <FormGroup>
                                <Label for="idtrainer">ID Trainer</Label>
                                    <Input
                                        type="text"
                                        name="idtrainer"
                                        id="materi-input"
                                        placeholder="ID Trainer"
                                        onChange={this
                                            .onIDTrainerChange
                                            .bind(this)}
                                    />
                                </FormGroup>
                                <Button to="/event"
                                    // onClick={this
                                    // .submitRegister
                                    // .bind(this)}
                                    >Tambah</Button>
                                </Form>
                        </ListGroupItem>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                    {/* <ListGroup>
                        <ListGroupItem>
                            <Label for="labelLogin">Add Materi</Label>
                        </ListGroupItem>
                        
                    </ListGroup> */}
                <Footer />
            </div>
        );
    }
}
export default Event;


// {
//     kode: "10101",
//     nama: "Influence Generation Forum Maker",
//     jenis: "Startup",
//     tanggal: "4 Agustus 2019",
//     waktu: "09:00 - 17.00 WIB",
//     deskripsi: "Influence Generation Festival an event by Kreasi Semesta and collaboration with Harris Hotel Citylink Bandung are the festival created by millenials to millenials. Pendaftaran melalui: bit.ly/igfm2019",
//     image: "https://i.ibb.co/Krnzdng/Influence-Generation-Forum-Maker-2019.jpg"
// },
// {
//     kode: "10102",
//     nama: "Startup Founding Seminar",
//     jenis: "Startup",
//     tanggal: "4 Agustus 2019",
//     waktu: "09:00 - 17.00 WIB",
//     deskripsi: "Influence Generation Festival an event by Kreasi Semesta and collaboration with Harris Hotel Citylink Bandung are the festival created by millenials to millenials. Pendaftaran melalui: bit.ly/igfm2019",
//     image: "ttps://i.ibb.co/rxZ3c8B/seminar-startup.jpg"
// },
// {
//     kode: "10103",
//     nama: "LIKMI Carrer Day",
//     jenis: "Bursa Kerja",
//     tanggal: "4 Agustus 2019",
//     waktu: "09:00 - 17.00 WIB",
//     deskripsi: "Influence Generation Festival an event by Kreasi Semesta and collaboration with Harris Hotel Citylink Bandung are the festival created by millenials to millenials. Pendaftaran melalui: bit.ly/igfm2019",
//     image: "https://i.ibb.co/wSTg8yG/likmi-career.jpg"
// }