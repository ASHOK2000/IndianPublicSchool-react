import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import logoImage from "../res_images/ips_logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navbar.css";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";


export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    navigate('/');
  };

  const storedData = localStorage.getItem("userData");
  const userData = JSON.parse(storedData);
  console.log("userData in localstorage ", userData);
  let content;
  if (userData !== null) {
    content = <Nav.Link className="navLinkText" onClick={handleLogout}>LOGOUT</Nav.Link>

  } else {
    content = <Nav.Link className="navLinkText" onClick={handleLogout}>JOIN</Nav.Link>


  }

  return (
    <div className="navStyle">

      <Container>
        <Navbar expand="lg">

          <div className="navImage">
            <Navbar.Brand href="/">
              <div className="navbar_logo">
                <Image
                  src={logoImage}
                  alt="indian Public school"
                  className="navbar_logo"
                />
              </div>
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls=" " />
          <Navbar.Collapse id="basic-navbar-nav" className="nav_link  justify-content-end">
            <Nav className="" >
              <LinkContainer to="/"   >
                <Nav.Link className="navLinkText">HOME</Nav.Link>
              </LinkContainer>
              <NavDropdown title="ABOUT" id="hee" renderMenuOnMount={true} className=" titleStyle">
                <LinkContainer to="/whyIPS">
                  <Nav.Link className="navLinkText">WHY&nbsp;Us! </Nav.Link>
                </LinkContainer>
                <NavDropdown.Divider />

                <LinkContainer to="/About">
                  <Nav.Link className="navLinkText">ChairMan's&nbsp;Massage </Nav.Link>
                </LinkContainer>
                <NavDropdown.Divider />

                <LinkContainer to="/transportPolicy">
                  <Nav.Link className="navLinkText">Transport Policy </Nav.Link>
                </LinkContainer>


                <NavDropdown.Divider />
                <NavDropdown.Item className="navLinkText" target="blank" href="/blogs">Blogs</NavDropdown.Item>
              </NavDropdown>



              {/* <LinkContainer to="/whyIPS">
              <Nav.Link className = "navLinkText">WHY US </Nav.Link>
            </LinkContainer> */}

              <LinkContainer to="/alumni">
                <Nav.Link className="navLinkText">ALUMNI</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/admisson">
                <Nav.Link className="navLinkText">ADMISSON</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/careers">
                <Nav.Link className="navLinkText">CAREERS</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact-us">
                <Nav.Link className="navLinkText">CONTACT US</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/location">
                <Nav.Link className="navLinkText">LOCATION</Nav.Link>
              </LinkContainer>


              <LinkContainer to="/login">
                {content}
              </LinkContainer>

            </Nav>


          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>

  );
}
