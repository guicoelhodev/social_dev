import styled from 'styled-components';

export const Loading = styled.div`
  color: ${(props) => props.theme.primaryColor};
  width: 100vw;
  height: ${(props) => props.theme.maxHeight};

  display: grid;
  place-items: center;

  font-size: 2rem;
`;
