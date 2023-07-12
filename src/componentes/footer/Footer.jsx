import React from "react"
import './Footer.scss'

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer class="bg-dark text-white footer">
      <Container>
        <Row>
          <Col>
            <h5>Tech World</h5>
            <p>Somos uma empresa onde vendemos produtos,cursos e muitas outros produtos para o crescimento do cliente e temos inumeras parcerias nos te fornecemos tudo com a melhor qualidade</p>
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
            <p>Estamos Totalmente Online</p>
            <p>Email: techWorld@gmail.com</p>
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
