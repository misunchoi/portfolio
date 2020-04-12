import React from "react";
import "./App.css";
import { Route, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import styled from "styled-components"

const Header = styled.div`
	position: fixed;
	width: 100%;
	height: 72px;
	background-color: rgba(196, 196, 196, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

const Link = styled(NavLink)`
	&& {
		color: black;
		width: 100px;
		font-size: 18px;
		text-tranform: none;
		opacity: 100%;
	}
`;

const activeStyle = {
	color: 'white'
}

function App() {
  return (
    <div>
      <Header>
        <Link to="/" exact activeStyle={activeStyle}>Home</Link>
        <Link to="/projects" exact activeStyle={activeStyle}>Projects</Link>
        <Link to="/contact" exact activeStyle={activeStyle}>Contact</Link>
      </Header>

      <Route path="/" component={Home} exact/>
      <Route path="/projects" component={Projects} exact/>
      <Route path="/contact" component={Contact} exact/>
    </div>
  );
}

export default App;
