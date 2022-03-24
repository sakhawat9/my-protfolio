import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/sh__shakib.png";

const Header = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#0a192f" }}
      className="py-3 fixed-top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          style={{ color: "#fff" }}
          className="name from-left"
          to="/"
          href="/"
        >
          <img style={{ height: "40px" }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{ color: "#fff" }} href="/" to="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="about">
              About
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="project">
              Projects
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="blog">
              Blog
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="contact">
              Contact
            </Nav.Link>
            <Nav.Link
              style={{ color: "#fff" }}
              target="_blank"
              href="https://drive.google.com/file/d/1BzpVoR3OadSYNQVzQEF8bMCx-N44GBnI/view"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
