import React from "react";
import styled from "styled-components";
import {
  RowWrapper,
  Description,
  Section,
} from "../components/CommonStyledComponents";
import { projectDetails } from "../data/projects";
import LoadImage from "../components/LoadImage"

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Projects = () => {
  return (
    <Section>
      {projectDetails.map((list) => {
        return (
          <RowWrapper key={list.title}>
            <LoadImage
              src={list.icon}
              thumb={list.smallIcon}
              alt={list.title}
              small
            />
            <Description long>
              <h1>{list.title}</h1>
              <p>{list.framework}</p>
              <p>{list.description}</p>
              <LinksContainer>
                {list.websiteLink && (
                  <a
                    href={list.websiteLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Website
                  </a>
                )}
                {list.githubLink && (
                  <a
                    href={list.githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                )}
              </LinksContainer>
            </Description>
          </RowWrapper>
        );
      })}
    </Section>
  );
};

export default Projects;
