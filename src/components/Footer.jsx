import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  height: 5em;
  text-align: center;
`;

const footerLinks = [
  {
    icon: "",
    iconWidth: 75,
    label: "Github",
    linkUrl: "https://github.com/misunchoi",
  },
  {
    icon: "",
    iconWidth: 75,
    label: "LinkedIn",
    linkUrl: "https://www.linkedin.com/in/michelle-misun-choi/",
  },
];

function Footer() {
  return (
    <Container>
      {footerLinks.map((data) => {
        return (
          <a href={data.linkUrl} rel="noopener noreferrer" target="_blank">
            {data.label}
          </a>
        );
      })}
    </Container>
  );
}

export default Footer;
