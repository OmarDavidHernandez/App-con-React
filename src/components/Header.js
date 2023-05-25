import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Product Inventory</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;