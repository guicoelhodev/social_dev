import styled from 'styled-components';

export const Container = styled.div`
  height: calc(600px - 5rem);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  footer {
    width: 100%;
    padding: 0.5rem 1rem;
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: flex-end;

    button {
      margin-left: auto;
      padding: 0.4rem 0.8rem;
      background-color: ${(props) => props.theme.primaryColor};
      border-color: ${(props) => props.theme.primaryColor};
      border-radius: 5px;
    }
  }
`;

export const SearchContainer = styled.article`
  padding: 0 0.8rem;

  input {
    width: 100%;
    background-color: inherit;
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.terciaryColor};
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};

    outline: none;
  }
`;
export const GridIcons = styled.article`
  height: calc(600px - 13rem);
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  justify-content: space-evenly;
  align-content: flex-start;
  position: relative;

  li {
    width: 100%;
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;

    p {
      flex: 1;
      font-size: 1.2rem;
    }
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
export const Checkbox = styled.input`
  width: 1.5rem;
  aspect-ratio: 1/1;
  border-radius: 50px;

  accent-color: ${(props) => props.theme.secondaryColor};
`;
