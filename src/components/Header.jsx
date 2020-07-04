import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 5em;
  background: white;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PlaceHolder = styled.div`
  width: 100vw;
  height: 5em;
`;

const Link = styled(NavLink)`
  && {
    color: black;
    width: 150px;
    font-size: 24px;
    font-weight: 600;
    text-transform: none;
    opacity: 100%;
    text-align: center;

    @media only screen and (max-width: 1024px) {
      width: 100px;
      font-size: 18px;
    }
  }
`;

const Logo = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 58px;
  font-weight: 200;
  position: absolute;
  left: 20px;
`;

function Header() {
  const activeStyle = { color: "#4BB3B9" };

  return (
    <>
      <PlaceHolder />
      <NavBar>
        <Logo>MC</Logo>
        <Link to="/" exact activeStyle={activeStyle}>
          Home
        </Link>
        <Link to="/projects" exact activeStyle={activeStyle}>
          Projects
        </Link>
        <Link to="/contact" exact activeStyle={activeStyle}>
          Contact
        </Link>
      </NavBar>
    </>
  );
}

export default Header;
