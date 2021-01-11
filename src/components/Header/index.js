import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'gatsby'

export default ({title}) => (
    <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">My Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                   Home
                </Nav.Link>
                <Nav.Link as={Link} to="/test/">
                    Test
                </Nav.Link>
                <Nav.Link as={Link} to="/about/">
                    About
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts/">
                   Contact
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)