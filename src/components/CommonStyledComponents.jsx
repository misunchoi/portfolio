import styled from "styled-components";

export const Section = styled.div`
    margin: 1em 0;
    ${({ theme }) => theme.media.up.md`margin: 2em 0;`}
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    width: fit-content;
    flex-wrap: wrap;

    ${({ theme }) => theme.media.down.lg`
        flex-direction: column;
        align-items: center;
    `}
`;

export const StyledImage = styled.img`
    margin: 1em;
    box-shadow: ${props => props.small ? '-1em 1em' : '-2em 2em'} #85EDF3;
    width: ${props => props.small ? '244' : '468'}px;
    height: ${props => props.small ? '244' : '468'}px;
    object-fit: cover;

    ${({ theme }) => theme.media.down.md`
        width: 244px;
        height: 244px;
        box-shadow: -1em 1em #85EDF3;
        margin: 1em 0 1em 1em;
    `}

    ${({ theme }) => theme.media.down.lg`
        margin: 2em 0 2em 2em;
    `}
`;

export const Description = styled.div`
    background-color: #dcdbdb;
    margin: ${props => props.long ? '1em 1em 1em 2em' : '1em 1em 1em 4em'};
    padding: ${props => props.long ? '2' : '4'}em;
    width: ${props => props.long ? '774' : '468'}px;

    ${({ theme }) => theme.media.down.lg`
        width: calc(80% + 1em);
        margin: 1em 0;
        padding: 2em;
    `}
`;