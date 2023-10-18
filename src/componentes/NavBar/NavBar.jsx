import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function NavBar() {
  return (

        <Navbar  expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle  />
            
            <Navbar.Offcanvas
            
           
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>


  );
}

