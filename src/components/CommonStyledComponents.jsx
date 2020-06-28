import styled from "styled-components";

export const StyledImage = styled.img`
    margin: 1em;
    box-shadow: ${props => props.small ? '-20px 20px' : '-40px 40px'} #85EDF3;
    width: ${props => props.small ? '244' : '468'}px;
`;

export const StyledExternalLink = styled.a`
    color: #4BB3B9;
`;