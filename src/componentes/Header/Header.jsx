//Rotas
//import { Link } from 'react-router-dom';

//Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Imagens
import Image from 'react-bootstrap/Image';

//Css
import './Header.scss'


function Header() {
  return (
    <Navbar expand="lg" className="text-white">
      
    <Container fluid className="text-white">
      <Navbar.Brand href="#" >
        <Image src="https://cdn-icons-png.flaticon.com/128/1829/1829892.png" alt="Logo" roundedCircle />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />

      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0 navBar" navbarScroll>
        <Nav.Link href="http://localhost:5175/site_vendas/Home">Home</Nav.Link>
          <Nav.Link href="#">Login</Nav.Link>

          <NavDropdown title="Paginas" id="navbarScrollingDropdown">
            <NavDropdown.Item href="http://localhost:5175/site_vendas/PaginaDevs">Cursos de desevolvimento</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Cursos de Linguas</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Cursos Intert</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://localhost:5175/site_vendas/Investimentos">Cursos de Investimentos</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#" disabled>
              Contato
          </Nav.Link>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;


















