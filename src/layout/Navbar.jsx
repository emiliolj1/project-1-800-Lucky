import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className='bgNav' data-bs-theme="dark">
        <Container fluid className='ps-3'>
          <Image height={'70rem'} src='src\assets\1-800-lucky-white-logo.png'/>
          <Navbar.Brand className='ms-2 logoFont'>1-800 LUCKY</Navbar.Brand>
          <Navbar.Toggle aria-controls='1-800-nav'/>
          <Navbar.Collapse id="1-800-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Restaurants" id="1-800-dropdown">
                <NavDropdown.Item>Usagi Tokyo</NavDropdown.Item>
                <NavDropdown.Item>Gold Marquess</NavDropdown.Item>
                <NavDropdown.Item>Jeepney</NavDropdown.Item>
                <NavDropdown.Item>Sili</NavDropdown.Item>
                <NavDropdown.Item>B-Side</NavDropdown.Item>
                <NavDropdown.Item>YIP</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Karaoke</Nav.Link>
              <NavDropdown title="Events" id="1-800-events-dropdown">
                <NavDropdown.Item>Weekly Events</NavDropdown.Item>
                <NavDropdown.Item>Private Events</NavDropdown.Item>
                <NavDropdown.Item>Past Events</NavDropdown.Item>
                <NavDropdown.Item>Catering</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar