import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col } from 'reactstrap';
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
            ]
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3002/trainers/'
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({ trainers: data })
            console.log(this.state.trainers)
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
                                    </Col>
                                </Row>
                                <Row form className="ml-4 mt-2">
                                    <Col md={4}>
                                        <FormGroup>
                                            <Input type="search"
                                                name="searchTrainer"
                                                id="searchTrainer"
                                                placeholder="Cari Trainer"
                                                className="ml-5 mb-2 mr-sm-2 mb-sm-0"/>
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
                <Footer />
            </div>
        );
    }
}
export default Trainer;