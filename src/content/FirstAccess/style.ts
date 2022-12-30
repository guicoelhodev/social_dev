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
  height: ${(props) => props.theme.maxHeight};

  display: grid;
  place-items: center;
  padding: 1rem;

  main {
    max-width: 20rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    footer {
      width: 100%;
      display: flex;
      justify-content: space-between;

      aside {
        display: flex;
        gap: 0.3rem;
        align-items: center;
      }
    }
  }

  .hidden {
    visibility: hidden;
  }
`;

export const ViewContainer = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  aspect-ratio: 1/1;

  scroll-snap-type: x mandatory;
`;

// small components

export const View = styled.article`
  scroll-snap-align: center;
  flex: 0 0 auto;
  width: 100%;

  padding: 0.5rem;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${(props) => props.theme.secondaryColor};
  }
  h4 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.terciaryColor};
    font-weight: 400;
  }

  h3,
  h4 {
    padding-bottom: 2rem;
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

export const NavigateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: transparent;
  border: 0;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  textarea {
    width: 100%;
    height: calc(100% - 5rem);
    border-radius: 5px;
    resize: none;

    background-color: inherit;
    outline: 0;

    padding: 0.5rem;
    color: ${(props) => props.theme.terciaryColor};
    line-height: 1.4rem;

    border: 1px solid ${(props) => props.theme.terciaryColor};

    :focus {
      border: 1px solid ${(props) => props.theme.primaryColor};
    }
  }
`;

export const ButtonMode = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

  .active {
    border-color: ${(props) => props.theme.primaryColor};
    svg {
      fill: ${(props) => props.theme.primaryColor};
    }
  }
  button {
    width: 2.5rem;
    background-color: transparent;
    aspect-ratio: 1/1;
    border-radius: 50%;

    display: grid;
    place-items: center;

    svg {
      width: 60%;
      height: 60%;
    }
  }
`;

export const LanguagesModal = styled.section`
  padding-top: 3rem;

  display: flex;
  flex-direction: column;

  button {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme.primaryColor};
    border-color: ${(props) => props.theme.primaryColor};
    border-radius: ${(props) => props.theme.radius};
  }
`;
