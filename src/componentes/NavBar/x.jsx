import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function navBar() {
  return (
        <Navbar fluid data-bs-theme="dark" className='bg-transparent' >
          <Container  className='d-flex justify-content-center'>

            <Navbar.Brand href="#home">TECH WORLD</Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#features">BLOG</Nav.Link>
              <Nav.Link href="#pricing">SERVICES</Nav.Link>
              <Nav.Link href="#pricing">ABOUT</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  );
}


