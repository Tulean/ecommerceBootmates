import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
const carousel = () => {
  return (
    <div>
      <Container>
        <Carousel indicators={false} interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/slider1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Men’s Wear</h1>
              <h6>Save up to 50% off summer styles</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/slider2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Women’s Wear</h1>
              <h6>New Arrivals this weekend</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/slider3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Unisex Wear</h1>
              <h6>Come and grab a pair of our quality boots</h6>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default carousel;