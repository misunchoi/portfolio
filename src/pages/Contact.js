import React from "react";
import contactBackground from "../images/contact-image.png";
import styled from "styled-components";
import {
  StyledImage,
  Section,
  Description,
  RowWrapper,
} from "../components/CommonStyledComponents";
import { contactDetails } from "../data/contact";

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
              <ContactDetailsContainer key={contact.title}>
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
