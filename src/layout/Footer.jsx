import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Facebook, GeoAltFill, Instagram, TwitterX, Whatsapp } from "react-bootstrap-icons"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return(
    <>
      <Navbar className='bgNav' data-bs-theme="dark">
        <Container fluid className='flex-column py-3 px-2 align-items-center'>
          <Col className='container-fluid '>
            <Nav className='flex-column mx-auto w-auto p-0'>
              <Image
                height={"100rem"}
                width={"100rem"}
                className='mt-3 mx-auto'
                src='src\assets\1-800-lucky-white-logo.png'
              />
              <Navbar.Brand className='p-0 mx-auto logoFont mt-2'>1-800 LUCKY</Navbar.Brand>
              <p className='mx-auto text-light fs-6'>(11) 234 4324 234 | lucky@gmail.com</p>
            </Nav>
          </Col>
          <Col className='container-fluid d-flex justify-content-center'>
            <Nav className='fs-5 gap-3 mb-4 mt-4 font'>
              <Nav.Link className='text-light'>Gallery</Nav.Link>
              <Nav.Link className='text-light pb-3'>FAQ</Nav.Link>
              <Nav.Link className='text-light'>About Us</Nav.Link>
            </Nav>
          </Col>
          <Col className='container-fluid d-flex justify-content-center'>
            <Nav className='fs-3 text-light gap-3 mb-5'>
              <GeoAltFill/>
              <Facebook/>
              <Instagram/>
              <TwitterX/>
              <Whatsapp/>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer