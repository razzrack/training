import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import { Link } from "react-router-dom";
import user from '../img/user.png';

export default class TrainerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        nama_depan: localStorage.getItem("nama_depan"),
        nama_belakang: localStorage.getItem("nama_belakang"),
        email_akun: localStorage.getItem("email_akun")
      };
  
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  render() {
    let { nama, skill, email,
    namaMateri, jenisMateri } = this.props.pela;
    return (
    <Row>
        <Col>
            <Card className="text-center">
            <CardImg top width="100%" src={user} alt="Card image cap" />
                <Card body className="text-center">
                    <Row>
                      <Col>
                        <CardTitle>
                        <Link onClick={this.toggle}>{this.state.nama_depan} {this.state.nama_belakang}</Link></CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CardSubtitle>{skill}</CardSubtitle>
                      </Col>
                      <Col>
                      <CardSubtitle>{this.state.email_akun}</CardSubtitle>
                      </Col>
                    </Row>
                </Card>
                <Card body className="text-center">
                    <CardTitle>Acara yang akan datang : </CardTitle>
                    <CardText>{namaMateri} <br/> {jenisMateri}</CardText>
                </Card>
            </Card>
        </Col>
    </Row>
    );
  }
};
