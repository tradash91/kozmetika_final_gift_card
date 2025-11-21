// GlobalStyles.js
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`


 :root {
  
--brown:#DCC29C;
--white:#F2EFEB;
--black: #3D362F;
--grey:#5E5E5E;
--text-black:#3D362F;
--purple:#BC0E88;
--active: #ebda8dff;
--dark-brown: #9E8563;
--green: #3fd63fff;
--red: #fa3131ff;
  
  /* Gradients */
  --light-gradient: linear-gradient(180deg,#F5F5FF 72.99%, #E0E0FF 100%);

  /* Border radius */
  --radius-0: 0;
  --radius-2: 2px;
  --radius-4: 4px;
  --radius-6: 6px;
  --radius-8: 8px;
  --radius-10: 10px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-20: 20px;
  --radius-24: 24px;
  --radius-full: 999px;

  /* Spacing */
  --spaceing-0: 0;
  --spaceing-025: 2px;
  --spaceing-050: 4px;
  --spaceing-075: 6px;
  --spaceing-100: 8px;
  --spaceing-125: 10px;
  --spaceing-150: 12px;
  --spaceing-200: 16px;
  --spaceing-250: 20px;
  --spaceing-300: 24px;
  --spaceing-400: 32px;
  --spaceing-500: 40px;
  --spaceing-600: 48px;
  --spaceing-800: 64px;
  --spaceing-1000: 80px;
 

  /* Typography */
  --font-size-display-lg: 3.5rem;
  --font-size-display-md: 3rem;
  --font-size-display-sm: 2.5rem;

  --font-size-heading-lg: 2rem;
  --font-size-heading-md: 1.5rem;
  --font-size-heading-sm: 1.25rem;

  --font-size-body-lg: 1.125rem;
  --font-size-body-md: 1rem;
  --font-size-body-sm: 0.875rem;

  --font-size-caption: 0.75rem;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Other */
  --color-transparent: transparent;


  }

  /* Box sizing fix for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Reset margin & padding, improve text rendering */
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote, dl, dd {
    margin: 0;
    padding: 0;
    font-weight: normal;
    
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      

     @media (min-width: 1600px) {
    font-size: 90%;
  } 
   @media (max-width: 580px) {
    font-size: 50%;
  }
    
  }

  body {
    font-family: 'reddit sans', 'Roboto', 'Segoe UI', sans-serif;
    line-height: 1.6;
    min-height: 100vh;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Remove list styles */
  ul, ol {
    list-style: none;
  }




`;

export const flex = (direction = "column") => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${direction};
`;

export const mont_12_regular = css`
  font-size: 12px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;

export const mont_13_lightItalic = css`
  font-size: 13.33px;
  font-weight: 300;
  font-style: italic;
  font-family: "Montserrat", sans-serif;
`;

export const mont_13_regular = css`
  font-size: 13.33px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;

export const mont_16_regular = css`
  font-size: 16px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;

export const mont_16_medium = css`
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

export const mont_20_semiBold = css`
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

export const mont_17_medium = css`
  font-size: 17px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

export const mont_20_medium = css`
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

export const mont_25_light = css`
  font-size: 25px;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
`;

export const mont_29_lightItalic = css`
  font-size: 29px;
  font-weight: 300;
  font-style: italic;
  font-family: "Montserrat", sans-serif;
`;

export const mont_29_medium = css`
  font-size: 29px;
  font-weight: 500;
  font-style: italic;
  font-family: "Montserrat", sans-serif;
`;

export const dancing_90_medium = css`
  font-size: 90px;
  font-family: "Dancing Script", cursive;
  font-weight: 500;
`;

export const dancing_60_medium = css`
  font-size: 60px;
  font-family: "Dancing Script", cursive;
  font-weight: 500;
`;

export const dancing_50_medium = css`
  font-size: 50px;
  font-family: "Dancing Script", cursive;
  font-weight: 500;
`;

export const cormorant_15_regular = css`
  font-size: 17px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
`;

export const cormorant_18_regular = css`
  font-size: 18px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
`;

export const cormorant_18_medium = css`
  font-size: 18px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
`;

export const cormorant_20_semiBold = css`
  font-size: 20px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
`;

export const cormorant_24_regular = css`
  font-size: 24.26px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
`;

export const cormorant_28_regular = css`
  font-size: 28.26px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
`;

export const cormorant_31_medium = css`
  font-size: 31.25px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  text-align: center;
`;

export const cormorant_45_medium = css`
  font-size: 45px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
`;

export const cormorant_60_medium = css`
  font-size: 60px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
`;

export const cormorant_100_medium = css`
  font-size: 100px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
`;

export const cormorant_150_medium = css`
  font-size: 150px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
`;

export const cormorant_39_medium = css`
  font-size: 39.06px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
`;
export default GlobalStyles;
