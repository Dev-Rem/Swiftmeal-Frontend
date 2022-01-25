/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Cities = () => {
  return (
    <div className="cities">
      <div className="title">
        <h2>Look for the Best Meals and restaurants close to you</h2>
      </div>
      <Container fluid className="container">
        <Row>
          <Col className="col" sm={7}>
            <div className="city-search">
              <input className="search-input" placeholder="Name of your city" />
              <button type="button">Seach</button>
            </div>
            <div className="suggested-city">
              <p>Based on your Location we believe you are in Abuja</p>
            </div>
          </Col>
          <Col>
            <div className="cities">
              <ul>
                <li>
                  <a href="#">Abuja</a>
                </li>
                <li>
                  <a href="#">Lagos</a>
                </li>
                <li>
                  <a href="#">Jos</a>
                </li>
                <li>
                  <a href="#">Benue</a>
                </li>
                <li>
                  <a href="#">Kogi</a>
                </li>
                <li>
                  <a href="#">Osun</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Abuja</a>
                </li>
                <li>
                  <a href="#">Lagos</a>
                </li>
                <li>
                  <a href="#">Jos</a>
                </li>
                <li>
                  <a href="#">Benue</a>
                </li>
                <li>
                  <a href="#">Kogi</a>
                </li>
                <li>
                  <a href="#">Osun</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cities;
