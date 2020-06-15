import React from "react";
import profilePicture from "../images/profile-picture.png";
import profilePictureThumb from "../images/home-background-thumbnail.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../components/LoadImage";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: fit-content;
`;

const Description = styled.div`
  background-color: #dcdbdb;
  margin: 1em 1em 1em 4em;
  padding: 4em;
  width: 468px;
`;

const StyledImage = styled.img`
  margin: 1em;
  box-shadow: -40px 40px #85EDF3;
  width: 468px;
`;

const Home = () => {
  return (
    <RowWrapper>
      <StyledImage src={profilePicture} alt="Profile picture"/>
      <Description>
        <h1>Mi Sun Choi</h1>
        <h2>aka Michelle</h2>
        <p>Welcome to my portfolio website! I have professional experience in React.js, JavaScript, HTML, and CSS. I’m seeking opportunities as a Software Engineer in San Diego :)</p>
      </Description>
    </RowWrapper>
  );
}

export default Home;
