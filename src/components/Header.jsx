import React from 'react';
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 70 }}>
      <Container>
        <Navbar.Brand>
          <a href="/">Products</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown
            align="Right"
            title="Dropdown end"
            id="dropdown-menu-align-end">
            <Dropdown.Toggle variant="success">
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Emty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
