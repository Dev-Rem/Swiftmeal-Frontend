import React from "react";
import { Container, Row, Col, Button, Carousel, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import restaurantImage from "../assets/images/restaurantCard.png";
const Restaurants = () => {
  return (
    <div>
      <Container className="container" fluid>
        <Col>
          <Row>
            <div className="title">
              <h2>Restaurants - Abuja</h2>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <Carousel fade="true" variant="dark" className="carousel">
              <Carousel.Item className="carousel-item">
                <Row>
                  <Col>
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Hello</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Hello</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Hello</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Hello</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Hello</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col>
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Bye</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Bye</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Bye</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Bye</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={restaurantImage} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <p>Bye</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Restaurants;
