import React from "react";
import styled from "styled-components";
import {
  StyledImage,
  StyledExternalLink,
  Header1,
  Body,
} from "../components/CommonStyledComponents";
import { projectDetails } from "../data/projects";

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

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
`;

const Projects = () => {
  return (
    <div>
      {projectDetails.map((list) => {
        return (
          <RowWrapper>
            <StyledImage
              src={list.icon}
              thumb={list.icon}
              alt="Profile picture"
              small
            />
            <Description>
              <Header1>{list.title}</Header1>
              <Body>{list.framework}</Body>
              <br/>
              <Body>{list.description}</Body>
              <br/>
              <LinksContainer>
                <StyledExternalLink
                  href={list.websiteLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Website
                </StyledExternalLink>
                <StyledExternalLink
                  href={list.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </StyledExternalLink>
              </LinksContainer>
            </Description>
          </RowWrapper>
        );
      })}
    </div>
  );
};

export default Projects;
