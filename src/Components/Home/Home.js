import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link as ScrollLink } from 'react-scroll';
import Projects from '../Project/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import { Button } from 'react-bootstrap';
import Experience from '../Experience/Experience';
import'./style.css'

function Home() {
  return (
    <div className='text-light'>
       <Navbar expand="lg" className="Navbar p-3">
      <Container className='nav-container'>
        <Navbar.Brand href="/" className='Navbar-name pe-5 '>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav m-0 p-0">
          <Nav className="nav-all-link m-0 ps-5">
            <Nav.Link className='text-light' href="/">HOME</Nav.Link>
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>ABOUT</ScrollLink>         
            <ScrollLink to="project" spy={true} smooth={true} duration={500}>PROJECT</ScrollLink>
            <ScrollLink to="experience" spy={true} smooth={true} duration={500}>EXPERIENCE</ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} duration={500}>CONTACT</ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='section-hero container' >
    <div className='p-2'>
      <h2>Nasib</h2>
      <p>FULL STACK<br/>SOFTWARE<br/> DEVELOPER.</p>
      <Button> Previous Project</Button>
    </div>
    </div>
    <AboutMe/>
    <Projects/>
    <Experience/>
    <Contact/>
    </div>
  )
}

export default Home