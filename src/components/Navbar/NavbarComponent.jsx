import React from "react";
import logo  from "../../img/logo2.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css';
const NavbarComponent = () => {

  return (
    <>
    <Navbar collapseOnSelect  expand="lg" className="custom-navbar" data-bs-theme="dark" fixed="top" >
    <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Revlis Limited
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Item>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#service">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#testimonial">Testimonials</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
};

export default NavbarComponent;
