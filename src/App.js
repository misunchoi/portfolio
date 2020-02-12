import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import imageOne from "./images/imageOne.jpg"
import imageTwo from "./images/imageTwo.jpg"
import imageThree from "./images/imageThree.jpg"

function App() {
  return (
    <div className="background">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Michelle Choi</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <div id="home" className="carousel-container">
        <div className="intro">
          Welcome to my website!
        </div>

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

      <footer className="footer">Copyright 2020</footer>
    </div>
  );
}

export default App;
