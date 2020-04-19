import React from "react";
import contactBackground from "../images/contact-background.jpg";
import contactMobileBackground from "../images/contact-mobile-background.jpg";
import styled from "styled-components";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import linkedIn from "../images/linkedIn.svg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 24px;
`;

const BackgroundImage = styled.div`
  height: 100%;
  background-image: url(${contactBackground});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 1024px) {
    background-image: url(${contactMobileBackground});
  }
`;

const MobileContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  max-width: 300px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 84px);
`;

const Container = styled.div`
  @media only screen and (max-width: 1023px) {
    display: none;
  }
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

  @media only screen and (max-width: 1024px) {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    margin-top: 1em;
  }
`;

const Content = styled.div`
  font-size: 18px;
  text-align: center;
`;

const Icon = styled.td`
  padding: 0.5em 1em;
`;

function Contact() {
  return (
    <Wrapper>
      <BackgroundImage />
      <MobileContainer>
        <Title>Email</Title>
        <Content>choi.msc033@gmail.com</Content>

        <Title>Phone</Title>
        <Content>(619) 880-0527</Content>

        <Title>LinkedIn</Title>
        <Content>linkedin.com/in/michelle-misun-choi/</Content>
      </MobileContainer>

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
