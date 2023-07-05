import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Imagens
import Image from 'react-bootstrap/Image';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>

        <Navbar.Brand href="#">
              <Image src="https://cdn-icons-png.flaticon.com/128/1829/1829892.png" alt='Logo' roundedCircle />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Increva-se</Nav.Link>

            <NavDropdown title="Paginas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Cursos para desenvolvedores web e app</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                    Cursos de Vendas e Persuasao
              </NavDropdown.Item>

              <NavDropdown.Item href="#action5">
                    Cursos de Marketing Digital e Afiliados
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action">
                    Cursos para Traders
              </NavDropdown.Item>
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


















