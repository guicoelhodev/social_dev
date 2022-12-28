import styled from 'styled-components';

export const Container = styled.button`
  background-color: #258036;
  border-radius: ${(props) => props.theme.radius};
  display: flex;
  align-items: center;
  padding: 0.3rem;
  font-size: 1.2rem;
  gap: 0.5rem;

  border-color: #258036;

  p {
    color: #fff;
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: #fff;
  }
`;
