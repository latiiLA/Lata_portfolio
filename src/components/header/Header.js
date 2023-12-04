import React from "react";
import "./header.css";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Container fluid={true}>
        <div className="header_container">
          <div className="my_name">LATA AMENU</div>
          <div className="header_nav">
            <a className="header_links" href="about">
              Home
            </a>
            <a className="header_links" href="about">
              About
            </a>
            <a href="about#">Skills</a>
            <a href="about">Services</a>
            <a href="about#">Portfolio</a>
            <a href="about#">Projects</a>
            <a href="about">Contact</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
