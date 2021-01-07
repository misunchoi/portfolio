import React from "react";
import profilePicture from "../images/profile-picture.png";
import smallProfilePicture from "../images/profile-picture-small.png";
import {
  Section,
  Description,
  RowWrapper
} from "../components/CommonStyledComponents";
import LoadImage from "../components/LoadImage"

const Home = () => {
  return (
    <Section>
      <RowWrapper>
        <LoadImage src={profilePicture} thumb={smallProfilePicture} alt="Profile picture" />
        <Description>
          <h1>Mi Sun Choi</h1>
          <p>Welcome to my portfolio website!</p>
          <p>
            I have professional experience in
            React.js, JavaScript, HTML, CSS, GraphQL, and many more. I’m seeking opportunities as a
            Software Engineer in San Diego. I'm eager to challenge myself by learning new technologies and building meaningful interfaces that'll help make many processes a lot more efficient for users.
          </p>
          <p>
            I've been working as a Software Engineer and also as an UI Engineer at MK Decision and have grown my capacity to learn new technologies, lead and support team members, and deliver features in a fast-paced environment.
          </p>
        </Description>
      </RowWrapper>
    </Section>
  );
};

export default Home;
