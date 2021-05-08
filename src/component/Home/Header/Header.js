import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar className="pb-5" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} style={{ fontSize: "30px", color: "white" }} className="web-name header-logo" to="/" > Shakib </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} style={{color: '#fff'}} to="/"> Home </Nav.Link>
            <Nav.Link as={Link} style={{color: '#fff'}} to="/about"> About </Nav.Link>
            <Nav.Link as={Link} style={{color: '#fff'}} to="/project"> Project </Nav.Link>
            <Nav.Link as={Link} style={{color: '#fff'}} to="/blog"> Blog </Nav.Link>
            <Nav.Link as={Link} style={{color: '#fff'}} to="/contact"> Contact </Nav.Link>
            <Nav.Link style={{color: '#fff'}} target="_blank" download href="https://drive.google.com/file/d/1RZT7ufs8tIILNs0XfAOK-6eTnGRI5AM5/view" className="active btn-brand p-0 px-2" >Resume </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
