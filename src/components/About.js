import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, CardImg } from 'reactstrap';
import Header from "./Header";
import Footer from "./Footer";
import logo from "./img/logo.png";

class About extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Header />
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h2>Tentang Perusahaan</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                <CardImg height="73px" width="142px" src={logo} alt="Card image cap" />
                            </Col>
                            <Col md="4">
                                
                            </Col>
                            <Col>
                                <h4>Kantor Pusat</h4>
                                <p>PT.Pindad
                                        Jl. Gatot Subroto, No 517
                                        Bandung, Indonesia, 40285
                                        Phone : +62 22 7312073
                                        Fax : +62 22 7301222
                                        info@pindad.com</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>PT. Pindad (Persero) adalah BUMN yang memiliki visi untuk menjadi
                                    produsen peralatan pertahanan dan keamanan terkemuka di Asia pada tahun 2023,
                                    melalui upaya inovasi produk dan kemitraan strategik.</p>
                            </Col>
                            <Col>
                            <h4>Kantor Perwakilan</h4>
                                <p>PT.Pindad
                                    Jl. Batu Ceper No. 28
                                    Jakarta 10120
                                    Phone : +62 21 3806929
                                    Fax : +62 21 3814039
                                    pindadjkt@pindad.com</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Footer />
            </div>
        );
    }
}
export default About;