import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.primaryBg};
  width: 100%;
  min-height: ${(props) => props.theme.maxHeight};
  height: 100%;
`;

export const PageContainer = styled.div`
  max-width: 80rem;
  padding-right: 4rem;
  margin: 0 auto;
  min-height: calc(${(props) => props.theme.maxHeight} - 4rem);

  @media (max-width: 810px) {
    padding-right: 0;
    padding-bottom: 4rem;
  }
`;
export const NavigatePages = styled.nav`
  background-color: ${(props) => props.theme.primaryBg};
  padding-top: 2rem;
  position: fixed;
  right: 0;
  top: 4rem;

  width: 4rem;
  height: ${(props) => props.theme.maxHeight};

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 810px) {
    //top: calc(var(--doc-height) - 4rem);
    bottom: 0;
    width: 100%;
    height: 4rem;
    padding: 0;

    flex-direction: row;
    justify-content: center;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: 4rem;
  z-index: 1;
  background-color: inherit;

  display: grid;
  grid-template-columns: 1fr 4rem;
  padding: 1rem 0.5rem;

  aside {
    display: grid;
    place-items: center;
  }

  button {
    margin-left: auto;
    margin-right: 1.5rem;
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  height: 100%;
  background-color: ${(props) => props.theme.secondaryBg};

  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;
// small styled components

export const ButtonMode = styled.button`
  border-radius: 50%;
  aspect-ratio: 1/1;
  width: 2.4rem;
  background-color: ${(props) => props.theme.primaryBg};

  display: grid;
  place-items: center;

  svg {
    width: 60%;
    height: 60%;
  }
`;

export const ButtonNav = styled.button`
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;

  background-color: ${(props) => props.theme.terciaryColor};

  svg {
    width: 1.6rem;
    height: 1.6rem;
    fill: ${(props) => props.theme.primaryBg};
  }
`;
