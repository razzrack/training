import React from 'react';
import {
  Card, CardBody, CardImg,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from "react-router-dom";
import img1 from '../img/Influence-Generation-Forum-Maker-2019.jpg';

class MateriCard extends React.Component {
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
    let { kode_materi, nama_materi, jenis_materi, id_trainer } = this.props.event;
    return (
    <div>
        <Card className="text-center">
    {/* <CardImg src={img1} height="250px" width="250px" /> */}
            <CardBody>
                <CardTitle>
                <Link onClick={this.toggle}>{nama_materi}</Link></CardTitle>
                <CardSubtitle>{jenis_materi}</CardSubtitle>
            </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Tentang Materi</ModalHeader>
          <ModalBody>
              <p>Kode Materi : {kode_materi}</p>
              <p>Nama Materi : {nama_materi}</p>
              <p>Jenis Materi : {jenis_materi}</p>
              <p>ID Trainer : {id_trainer}</p>
              {/* <p>Tanggal dan Waktu : {tanggal} {waktu}</p>
              <p>{deskripsi}</p> */}
            </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </Modal>
    </div>
    );
  }
};

export default MateriCard;