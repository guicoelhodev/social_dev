import { createGlobalStyle } from "styled-components";

interface IGlobalTheme {
  theme: {
    primaryBg: string;
    secondaryBg: string;
    primaryColor: string;
    secondaryColor: string;
    terciaryColor: string;
    grey300: string;
  };
}
export const GlobalStyles = createGlobalStyle<IGlobalTheme>`

* {
    padding:0;
    margin:0;
    box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.primaryBg};
  font-family: 'Montserrat', sans-serif;
  transition: color, background-color 0.3s ease-in;

  h1 {
    color: ${({ theme }) => theme.primaryColor};
  }

  h2 {
    color: ${({ theme }) => theme.secondaryColor};
  }

 
}

:root {

  --green-200: #00C57E;
  --green-400: #35F8B1;

  --pink-200: #FF6897;


  --black-100: #1E1E1E;
  --black-150: #252525;
  
  --grey-200: #3f3f3f;
  --grey-600: #757575;
  --grey-800: #B6B6B6;
  --grey-900: #D9D9D9;

  --white: #F0F0F0;
  --whitesmoke: #E9E9E9;
}
`;
