import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/nest.png"
import "./Landing.css"

export default function LandingNav() {
  return (
    <Navbar style={{background:"#FFD4D4"}} data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"> <div className='logoHolder'> <img src={logo} alt="logo" style={{width:"30px", height:"30px"}} /> <span> WebNest </span></div></Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
  )
}
