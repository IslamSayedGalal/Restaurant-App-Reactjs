import React from 'react';
import {Navbar, Nav,Container} from 'react-bootstrap';
import logo from './../../assets/logo.png';
import './Navbars.css';

const Navbars= ()=> {
  return (
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title="logo" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About Us</Nav.Link>
                    <Nav.Link href="#home">explore food</Nav.Link>
                    <Nav.Link href="#home">Review</Nav.Link>
                    <Nav.Link href="#home">faq</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link id="lastButton">23568210</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navbars;