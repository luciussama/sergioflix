import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/footer_logo.png';
import{Link} from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="./saibamais">
        <img className = "Logo" src={Logo} alt="Logo SergioFlix" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <Link to="https://www.alura.com.br/">
          Imersão React da Alura
        </Link>
      </p>
    </FooterBase>
  );
}

export default Footer;
