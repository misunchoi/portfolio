import React from "react";
import background from "../images/projects-background.jpg";
import styled from "styled-components";
import house from "../images/house.svg";
import tictactoe from "../images/tictactoe.svg";
import website from "../images/website.svg";
import react from "../images/react.svg";
import design from "../images/design.svg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justfify-content: center;
`;

const BackgroundImage = styled.div`
  @media only screen and (max-width: 1023px) {
    display: none;
  }

  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = styled.img`
  @media only screen and (min-width: 1024px) {
    display: none;
  }
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -1;
`;

const Container = styled.div`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  max-width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MobileContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 84px;
  width: 80%;
  align-items: center;
`;

const List = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.div`
  font-size: 36px;
  margin-right: 0.5em;
  @media only screen and (max-width: 1024px) {
    text-align: center;
    margin-right: 0;
  }
`;

const Framework = styled.div`
  font-style: italic;
  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 1.25;
  font-weight: 600;
`;

const Button = styled.a`
  width: 145px;
  height: 44px;
  font-size: 24px;
  border: 1px solid black;
  background-color: rgba(196, 196, 196, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-weight: 600;
  margin: 0 1em;
  text-transform: none;

  @media only screen and (max-width: 1024px) {
    margin: 0.5em 0;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 300px;
    align-items: center;
    margin-bottom: 1em;
  }
`;

const IconAndTextWrapper = styled.div`
  display: flex;
  align-items: end;
  width: 70%;

  & img {
    margin-right: 1.5em;
  }
`;

const Icon = styled.img`
  @media only screen and (max-width: 1024px) {
    margin: 1em 0;
  }
`;

const listContent = [
  {
    icon: house,
    iconWidth: 75,
    title: "APARTMENT APP",
    framework: "Ruby on Rails, React.js",
    description:
      "Logged in users can create, edit, and delete apartment information.",
    websiteLink: "https://apartment-frontend.netlify.com/",
    githubLink:
      "https://github.com/misunchoi?utf8=%E2%9C%93&tab=repositories&q=apartment&type=&language="
  },
  {
    icon: react,
    iconWidth: 75,
    title: "PORTFOLIO WEBSITE",
    framework: "React.js",
    description:
      "Developed a portfolio website using React.js. Utilized Figma for web design.",
    websiteLink: "https://michelle-misun-choi.netlify.com/",
    githubLink: "https://github.com/misunchoi/portfolio"
  },
  {
    icon: design,
    iconWidth: 65,
    title: "PORTFOLIO DESIGN",
    framework: "Figma",
    description: "Developed design for the portfolio website using Figma.",
    websiteLink:
      "https://www.figma.com/file/Yb0L8d33qSOSbDQPcjfFXt/Misun-s-Portfolio?node-id=0%3A1",
    githubLink: "https://github.com/misunchoi/portfolio"
  },
  {
    icon: tictactoe,
    iconWidth: 65,
    title: "TIC TAC TOE",
    framework: "React.js",
    description:
      "Classic TicTacToe game where users can choose an emoji to play.",
    websiteLink: "https://misunchoi.netlify.com/tictactoe",
    githubLink:
      "https://github.com/misunchoi/misun-portfolio/blob/master/src/pages/TicTacToe.js"
  },
  {
    icon: website,
    iconWidth: 85,
    title: "GND WEBSITE",
    framework: "Gatsby(React), Moqui(Java)",
    description:
      "Developed a static website utilizing Material-UI for styling, Yup and Formik for form validations, and Stripe to process donations.",
    websiteLink: "https://gnd.alpha.mkdecision.com/",
    githubLink: "https://github.com/tfe-gnd-project/GND-website"
  }
];

function Projects() {
  return (
    <Wrapper>
      <Background src={background} alt="city" />
      <BackgroundImage />

      <MobileContainer>
        {listContent.map(item => {
          return (
            <>
              <Icon src={item.icon} width={item.iconWidth} />
              <Title>{item.title}</Title>
              <Framework>{item.framework}</Framework>
              <Description>{item.description}</Description>
              <ButtonWrapper>
                <Button
                  href={item.websiteLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WEBSITE
                </Button>
                <Button
                  href={item.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GITHUB
                </Button>
              </ButtonWrapper>
            </>
          );
        })}
      </MobileContainer>

      <Container>
        {listContent.map(item => {
          return (
            <List>
              <IconAndTextWrapper>
                <Icon src={item.icon} width={item.iconWidth} />
                <div>
                  <TitleWrapper>
                    <Title>{item.title}</Title>
                    <Framework>{item.framework}</Framework>
                  </TitleWrapper>
                  <Description>{item.description}</Description>
                </div>
              </IconAndTextWrapper>

              <ButtonWrapper>
                <Button
                  href={item.websiteLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WEBSITE
                </Button>
                <Button
                  href={item.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GITHUB
                </Button>
              </ButtonWrapper>
            </List>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default Projects;
