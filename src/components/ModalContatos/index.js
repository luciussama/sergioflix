import React, {useState} from 'react';
import styled from 'styled-components';
import './index.css';

//Classes do Modal
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import Dialog from 'react-bootstrap/ModalDialog';
import Header from 'react-bootstrap/ModalHeader';
import Title from 'react-bootstrap/ModalTitle';
import Body from 'react-bootstrap/ModalBody';
import Footer from 'react-bootstrap/ModalFooter';



const ModalMain = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Fechar</button>
      </section>
    </div>
  );
};

export default ModalMain;