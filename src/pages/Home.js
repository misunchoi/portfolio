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
  padding: 1em;
  width: 468px;
`;

const Home = () => {
  return (
    <RowWrapper>
      <Image src={profilePicture} thumb={profilePictureThumb} alt="Profile picture" width={468}/>
      <Description>
        <h1>Mi Sun Choi</h1>
        <h2>aka Michelle</h2>
        <p>Welcome to my portfolio website! I have professional experience in React.js, JavaScript, HTML, and CSS. I’m seeking opportunities as a Software Engineer in San Diego :)</p>
      </Description>
    </RowWrapper>
  );
}

export default Home;
