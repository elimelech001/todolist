import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavigationBar = () => {
 
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Default component on the left */}
          <Navbar.Brand as={Link} to="/">
            Todos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* Move the Users link to the top right corner as a button */}
              
              <Button as={Link} to="/auth" variant="primary" className="ml-2">
                login
              </Button>
              <Button
                onClick={e => localStorage.removeItem("token")}
                variant="secondary"
                className="ml-2">
                log out
              </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
