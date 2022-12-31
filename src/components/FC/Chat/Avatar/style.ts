import styled from 'styled-components';

export const Container = styled.button`
  width: 3rem;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.primaryBg};
  border-radius: 50%;

  display: grid;
  place-items: center;
  border: 0;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  img {
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
  }
`;
