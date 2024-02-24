import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import "./nav_bar.css"

const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img src=".\src\assets\Acceleracers_Logo_Light.png" alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          
<Nav.Link as={Link} to="/">Home</Nav.Link>
          
          
<Nav.Link as={Link} to="/Projects">Projects</Nav.Link>

          
<Nav.Link as={Link} to="https://www.youtube.com/@acceleracersmit"><img src="./src/assets/youtube.png" alt="" style={{width:'30px'}}/></Nav.Link>
          
          
<Nav.Link as={Link} to="https://www.facebook.com/team.acceleracers/"><img src="./src/assets/FB.png" alt="" style={{width:'30px'}}/></Nav.Link>
          
          
<Nav.Link as={Link} to="https://www.instagram.com/team.acceleracers/"><img src="./src/assets/Instagram.png" alt="" style={{width:'30px'}}/></Nav.Link>
          
          
          
          
          
          
          
  
          
          
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
