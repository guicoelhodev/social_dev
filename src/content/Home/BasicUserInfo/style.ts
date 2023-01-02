import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 100%;
  max-width: 20rem;

  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const User = styled.section`
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 1rem 0.8rem;

  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    article {
      background-color: ${(props) => props.theme.primaryBg};
      flex: 0 4rem;
      aspect-ratio: 1/1;
      border-radius: 50%;

      display: grid;
      place-items: center;

      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
      svg {
        width: 2rem;
        height: 2rem;
      }
    }

    section {
      flex: 1;
      display: flex;
      flex-direction: column;

      h4 {
        max-width: 14rem;
        color: ${(props) => props.theme.primaryColor};
        padding-bottom: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const UserConnections = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    p:nth-child(3) {
      color: ${(props) => props.theme.secondaryColor};
    }
    span {
      width: auto;
      overflow: hidden;
      flex: 1;
    }
  }
`;

export const LanguagesContainer = styled.section`
  border-radius: ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.secondaryBg};

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  strong {
    font-size: 1rem;
    color: ${(props) => props.theme.terciaryColor};
  }
`;
