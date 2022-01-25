import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import restaurantImage from "../../assets/images/restaurantCard.jpeg";
import foodImage from "../../assets/images/foodCard.jpeg";
import drinkImage from "../../assets/images/drinksCard.jpeg";

const HomePageSearch = () => {
  return (
    <div>
      <Container fluid>
        <Col>
          <Row>
            <div className="search-banner">
              <div className="search-bar">
                <input className="search-input" placeholder="Search" />
                <Button></Button>
              </div>
            </div>
          </Row>
          <Row>
            <div className="categories-banner">
              <Container className="container" fluid>
                <Row>
                  <Col>
                    <div className="card-image">
                      <Image
                        fluid="true"
                        src={restaurantImage}
                        alt="Restaurant"
                      />
                    </div>
                    <div className="card-text">
                      <h1>restaurants</h1>
                    </div>
                  </Col>
                  <Col>
                    <div className="card-text">
                      {" "}
                      <h1> Foods</h1>
                    </div>
                    <div className="card-image">
                      <Image fluid="true" src={foodImage} alt="Foods" />
                    </div>
                  </Col>
                  <Col>
                    <div className="card-image">
                      <Image fluid="true" src={drinkImage} alt="drinks" />
                    </div>
                    <div className="card-text">
                      {" "}
                      <h1> Drinks</h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
          <Row>Cities section</Row>
          <Row> Motivational section</Row>
        </Col>
      </Container>
    </div>
  );
};

export default HomePageSearch;
