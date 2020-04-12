import React from "react";
import homeBackground from "../images/home-background.jpg";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import arrowRight from "../images/arrowRight.svg";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	color: white;
`;

const Background = styled.img`
  width: 100%;
  position: fixed;
  margin: -100px -80px 0 0;
  z-index: -1;
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 800px;
	padding-top: 200px;
	width: 40%;
`;

const Name = styled.div`
	font-size: 64px;
`;

const Pronunciation = styled.div`
	font-size: 24px;
`;

const JobTitle = styled.div`
	font-size: 36px;
`;

const Description = styled.div`
	font-size: 18px;
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
      <Background src={homeBackground} alt="profile picture" />
	  <RightContainer>
		<Name>Mi Sun Choi</Name>
		<Pronunciation>/mē sən ˈCHoi/</Pronunciation>
		<JobTitle>UI Engineer in San Diego</JobTitle>
		<Description>Welcome to my portfolio website! I’m seeking opportunities to grow in my technical skills as a software developer :)</Description>
		<Button to="/projects">Explore projects</Button>
		<Button to="/contact">Contact me</Button>
	  </RightContainer>
    </Wrapper>
  );
}

export default Home;
