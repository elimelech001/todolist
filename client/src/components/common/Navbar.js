// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Home
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/registration">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/todos">
          Todo List
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
