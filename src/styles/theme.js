import { css } from "styled-components";

const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 1154,
  xl: 1200,
};

const mediaQueries = (query) =>
  Object.keys(breakpoints).reduce((acc, label) => {
    const width = query === "min" ? breakpoints[label] + 1 : breakpoints[label];
    acc[label] = (...args) => css`
      @media (${query}-width: ${width}px) {
        ${args};
      }
    `;
    return acc;
  }, {});

export const theme = {
  media: {
    up: {
      ...mediaQueries("min"),
    },
    down: {
      ...mediaQueries("max"),
    },
  },

  primaryDark: "#0D0C1D",
  primaryLight: "#dcdbdb",
  primaryHover: "#343078",
};
