import React from "react";
import contactBackground from "../images/contact-image.png";
import styled from "styled-components";
import {
  StyledImage,
  StyledExternalLink,
  Header1,
} from "../components/CommonStyledComponents";
import { contactDetails } from "../data/contact";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: fit-content;
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
    <RowWrapper>
      <StyledImage src={contactBackground} alt="Profile picture" width={468} />
      <Description>
        {contactDetails.map(contact => {
          return (
            <ContactDetailsContainer>
              <Header1>{contact.title}</Header1>
              <StyledExternalLink href={contact.link}>
                {contact.linkText}
              </StyledExternalLink>
            </ContactDetailsContainer>
          )
        })}
      </Description>
    </RowWrapper>
  );
};

export default Contact;
