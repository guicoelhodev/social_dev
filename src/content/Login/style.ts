import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 81.25rem;
  height: ${(props) => props.theme.maxHeight};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 22rem);
  padding: 2rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;

    section:nth-child(1) {
      display: none;
    }

    section:nth-child(2) {
      margin: 0 auto;
      max-width: 500px;
      width: 100%;
    }
  }
`;
