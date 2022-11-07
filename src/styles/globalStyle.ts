import { createGlobalStyle } from 'styled-components';

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
    font-size: var(--title-lg);
  }

  h2 {
    color: ${({ theme }) => theme.secondaryColor};
    font-size: var(--title-md);
  }

  p, span, label {
    color: ${({ theme }) => theme.terciaryColor};
    font-size: 1rem;
  }

  button {
    cursor:pointer;
    border: 1px solid ${({ theme }) => theme.terciaryColor};

    :focus {
      outline: 1px solid ${({ theme }) => theme.primaryColor};  
    }
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  svg {
    fill: ${({ theme }) => theme.terciaryColor};
  }
}

:root {

  --green-200: #00C57E;
  --green-400: #35F8B1;

  --pink-200: #FF6897;

  --red-400: #FF5454;
  
  --black-100: #1E1E1E;
  --black-150: #252525;
  
  --grey-200: #3f3f3f;
  --grey-600: #757575;
  --grey-800: #B6B6B6;
  --grey-900: #D9D9D9;

  --white: #F0F0F0;
  --whitesmoke: #E9E9E9;

  --title-lg: 1.5rem;
  --title-md: 1.25rem;
  --title-sm: 1.125rem;
  --title-xsm: 1rem;

  // text

  --text-md: 1rem;
  --text-sm: 0.875rem;

  // font--weight
    
  --light-monterrat: 400;
  --medium-montserrat: 500;
  --semibold-montserrat: 600;

  --radius: 8px;
  --min-radius: 5px;

  // fonts

  --montserrat: 'Montserrat';
  --oxanium: 'Oxanium';
}

html {

  @media (max-width: 2000px){
    font-size: 16px;
  }
  @media (max-width:810px){
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
}
`;
