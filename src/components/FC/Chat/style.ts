import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IChatState {
  open: boolean;
}
export const Container = styled(motion.section)`
  z-index: 2;
  position: fixed;
  bottom: 0;
  right: 6rem;

  overflow: hidden;

  background-color: ${(props) => props.theme.secondaryBg};
  border-radius: 8px 8px 0 0;
  width: 100%;
  max-width: 25rem;
  max-height: 30rem;
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme.primaryColor};
  border-bottom-color: inherit;

  @media (max-width: 810px) {
    bottom: 5rem;
    right: 0;
  }

  @media (max-width: 500px) {
    max-width: none;
    max-height: 60vh;
    border-color: inherit;
    border-radius: 0;
  }
`;

export const Header = styled.header<IChatState>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.6rem;

  p {
    color: ${(props) => props.theme.primaryColor};
  }

  svg {
    fill: ${(props) => props.theme.primaryColor};
    height: 1.4rem;
    width: 1.4rem;

    transition: rotate 150ms linear;
    rotate: ${(props) => (props.open ? '180deg' : 0)};
  }

  button {
    background-color: inherit;
    padding: 0.3rem;
    border: 0;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4rem;
  flex: 1;

  /* div:nth-child(odd) {
  }
  div:nth-child(even) {
  } */
`;

export const FriendList = styled.ul`
  z-index: 1;
  flex: 1;

  position: relative;

  background-color: ${(props) => props.theme.secondaryBg};
  padding: 0.4rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  overflow-y: auto;

  aside {
    padding-bottom: 1rem;
  }

  button {
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.theme.primaryBg};
    border-radius: 50%;

    display: grid;
    place-items: center;
    border: 0;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  button:not(button:nth-child(1)) {
    margin-top: 0.8rem;
  }

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: calc(100% - 4rem);
    width: 1px;
    background-color: ${(props) => props.theme.terciaryColor};
  }
`;
