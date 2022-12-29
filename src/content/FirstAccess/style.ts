import styled, { keyframes } from 'styled-components';

const showSession = keyframes`
  from {
    opacity: 0;
    scale:0.9
  } to {
    opacity: 1;
    scale: 1;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;
  padding: 1rem;

  section {
    padding: 1rem;
    animation: ${showSession} 0.2 ease-in;
    width: 100%;
    max-width: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h2 {
      padding-bottom: 1rem;
    }
  }
`;

export const SignInButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 0.4rem;
  border-radius: var(--min-radius);
  border-color: ${({ theme }) => theme.primaryColor};

  font-size: 1rem;
  color: var(--grey-200);

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
