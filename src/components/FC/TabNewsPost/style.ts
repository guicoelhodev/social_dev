import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0}
  60% { opacity: 1}
  100% { opacity: 1}
`;

export const Container = styled.article`
  animation: ${fadeIn} 800ms cubic-bezier(0.165, 0.84, 0.44, 1);

  width: 100%;
  padding: 1rem;
  background-color: ${(p) => p.theme.secondaryBg};
  border-radius: ${(p) => p.theme.radius};

  footer {
    padding-top: 1rem;
    display: flex;
    justify-content: flex-end;

    button {
      background-color: transparent;
      padding: 0.5rem;
      border: 0;

      p {
        font-size: 0.9rem;
        color: ${(p) => p.theme.terciaryColor};
        text-decoration: underline;
      }
    }
  }
`;

export const Header = styled.header`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;

  h3 {
    color: ${(p) => p.theme.primaryColor};
  }
  p {
    color: ${(p) => p.theme.secondaryColor};
  }
`;

export const ContentOfBody = styled(motion.section)`
  overflow: hidden;
  position: relative;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: ${(p) => p.theme.terciaryColor};
  line-height: 1.8rem;

  h1,
  h2,
  h3 {
    padding-top: 1rem;
    font-size: 1rem;
  }

  h1,
  h2 {
    font-size: 1.1rem;
  }

  pre {
    margin-top: 1rem;
    background-color: ${(p) => p.theme.primaryBg};
    padding: 0.8rem;
    border-radius: ${(p) => p.theme.radius};
  }
  hr {
    margin-top: 1rem;
  }
  a {
    align-self: center;
  }

  code {
    background-color: ${(p) => p.theme.primaryBg};
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
  }
`;
