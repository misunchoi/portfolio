import React from "react";
import profilePicture from "../images/profile-picture.png";
import {
  StyledImage,
  Section,
  Description,
  RowWrapper
} from "../components/CommonStyledComponents";

const Home = () => {
  return (
    <Section>
      <RowWrapper>
        <StyledImage src={profilePicture} alt="Profile picture" />
        <Description>
          <h1>Mi Sun Choi</h1>
          <p>aka Michelle</p>
          <p>
            Welcome to my portfolio website! I have professional experience in
            React.js, JavaScript, HTML, and CSS. I’m seeking opportunities as a
            Software Engineer in San Diego! 
          </p>
        </Description>
      </RowWrapper>
    </Section>
  );
};

export default Home;
