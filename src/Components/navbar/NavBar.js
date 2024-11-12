import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link as ScrollLink } from 'react-scroll';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="Navbar p-3 " >
      <Container className='nav-container'>
        <Navbar.Brand href="/" className='Navbar-name pe-5 '>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav m-0 p-0 ">
          <Nav className="nav-all-link d-flex justify-content-end gap-4">
            <Nav.Link className='nav-link text-light p-0' href="/My_Portfolio/">HOME</Nav.Link>
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>ABOUT</ScrollLink>         
            <ScrollLink to="project" spy={true} smooth={true} duration={500}>PROJECT</ScrollLink>
            <ScrollLink to="experience" spy={true} smooth={true} duration={500}>EXPERIENCE</ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} duration={500}>CONTACT</ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar