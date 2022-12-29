import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.2rem 0;
  position: relative;

  input {
    border-radius: var(--min-radius);
    margin-top: 0.5rem;
    width: 100%;
    padding-left: 0.5rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.terciaryColor};
    font-size: 1rem;

    background-color: ${({ theme }) => theme.secondaryBg};
    border: 1px solid ${({ theme }) => theme.terciaryColor};

    :focus {
      outline: 1px solid ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.primaryColor};
    }
  }

  div {
    padding-top: 0.2rem;
    font-size: 0.8rem;
    color: var(--red-400);
    height: 1rem;
  }
`;

export const ViewPassword = styled.button`
  right: 6px;
  top: 50%;
  transform: translateY(calc(-50% + 0.3rem));
  background-color: inherit;
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  border-color: transparent;

  :focus {
    outline: 1px solid transparent;
  }

  svg {
    fill: ${({ theme }) => theme.primaryColor};
    width: 100%;
    height: 100%;
  }
`;
