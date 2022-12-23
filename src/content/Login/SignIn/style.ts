import styled from 'styled-components';

export const Container = styled.main`

  
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 1rem;

    h2 {
      color: ${({ theme }) => theme.primaryColor};
      font-family: var(--oxanium);
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
  aside {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      font-family: var(--oxanium);
      font-size: 1rem;
    }
    span {
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.terciaryColor};
    }
  }

  article {
    display: flex;
    flex-direction: column;
  }

  footer {
    padding: 1rem 0 3rem 0;
    p {
      text-align: center;
      a {
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
`;

export const ExternalLogin = styled.section`
  padding: 0.8rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;

  p {
    grid-column: span 2;
  }

  p,
  button {
    justify-self: center;
  }
  button {
    width: 3.75rem;
    aspect-ratio: 1/1;
    border-radius: var(--radius);
    background-color: ${({ theme }) => theme.secondaryBg};
    border-color: ${({ theme }) => theme.secondaryBg};

    svg {
      transition: all 0.5s ease;
      fill: ${({ theme }) => theme.primaryColor};
      width: 70%;
      height: 70%;
    }
  }
`;

export const SignInButton = styled.button`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 0.4rem;
  border-radius: var(--min-radius);
  border-color: ${({ theme }) => theme.primaryColor};

  font-size: 1rem;
  color: var(--grey-200);
`;
