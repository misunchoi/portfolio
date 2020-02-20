import React from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import imageOne from "../images/imageOne.jpg"
import imageTwo from "../images/imageTwo.jpg"
import imageThree from "../images/imageThree.jpg"

function CarouselComponent() {
  return (
    <div id="home" className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageTwo}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Michelle Choi</h3>
              <p>Explore my portfolio site!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageOne}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Bruni!</h3>
              <p>I enjoy doodling on my free time.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>La Jolla Cove</h3>
              <p>
                I live in sunny San Diego :)
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default CarouselComponent;
