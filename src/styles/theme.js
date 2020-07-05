import { css } from "styled-components";

const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 1154,
  xl: 1200,
};

const maxMediaQueries = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${args};
    }
  `;
  return acc;
}, {});

const minMediaQueries = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] + 1}px) {
      ${args};
    }
  `;
  return acc;
}, {});

export const theme = {
  media: {
    up: {
      ...minMediaQueries,
    },
    down: {
      ...maxMediaQueries,
    },
  },

  primaryDark: "#0D0C1D",
  primaryLight: "#dcdbdb",
  primaryHover: "#343078",
  mobile: "576px",
};
