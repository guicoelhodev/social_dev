import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBg};

  border-radius: ${(props) => props.theme.radius};
  padding: 1rem;

  h3 {
    color: ${(props) => props.theme.secondaryColor};
  }

  header {
    display: flex;

    h3 {
      flex: 1;
    }
  }
  aside {
    width: 100%;
    padding: 2rem 0;

    display: grid;
    place-items: center;
    gap: 0.8rem;
  }
`;

export const Repository = styled.li`
  margin-left: 1rem;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.radius};

  padding: 1rem;
  width: 100%;
  max-width: 25rem;

  header {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    h4 {
      flex: 1;
      font-size: 1rem;
      color: ${(props) => props.theme.primaryColor};
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      font-size: 0.8rem;
      padding: 0.3rem 0.4rem;
      border-radius: 16px;
      border: 1px solid ${(props) => props.theme.terciaryColor};
      margin-right: 5px;
    }
  }

  section {
    padding-top: 1rem;
  }

  @media (max-width: 440px) {
    max-width: 22rem;
  }
`;
