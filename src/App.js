import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="background">
      <Navbar bg="light" variant="light">
        <Link to="/"><Navbar.Brand>Michelle Choi</Navbar.Brand></Link>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
          <Nav.Link><Link to="/resume">Resume</Link></Nav.Link>
          <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
        </Nav>
      </Navbar>

      <Route path="/" component={Home} exact/>
      <Route path="/projects" component={Projects} exact/>
      <Route path="/resume" component={Resume} exact/>
      <Route path="/contact" component={Contact} exact/>

      <footer className="footer">Copyright 2020</footer>
    </div>
  );
}

export default App;
