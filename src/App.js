import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CarouselComponent from "./components/Carousel"

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

      <CarouselComponent />

      <footer className="footer">Copyright 2020</footer>
    </div>
  );
}

export default App;
