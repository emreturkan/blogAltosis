import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBootstrap bg="light" expand="lg">
      <Container>
        <NavbarBootstrap.Brand href="/" className="!flex-grow-1">
          Blog Altosis
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse
          id="basic-navbar-nav "
          className="!d-flex justify-content-end"
        >
          <Nav>
            <Link
              id="AddRouter"
              to="/add"
              className="text-secondary text-decoration-none me-5"
            >
              Add
            </Link>
            <Link
              id="AlbumsRouter"
              to="/photos"
              className="text-secondary text-decoration-none"
            >
              Photos
            </Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
