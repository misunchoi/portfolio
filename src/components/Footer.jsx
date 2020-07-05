import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  height: 5em;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  color: white;
  margin: 1em;
`;

const LinkWrapper = styled.div`
  display: flex;
`;

const footerLinks = [
  {
    icon: "",
    iconWidth: 75,
    label: "LinkedIn",
    linkUrl: "https://www.linkedin.com/in/michelle-misun-choi/",
  },
  {
    icon: "",
    iconWidth: 75,
    label: "Github",
    linkUrl: "https://github.com/misunchoi",
  },
];

function Footer() {
  return (
    <Container>
      <LinkWrapper>
        {footerLinks.map((data) => {
          return (
            <Link
              key={data.label}
              href={data.linkUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {data.label}
            </Link>
          );
        })}
      </LinkWrapper>
    </Container>
  );
}

export default Footer;
