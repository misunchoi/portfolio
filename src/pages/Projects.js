import React from "react";
import background from "../images/projects-background.jpg";
import styled from "styled-components";
import profile from "../images/profile.svg"
import house from "../images/house.svg"
import tictactoe from "../images/tictactoe.svg"
import website from "../images/website.svg"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justfify-content: center;
`;

const Background = styled.img`
  width: 100%;
  position: fixed;
  z-index: -1;
  opacity: 30%;
`;

const Container = styled.div`
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
`;

const Framework = styled.div`
  font-size: 24px;
  font-style: italic;
`;

const Description = styled.div`
  font-size: 18px;
`;

const Button = styled.a`
  width: 145px;
  height: 54px;
  font-size: 24px;
  border: 1px solid black;
  background-color: rgba(196, 196, 196, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 0 1em;
  text-transform: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
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
  margin-top: ${props => props.marginTop};
`;

const listContent = [
  {
    icon: house,
    iconWidth: 75,
    iconMarginTop: '5px',
    title: "APARTMENT APP",
    framework: "Ruby on Rails, React.js",
    description:
      "Logged in users can create, edit, and delete apartment information.",
    websiteLink: "https://apartment-frontend.netlify.com/",
    githubLink: "https://github.com/misunchoi?utf8=%E2%9C%93&tab=repositories&q=apartment&type=&language="
  },
  {
    icon: profile,
    iconWidth: 65,
    iconMarginTop: '13px',
    title: "PORTFOLIO WEBSITE",
    framework: "React.js",
    description:
      "Developed a portfolio website using React.js and Material UI.",
    websiteLink: "https://michelle-misun-choi.netlify.com/",
    githubLink: "https://github.com/misunchoi/portfolio"
  },
  {
    icon: tictactoe,
    iconWidth: 65,
    iconMarginTop: '13px',
    title: "TIC TAC TOE",
    framework: "React.js",
    description:
      "Classic TicTacToe game where users can choose an emoji to play.",
    websiteLink: "https://misunchoi.netlify.com/tictactoe",
    githubLink: "https://github.com/misunchoi/misun-portfolio/blob/master/src/pages/TicTacToe.js"
  },
  {
    icon: website,
    iconWidth: 85,
    iconMarginTop: '11px',
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
      <Container>
        {listContent.map(item => {
          return (
            <List>
              <IconAndTextWrapper>
                <Icon src={item.icon} width={item.iconWidth} marginTop={item.iconMarginTop}/>
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
