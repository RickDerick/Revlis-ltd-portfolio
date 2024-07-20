import React from "react";
import logo from "../../img/logo2.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">
            <img
              alt="Revlis Engineering Limited"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="full-text d-none d-lg-inline">Revlis Engineering Limited</span>
            <span className="short-text d-inline d-lg-none">Revlis Eng. Ltd</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
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
              <div className="social-icons-wrapper">
                <Nav className="social-icons">
                  <Nav.Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={20} color="white" />
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} color="white" />
                  </Nav.Link>
                  <Nav.Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={20} color="white" />
                  </Nav.Link>
                </Nav>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
