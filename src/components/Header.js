import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from "./Login";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          modal: false
        };

        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
      }
    //   toggle() {
    //     this.setState(prevState => ({
    //       modal: !prevState.modal
    //     }));
    //   }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand><Link to="/">Pelatihan</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem className="mr-4">
                                <Link to="/">Home</Link>
                            </NavItem> */}
                            <NavItem className="mr-4">
                                <Link to="/trainer">Trainer</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/event">Event</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/about">About</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/peserta">Daftar</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link onClick={this.toggle}>Login/Register</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login/Register</ModalHeader>
                    <ModalBody>
                        <Login />
                        {/* <Row>
                            <Col className="ml-3 mr-3">
                            <Form>
                            <h5>Form Login</h5>
                                <FormGroup row>
                                    <Col md={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                    <Col md={10}>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </Col>
                                    </FormGroup>
                                    <Button color="primary" to="/home">Login</Button>
                            </Form>
                            </Col>
                            <Col className="mr-3">
                            <Form>
                                <h5>Form Daftar</h5>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </Col>
                                </FormGroup>
                                <Button color="primary" to="/home">Signup</Button>
                            </Form>
                            </Col>
                        </Row> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                {/* <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacts</Link>
                    </li>
                </ul> */}
            </div>
        );
    }
}
export default Header;