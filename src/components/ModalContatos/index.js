import React, {useState} from 'react';
import styled from 'styled-components';
//Classes do Modal
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import Dialog from 'react-bootstrap/ModalDialog';
import Header from 'react-bootstrap/ModalHeader';
import Title from 'react-bootstrap/ModalTitle';
import Body from 'react-bootstrap/ModalBody';
import Footer from 'react-bootstrap/ModalFooter';


const Main = styled.main`
background-color: var(--brown);
color:var(--white);
padding-top:50px;
padding-left: 5%;
padding-right: 5%;
`;



function ModalContatos(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal show={true} onHide={handleClose}>
          <Header>
            <Title>Saiba mais.</Title>
          </Header>
          <Body><b>Informações sobre o Sérgio</b>
          E-mail: sergiogarciabr@hotmail.com
          LinkedIn: xxxxx@linkedin(sei lá)
          </Body>
          <Footer>
            <Button variant="secondary" show={false}>
              Voltar
            </Button>
           </Footer>
        </Modal>
      </>
    );
  }

export default ModalContatos;