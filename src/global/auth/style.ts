import styled from 'styled-components';

export const Loading = styled.div`
  color: ${(props) => props.theme.primaryColor};
  width: 100vw;
  //height: ${(props) => props.theme.maxHeight};
  height: 100vh;

  display: grid;
  place-items: center;

  font-size: 2rem;
`;
