import React from 'react';
import CardFooter from 'react-bootstrap/CardFooter';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Ensure to import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <CardFooter className="bg-dark text-white footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <p className="text-center">&copy; {currentYear} Revlis Engineering Limited</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end mt-3 mt-md-0">
            <a href="/" className="text-decoration-none text-white">Home</a> |{' '}
            <a href="#about-us" className="text-decoration-none text-white">About</a> |{' '}
            <a href="#contact" className="text-decoration-none text-white">Contact</a>
          </Col>
        </Row>
      </Container>
    </CardFooter>
  );
};

export default Footer;
