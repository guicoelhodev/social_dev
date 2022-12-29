import styled, { keyframes } from 'styled-components';

interface IWindow {
  maxWidth?: string;
  aspectRatio?: number;
}

const modalWindowAnimation = keyframes`
from {
  opacity:0;
  scale:0.9;
}
to {
  opacity:1;
  scale:1;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  display: grid;
  place-items: center;

  padding: 1rem;
  z-index: 1;
`;

export const Window = styled.section<IWindow>`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '37.5rem')};
  aspect-ratio: ${({ aspectRatio }) => (aspectRatio ? aspectRatio : 1 / 1)};
  overflow-y: auto;
  animation: ${modalWindowAnimation} 0.2s ease-in;

  background-color: ${(props) => props.theme.secondaryBg};

  header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme.primaryColor};
    }

    button {
      background-color: transparent;
      width: 2.2rem;
      aspect-ratio: 1/1;
      border: 0;

      display: grid;
      place-items: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
