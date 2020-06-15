import React from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 5em;
  // background-color: rgba(196, 196, 196, 0.75);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Link = styled(NavLink)`
  && {
    color: black;
    width: 150px;
    font-size: 24px;
    font-weight: 600;
    text-tranform: none;
    opacity: 100%;
    text-align: center;

    @media only screen and (max-width: 1024px) {
      width: 100px;
      font-size: 18px;
    }
  }
`;

const Layout = styled.div`
  margin: 9em 1em 1em;
`;

const activeStyle = {
  color: "#4BB3B9",
};

function App() {
  return (
    <div>
      <Header>
        <Link to="/" exact activeStyle={activeStyle}>
          Home
        </Link>
        <Link to="/projects" exact activeStyle={activeStyle}>
          Projects
        </Link>
        <Link to="/contact" exact activeStyle={activeStyle}>
          Contact
        </Link>
      </Header>

      <Layout>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/contact" component={Contact} exact />
      </Layout>
    </div>
  );
}

export default App;
