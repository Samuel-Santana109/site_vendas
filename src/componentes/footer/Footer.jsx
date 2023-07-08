import React from "react"
import './Footer.scss'

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer class="bg-dark text-white footer">
      <Container>
        <Row>
          <Col>
            <h5>Seu Logo</h5>
            <p>Informações sobre sua empresa</p>
          </Col>
          <Col>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </Col>
          <Col>
            <h5>Contato</h5>
            <p>Endereço da sua empresa</p>
            <p>Email: info@empresa.com</p>
            <p>Telefone: (61) 9 9107-6831</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">© {new Date().getFullYear()} Seu Site. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
