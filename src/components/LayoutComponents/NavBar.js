/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo3 from "../../assets/images/logo.png";
import { Navbar, Container, Button } from "react-bootstrap";

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
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{" "}
              <p>Swift Meal</p>
            </Navbar.Brand>
          </div>
          <div className="navbar-options">
            <Button
              size="sm"
              href="#"
              className="login"
              variant="outline-success"
            >
              Login
            </Button>
            <Button size="sm" href="#" className="signup" variant="dark">
              Sign up
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
