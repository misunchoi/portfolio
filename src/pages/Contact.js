import React from "react";
import contactBackground from "../images/contact-background.jpg";
import styled from "styled-components";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import linkedIn from "../images/linkedIn.svg";

const Wrapper = styled.div`
  font-size: 24px;
`;

const Background = styled.img`
  width: 100%;
  position: fixed;
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.td`
  text-align: right;
`;

const Icon = styled.td`
  padding: 0.5em 1em;
`;

function Contact() {
  return (
    <Wrapper>
      <Background src={contactBackground} alt="desk picture" />

      <Container>
        <table>
          <tr>
            <Title>Email</Title>
            <Icon>
              <img src={email} width={55} />
            </Icon>
            <td>choi.msc033@gmail.com</td>
          </tr>
          <tr>
            <Title>Phone</Title>
            <Icon>
              <img src={phone} width={55} />
            </Icon>
            <td>‪(619) 880-0527</td>
          </tr>
          <tr>
            <Title>LinkedIn</Title>
            <Icon>
              <img src={linkedIn} width={55} />
            </Icon>
            <td>‪linkedin.com/in/michelle-misun-choi/</td>
          </tr>
        </table>
      </Container>
    </Wrapper>
  );
}

export default Contact;
