import React from "react";
import contactBackground from "../images/contact-image.png";
import styled from "styled-components";
import {
  StyledImage,
  Section,
} from "../components/CommonStyledComponents";
import { contactDetails } from "../data/contact";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: fit-content;
  flex-wrap: wrap;
`;

const Description = styled.div`
  background-color: #dcdbdb;
  margin: 1em 1em 1em 4em;
  padding: 4em;
  width: 468px;
`;

const ContactDetailsContainer = styled.div`
  margin-bottom: 1em;
`;

const Contact = () => {
  return (
    <Section>
      <RowWrapper>
        <StyledImage
          src={contactBackground}
          alt="Profile picture"
          width={468}
        />
        <Description>
          {contactDetails.map((contact) => {
            return (
              <ContactDetailsContainer>
                <h1>{contact.title}</h1>
                <a
                  href={contact.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contact.linkText}
                </a>
              </ContactDetailsContainer>
            );
          })}
        </Description>
      </RowWrapper>
    </Section>
  );
};

export default Contact;
