import React from "react";
import homeBackground from "../images/home-background.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  color: white;
  height: 100vh;
  width: 100vw;
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  @media only screen and (max-width: 1024px) {
    background-position: right;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 1024px) {
    width: 450px;
    max-width: 1200px;
    left: 75%;
  }
`;

const Name = styled.div`
  font-size: 64px;

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }
`;

const Pronunciation = styled.div`
  font-size: 24px;
  margin-bottom: 0.5em;
`;

const JobTitle = styled.div`
  font-size: 36px;
  margin-bottom: 0.25em;

  @media only screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
`;

const Button = styled(Link)`
  width: 260px;
  height: 54px;
  font-size: 24px;
  border: 1px solid white;
  background-color: rgba(196, 196, 196, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0.5em 0;
`;

function Home() {
  return (
    <Wrapper>
      <BackgroundImage />
      <Container>
        <Name>Mi Sun Choi</Name>
        <Pronunciation>/mē sən ˈCHoi/</Pronunciation>
        <JobTitle>UI Engineer in San Diego</JobTitle>
        <Description>
          Welcome to my portfolio website! I’m seeking opportunities to grow in
          my technical skills as a software developer :)
        </Description>
        <Button to="/projects">Explore projects</Button>
        <Button to="/contact">Contact me</Button>
      </Container>
    </Wrapper>
  );
}

export default Home;
