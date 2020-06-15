import React from "react";
import styled from "styled-components";
import house from "../images/ruby-icon.png";
import website from "../images/gatsby-icon.png";
import react from "../images/react-icon.png";
import design from "../images/figma-icon.png";
import Image from "../components/LoadImage";

const listContent = [
  {
    icon: react,
    iconWidth: 75,
    title: "PORTFOLIO WEBSITE",
    framework: "React.js",
    description:
      "Developed a portfolio website using React.js. Utilized Figma for web design.",
    websiteLink: "https://michelle-misun-choi.netlify.com/",
    githubLink: "https://github.com/misunchoi/portfolio",
  },
  {
    icon: design,
    iconWidth: 75,
    title: "PORTFOLIO DESIGN",
    framework: "Figma",
    description: "Developed design for the portfolio website using Figma.",
    websiteLink:
      "https://www.figma.com/file/x5U5vlgK7Mr78DLod449Wl/Portfolio-2.0?node-id=0%3A1",
    githubLink: "https://github.com/misunchoi/portfolio",
  },
  {
    icon: website,
    iconWidth: 75,
    title: "GND WEBSITE",
    framework: "Gatsby(React), Moqui(Java)",
    description:
      "Developed a static website utilizing Material-UI for styling, Yup and Formik for form validations, and Stripe to process donations.",
    websiteLink: "https://gnd.alpha.mkdecision.com/",
    githubLink: "https://github.com/tfe-gnd-project/GND-website",
  },
  {
    icon: house,
    iconWidth: 75,
    title: "APARTMENT APP",
    framework: "Ruby on Rails, React.js",
    description:
      "Logged in users can create, edit, and delete apartment information.",
    websiteLink: "https://apartment-frontend.netlify.com/",
    githubLink:
      "https://github.com/misunchoi?utf8=%E2%9C%93&tab=repositories&q=apartment&type=&language=",
  },
];

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2em auto;
  width: fit-content;
`;

const Description = styled.div`
  background-color: #dcdbdb;
  margin: 1em 1em 1em 4em;
  padding: 1em;
  width: 774px;
`;

const Projects = () => {
  return (
    <div>
      {listContent.map((list) => {
        return (
          <RowWrapper>
            <Image
              src={list.icon}
              thumb={list.icon}
              alt="Profile picture"
              width={244}
            />
            <Description>
              <h1>{list.title}</h1>
              <h2>{list.framework}</h2>
              <p>{list.description}</p>
              <a
                href={list.websiteLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Website
              </a>
              <a
                href={list.githubLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </Description>
          </RowWrapper>
        );
      })}
    </div>
  );
}

export default Projects;
