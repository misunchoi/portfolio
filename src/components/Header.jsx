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

const StyledBurger = styled.button`
  position: absolute;
  right: 2rem;
  top: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: right;
  padding-top: 5rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    padding: 1em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
      min-width: 100%;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const MobileNavBar = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

const DesktopNavBar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

function Header(props) {
  const { open, setOpen } = props;
  const activeStyle = { color: "#4BB3B9" };

  return (
    <>
      <PlaceHolder />
      <NavBar>
        <Logo>MC</Logo>

        <MobileNavBar>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
          <StyledMenu open={open}>
            <Link
              to="/"
              exact
              activeStyle={activeStyle}
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              exact
              activeStyle={activeStyle}
              onClick={() => setOpen(!open)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              exact
              activeStyle={activeStyle}
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </StyledMenu>
        </MobileNavBar>

        <DesktopNavBar>
          <Link to="/" exact activeStyle={activeStyle}>
            Home
          </Link>
          <Link to="/projects" exact activeStyle={activeStyle}>
            Projects
          </Link>
          <Link to="/contact" exact activeStyle={activeStyle}>
            Contact
          </Link>
        </DesktopNavBar>
      </NavBar>
    </>
  );
}

export default Header;
