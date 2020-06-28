import styled from "styled-components";

export const Header1 = styled.div`
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
`;

export const Body = styled.div`
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`;

export const StyledImage = styled.img`
    margin: 1em;
    box-shadow: ${props => props.small ? '-20px 20px' : '-40px 40px'} #85EDF3;
    width: ${props => props.small ? '244' : '468'}px;
`;

export const StyledExternalLink = styled.a`
    color: #4BB3B9;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`;