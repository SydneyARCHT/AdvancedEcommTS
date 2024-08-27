import React from 'react';
import { Navbar, Nav, Button, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar: React.FC = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Super Cool E-Comm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav className="ml-auto">
            <Button as={Link} to="/cart" variant="outline-primary" className="mx-2">
              <i className="bi bi-bag"></i> Cart
            </Button>
            {isAuthenticated ? (
              <DropdownButton
                id="account-dropdown"
                title={`Hello, ${user?.name || 'User'}`}
                variant="outline-primary"
                className="mx-2"
              >
                <Dropdown.Item as={Link} to="/orders">Orders</Dropdown.Item>
                <Dropdown.Item as={Link} to="/page-not-found">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="button" onClick={() => logout({ returnTo: window.location.origin })}>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <Button variant="outline-primary" className="mx-2" onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;