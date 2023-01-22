import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 0.5rem;
  padding-left: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }
`;

export const PageContent = styled.main`
  position: relative;
  max-width: 80rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ListArticles = styled.ul`
  max-width: 50rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
