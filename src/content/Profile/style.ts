import Image from 'next/image';
import styled from 'styled-components';

interface IEditBtn {
  size?: 'sm' | 'md';
}

const editBtnSize = {
  sm: '2rem',
  md: '3rem',
} as const;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.primaryBg};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  padding-bottom: 4rem;
`;

export const ProfileSection = styled.section`
  position: relative;
  width: 100%;

  background-color: ${(props) => props.theme.secondaryBg};

  border-radius: ${(props) => props.theme.radius};

  header {
    border-radius: 8px 8px 0 0;
    position: relative;
    height: 10rem;
    border: 1px solid red;
  }
`;

export const ProfileInfo = styled.article`
  padding: 1rem 0 2rem 8rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  div {
    flex: 1 0 14rem;
    aside {
      display: flex;
      gap: 4px;

      p {
        color: ${(props) => props.theme.primaryColor};
      }
    }

    aside:not(aside:nth-child(1)) {
      padding-top: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    aside {
      justify-content: flex-end;
      padding-right: 1rem;
    }
  }
`;

export const DescriptionSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 20rem;
  gap: 1rem;

  article {
    padding: 1rem;
    background-color: ${(props) => props.theme.secondaryBg};
    border-radius: ${(props) => props.theme.radius};

    h3 {
      color: ${(props) => props.theme.secondaryColor};
      font-weight: 400;
      padding-bottom: 0.5rem;
    }
  }

  article:nth-child(1) {
    max-height: 10rem;
    width: 100%;
    overflow-y: auto;

    word-break: break-all;
  }

  article:nth-child(2) {
    position: relative;

    h3 {
      justify-self: flex-start;
    }

    li {
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    ul {
      justify-content: center;
    }
  }
`;

// Small components

export const AvatarImage = styled(Image)`
  border-radius: 50%;
  transform: translate(8px, 70px);
  z-index: 1;

  @media (max-width: 810px) {
    width: 7rem;
    height: 7rem;
  }
`;

export const EditBtn = styled.button<IEditBtn>`
  width: ${(props) =>
    props.size
      ? editBtnSize[props.size as keyof typeof editBtnSize]
      : '2.5rem'};
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 0;

  place-items: center;
  background-color: inherit;

  position: absolute;
  top: 10px;
  right: 10px;

  svg {
    width: 60%;
    height: 60%;
  }
`;

export const Repository = styled.li`
  width: 400px;
  background-color: #333;
`;
