import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default ({ title }) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My Blog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <b className="text-dark">Home</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/about/">
            <b className="text-dark">About</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/contacts/">
            <b className="text-dark">Contact</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
