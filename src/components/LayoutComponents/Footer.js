/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Col>
            <span>Swift Meal Links</span>
            <Row>
              <Col>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Swift Meal blog</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">API</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <span>Work with us</span>
            <Row>
              <Col>
                <ul>
                  <li>
                    <a href="#">For restaurants</a>
                  </li>
                  <li>
                    <a href="#">For couriers</a>
                  </li>
                  <li>
                    <a href="#">For Companies</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <span>Social media</span>
            <Row>
              <Col>
                <ul>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={3}>
            <p> &copy; Swift Meal </p>
          </Col>
          <Col sm={9}>
            <a href="#">
              <p>Terms and conditions</p>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
