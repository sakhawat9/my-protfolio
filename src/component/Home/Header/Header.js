import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/sh__shakib.png";

const Header = () => {
  return (
    <Navbar className="pb-5" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} className="web-name header-logo" to="/">
          <img style={{ height: "70px" }} src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} style={{ color: "#fff" }} to="/">
              {" "}
              Home{" "}
            </Nav.Link>
            <Nav.Link as={Link} style={{ color: "#fff" }} to="/about">
              {" "}
              About{" "}
            </Nav.Link>
            <Nav.Link as={Link} style={{ color: "#fff" }} to="/project">
              {" "}
              Project{" "}
            </Nav.Link>
            <Nav.Link as={Link} style={{ color: "#fff" }} to="/blog">
              {" "}
              Blog{" "}
            </Nav.Link>
            <Nav.Link as={Link} style={{ color: "#fff" }} to="/contact">
              {" "}
              Contact{" "}
            </Nav.Link>
            <Nav.Link
              style={{ color: "#fff" }}
              target="_blank"
              download
              href="https://drive.google.com/file/d/1BzpVoR3OadSYNQVzQEF8bMCx-N44GBnI/view?usp=sharing"
              className="p-0 px-2 active btn-brand"
            >
              Resume{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
