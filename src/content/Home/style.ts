import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;

  display: grid;
  place-items: center;
`;

export const AdviceContainer = styled.main`
  border-radius: var(--radius);
  border: 2px solid ${({ theme }) => theme.terciaryColor};
  max-width: 37.5rem;

  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 0.5rem;
  grid-template-areas:
    'title    title     theme'
    'subtitle subtitle  gif'
    'content  content   gif';

  .confused-girl {
    grid-area: gif;
  }

  h1 {
    grid-area: title;
  }
  h2 {
    grid-area: subtitle;
  }
`;

export const ToggleTheme = styled.aside`
  grid-area: theme;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 3rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondaryBg};

    display: grid;
    place-items: center;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: ${({ theme }) => theme.terciaryColor};
    }
  }
`;
export const Section = styled.section`
  grid-area: content;

  display: flex;
  flex-direction: column;

  p {
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const FigmaButton = styled.div`
  margin-top: 1rem;

  background: rgb(0, 233, 255);
  background: linear-gradient(
    84deg,
    rgba(0, 233, 255, 1) 0%,
    rgba(251, 52, 55, 1) 100%
  );
  padding: 0.1rem;
  width: 15rem;
  border-radius: var(--radius);

  a {
    border-radius: inherit;
    padding: 0.4rem;
    width: 100%;
    background-color: ${({ theme }) => theme.secondaryBg};

    display: flex;
    align-items: center;
    gap: 0.4rem;

    p {
      font-size: 1rem;
    }
  }
`;
