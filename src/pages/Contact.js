import React from "react";
import contactBackground from "../images/contact-image.png";
import styled from "styled-components";
import Image from "../components/LoadImage";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: fit-content;
`;

const Description = styled.div`
  background-color: #dcdbdb;
  margin: 1em 1em 1em 4em;
  padding: 3em;
  width: 468px;
`;

const Contact = () => {
  return (
      <RowWrapper>
        <Image src={contactBackground} thumb={contactBackground} alt="Profile picture" width={468}/>
        <Description>
          <h1>Email</h1>
          <a href="mailto:choi.msc033@gmail.com">choi.msc033@gmail.com</a>
          <br/>
          <h1>Phone</h1>
          <a href="tel:1-619-880-0527">(619) 880-0527</a>
          <br/>
          <h1>LinkedIn</h1>
          <a href="https://linkedin.com/in/michelle-misun-choi" rel="noopener noreferrer" target="_blank">linkedin.com/in/michelle-misun-choi</a>
        </Description>
      </RowWrapper>
  );
}

export default Contact;
