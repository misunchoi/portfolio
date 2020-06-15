import React from "react";
import "./image.css";
import styled from 'styled-components'

const StyledImage = styled.img`
  margin: 1em;
  box-shadow: -20px 20px #85EDF3;
  ${props => props.width ? `width: ${props.width}px;` : ''}
  ${props => props.blur ? `filter: blur(20px); transform: scale(1.1); transition: visibility 0ms ease 400ms;` : ''}
  ${props => props.full ? `transition: opacity 400ms ease 0ms;` : ''}
`;

const Image = props => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <React.Fragment>
      <StyledImage
        blur
        width={props.width}
        alt={props.alt}
        src={props.thumb}
        style={{ display: isLoaded ? "none" : "" }}
      />
      <StyledImage
        full
        width={props.width}
        onLoad={() => {
          setIsLoaded(true);
        }}
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props.alt}
        src={props.src}
      />
    </React.Fragment>
  );
};

export default Image;