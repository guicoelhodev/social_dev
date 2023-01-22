import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.section)`
  background-color: ${(p) => p.theme.primaryBg};
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 50rem;
  border-radius: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: hidden;

  article:nth-child(1) {
    padding-top: 1rem;
  }
  article {
    display: flex;
    gap: 0.6rem;
    background-color: ${(p) => p.theme.primaryBg};
  }
  .active-search {
    border-bottom: 2px solid ${(p) => p.theme.secondaryColor};

    p {
      color: ${(p) => p.theme.secondaryColor};
    }
  }

  .active-search-type {
    border: 1px solid ${(p) => p.theme.primaryColor};

    background-color: ${(p) => p.theme.primaryColor};
    p {
      color: ${(p) => p.theme.primaryBg};
    }
    svg {
      fill: ${(p) => p.theme.primaryBg};
    }
  }
`;

export const SearchBtn = styled.button`
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 0.8rem;
  padding-left: 0;
  background-color: ${(p) => p.theme.primaryBg};
  border: 2px solid transparent;
`;

export const NewsBtn = styled.button`
  border-radius: ${(p) => p.theme.radius};
  background-color: ${(p) => p.theme.secondaryBg};
  padding: 0.4rem 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
