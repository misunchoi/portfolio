import React from "react";
import styled from "styled-components";
import { StyledImage } from "../components/CommonStyledComponents";
import { projectDetails } from "../data/projects"

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
      {projectDetails.map((list) => {
        return (
          <RowWrapper>
            <StyledImage
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
