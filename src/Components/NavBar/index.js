import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { scroller } from 'react-scroll';
import logo from './images/logo2.png';

function Navigation() {
    return (
    <>
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand className="navbar-brand" href="/"><img src={logo} width="70" height ="30" className="d-inline-block align-top" alt="test" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end navbar" style={{width: "100%"}}>
          <Nav.Link onClick={() => scroller.scrollTo('about', {
            smooth: true,
            offset: -40,
            duration: 100,
          })}>About</Nav.Link>
          <Nav.Link onClick={() => scroller.scrollTo('services', {
            smooth: true,
            offset: -70,
            duration: 100,
          })}>Services</Nav.Link>  
          <Nav.Link onClick={() => scroller.scrollTo('portfolio', {
            smooth: true,
            offset: -70,
            duration: 100,
          })}>Portfolio</Nav.Link>
          <Nav.Link onClick={() => scroller.scrollTo('contact', {
            smooth: true,
            offset: -70,
            duration: 100,
          })}>Contact</Nav.Link>    
        </Nav>    
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
};

export default Navigation;