import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
  width: 100%;
  height: 100%;

  flex: 1;
  background-color: inherit;

  header {
    position: relative;
    padding: 0.5rem;

    input {
      border-color: ${(props) => props.theme.terciaryColor};
      width: 100%;
      background-color: ${(props) => props.theme.primaryBg};
      color: ${(props) => props.theme.terciaryColor};
      font-size: 0.9rem;

      border-radius: 16px;
      padding: 0.4rem 0.8rem;
      padding-left: 2.2rem;
      :focus {
        outline: 0;
        border-color: ${(props) => props.theme.primaryColor};
      }
    }

    svg {
      position: absolute;
      top: 15px;
      left: 18px;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const List = styled.ul`
  padding: 1rem 0.5rem;
  width: 100%;
  height: 20rem;
  display: grid;
  align-items: flex-start;
  justify-content: center;

  grid-template-columns: repeat(auto-fit, 3rem);
  grid-template-rows: repeat(auto-fit, 3rem);
  gap: 1rem;

  overflow-y: auto;
  padding-top: 1rem;

  @media (max-width: 500px) {
    height: calc(50vh);
  }
`;
