import React from "react";
import "./image.css";
import { StyledImage } from "../components/CommonStyledComponents"

const Image = props => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <React.Fragment>
      <StyledImage
        blur
        width={props.width}
        alt={props.alt}
        src={props.thumb}
        style={{ display: isLoaded ? "none" : "", filter: "blur(4px)" }}
        small={props.small}
      />
      <StyledImage
        full
        width={props.width}
        onLoad={() => {
          setIsLoaded(true);
        }}
        style={{ display: !isLoaded ? "none" : "" }}
        alt={props.alt}
        src={props.src}
        small={props.small}
      />
    </React.Fragment>
  );
};

export default Image;