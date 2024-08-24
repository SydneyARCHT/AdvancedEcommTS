import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a fictional e-commerce site bringing you the best products and the most thrilling online shopping experience. Stay tuned for updates and new features!
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/page-not-found" className="text-light">About Us</Nav.Link>
              <Nav.Link as={Link} to="/page-not-found" className="text-light">Contact</Nav.Link>
              <Nav.Link as={Link} to="/page-not-found" className="text-light">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/page-not-found" className="text-light">Privacy Policy</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="https://www.facebook.com" className="text-light" target="_blank" rel="noopener noreferrer">Facebook</Nav.Link>
              <Nav.Link href="https://www.twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">Twitter</Nav.Link>
              <Nav.Link href="https://www.instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">Instagram</Nav.Link>
              <Nav.Link href="https://www.linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Super Cool E-Comm. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;