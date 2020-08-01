import React, {useState, setShow, Button} from 'react';
import { FooterBase } from './styles';
import Logo from  '../../assets/img/footer_logo.png';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';


function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <FooterBase>
      <button class="primary" onClick={handleShow}>
        <img className="Logo" src={Logo} alt="SergioFlix" />
      </button>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      </FooterBase>
      
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Sobre</ModalTitle>
        </ModalHeader>
        <ModalBody>Para saber mais informações: 
          E-mail: sergiogarciabr@hotmail.com
          GitHub: tenho, mas não sei qual é!</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </>
    
  );
}

export default Footer;
