/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo3 from "../assets/images/logo.png";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="white" expand="sm">
        <Container>
          <div className="nav-logo">
            <Navbar.Brand href="#home">
              <img
                alt="Logo"
                src={logo3}
                width="60"
                height="60"
                className="d-inline-block align-top"
              />{" "}
              <p>Swift Meal</p>
            </Navbar.Brand>
          </div>
          <div className="navbar-options">
            <Link to="/auth">
              <Button size="sm" className="login" variant="white">
                Sign in
              </Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
