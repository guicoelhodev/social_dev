import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: inherit;

  display: grid;
  grid-template-rows: 2rem 20rem 3rem;
  align-content: space-between;

  @media (max-width: 500px) {
    grid-template-rows: 2rem calc(40rem) 3rem;

    footer {
      padding-bottom: 0;
    }
  }
`;

export const ChatContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8rem;
  padding: 1rem;

  overflow-y: auto;

  li:nth-child(odd) {
    background-color: #89ffd5;
    margin-left: auto;
  }
  li:nth-child(even) {
    background-color: #d9d9d9;
    margin-right: auto;
  }
`;
export const ChatBox = styled.li`
  border-radius: 8px;
  padding: 0.4rem;
  max-width: 70%;

  display: flex;
  flex-direction: column;

  p {
    color: #000;
    font-size: 0.9rem;
  }
  span {
    align-self: flex-end;
    color: #444;
    font-size: 0.7rem;
  }


  @media (max-width: 500px) {
    p {
      font-size: 1rem;
    }

    span {
      font-size: 0.8rem;
    }
  }

`;

export const SendContainer = styled.footer`
  height: 100%;
  width: 100%;

  padding: 0 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  input {
    border: 1px solid ${(props) => props.theme.terciaryColor};
    flex: 1;
    width: 100%;
    background-color: ${(props) => props.theme.primaryBg};
    color: ${(props) => props.theme.terciaryColor};
    font-size: 0.9rem;

    border-radius: 16px;
    padding: 0.4rem 0.8rem;
    :focus {
      outline: 0;
      border-color: ${(props) => props.theme.primaryColor};
    }
  }

  button {
    display: grid;
    place-items: center;
    padding: 0.3rem;
    border-radius: 50%;
    background-color: inherit;
    border: 0;

    svg {
      width: 1.4rem;
      height: 1.4rem;
      fill: ${(props) => props.theme.primaryColor};
    }
  }
`;
