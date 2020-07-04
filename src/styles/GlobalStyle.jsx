import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    // font-size: 62.5%; // Set 1rem = 10px
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "Roboto Mono", monospace;
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        pointer-events: none;
        user-select: none;
      }
    }

    p {
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 0.75em;
    }

    h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
    }

    a {
        color: #4BB3B9;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;

        @media (max-width: ${props => props.theme.breakpoints.sm}px) {
          font-size: 17px;
      }
    }

    
  }
`;

export default GlobalStyle;
