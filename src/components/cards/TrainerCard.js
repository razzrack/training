import React from 'react';
import {
  Card, CardBody, CardImg,
  CardTitle, CardSubtitle, Modal,
  ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from "react-router-dom";
import user from '../img/user.png';

class TrainerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    let { id_trainer, nama_trainer, skill_trainer, email_trainer, password_trainer } = this.props.trainer;
    return (
    <div>
        {/* {this.state.accounts.map((account) => (
        <div> */}
          <Card className="text-center">
          <CardImg src={user}/>
              <CardBody>
                  <CardTitle>
                  <Link onClick={this.toggle}>{nama_trainer}</Link>
                  </CardTitle>
                  <CardSubtitle>{skill_trainer}</CardSubtitle>
              </CardBody>
          </Card>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Tentang Trainer</ModalHeader>
            <ModalBody>
              <p>ID Trainer : {id_trainer}</p>
              <p>Nama Trainer : {nama_trainer}</p>
              <p>Skill Trainer : {skill_trainer}</p>
              <p>Email Trainer : {email_trainer}</p>
              <p>Password Trainer : {password_trainer}</p>
            </ModalBody>
            <ModalFooter>
              <Link to="/profile">Detail Profile</Link>
            </ModalFooter>
          </Modal>
        {/* </div>
        ))}    */}
    </div>
    )
  }
};

export default TrainerCard;