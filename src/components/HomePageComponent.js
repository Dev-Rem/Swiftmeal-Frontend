/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, Button, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import restaurantImage from "../assets/images/restaurantCard.png";
import food2 from "../assets/images/food2.png";
import drinks2 from "../assets/images/drinks2.jpeg";
import panels1 from "../assets/images/panels1.jpeg";
import panels2 from "../assets/images/panels2.jpeg";
import panels3 from "../assets/images/panels3.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const HomePageComponent = () => {
  return (
    <div>
      <Container fluid className="main-container">
        <Col>
          <Row>
            <div className="search-banner">
              <div className="search-bar">
                <input className="search-input" placeholder="Search" />
                <Button type="submit"></Button>
              </div>
            </div>
          </Row>
          <Row>
            <div className="categories-banner">
              <Container className="container" fluid>
                <Row lg="auto">
                  <Col>
                    <Link to="/restaurants">
                      <div className="card-image">
                        <Image
                          fluid="true"
                          src={restaurantImage}
                          alt="Restaurant"
                        />
                      </div>
                      <div className="card-text">
                        <h1>Restaurants</h1>
                      </div>
                    </Link>
                  </Col>
                  <Col>
                    <a href="">
                      <div className="card-text">
                        {" "}
                        <h1> Foods</h1>
                      </div>
                      <div className="card-image">
                        <Image fluid="true" src={food2} alt="Foods" />
                      </div>
                    </a>
                  </Col>
                  <Col>
                    <a href="#">
                      <div className="card-image">
                        <Image fluid="true" src={drinks2} alt="drinks" />
                      </div>
                      <div className="card-text">
                        <h1> Drinks</h1>
                      </div>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
          <Row>
            <div className="cities">
              <div className="title">
                <h2>Look For The Best Meals And Restaurants Near You</h2>
              </div>
              <Container fluid className="container">
                <Row>
                  <Col className="col">
                    <div className="suggested-city">
                      <div className="current-location">
                        <LocationOnIcon sx={{ color: "#b810b8" }} />
                        <p>Your Location is Abuja</p>
                      </div>
                    </div>
                    <div className="city-search">
                      <input
                        className="search-input"
                        placeholder="Name of your city"
                      />

                      <button type="submit">Search</button>
                    </div>
                  </Col>
                  <Col>
                    <div className="list-cities">
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
          </Row>
          <Row>
            <div className="motivation">
              <Carousel fade="true" variant="dark" className="carousel">
                <Carousel.Item className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={panels1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={panels2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={panels3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default HomePageComponent;
