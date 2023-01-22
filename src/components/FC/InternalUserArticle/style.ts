import styled from 'styled-components';

interface IStyle {
  shared?: boolean;
}

interface ICard {
  loveAction: boolean;
}

export const Container = styled.article`
  width: 100%;

  background-color: ${(props) => props.theme.secondaryBg};
  border-radius: ${(props) => props.theme.radius};

  position: relative;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-columns: repeat(3, 1fr);

  grid-template-areas: 'a a a b b b';
`;

export const UserInfo = styled.section`
  grid-area: a;

  padding: 0.6rem;

  display: flex;
  gap: 0.8rem;

  img,
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.secondaryBg};
  }

  span {
    display: grid;
    place-items: center;

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  article {
    margin: auto 0;

    p {
      max-width: 20rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    p:nth-child(1) {
      font-weight: 600;
    }
    p:nth-child(2) {
      padding-top: 0.5rem;
      font-weight: 400;
      font-size: 0.9rem;
      opacity: 0.95;
    }
  }

  @media (max-width: 500px) {
    article > p {
      max-width: 14rem;
    }
  }
  @media (max-width: 500px) {
    article > p {
      max-width: 12rem;
    }
  }
`;

export const FollowUserContainer = styled.section<ICard>`
  grid-area: b;
  padding: 1rem 0.5rem 0 0;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  button:nth-child(2),
  button:nth-child(3) {
    background-color: transparent;
    padding-top: 0.2rem;
    padding: 0.2rem;
    border: 0;

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  button:nth-child(3) {
    svg {
      transition: all 0.2s;
      fill: ${(props) => (props.loveAction ? '#FF4055' : '#ccc')};
    }
  }

  @media (max-width: 550px) {
    padding-top: 0;
    padding-bottom: 0.5rem;
    grid-row: 454;
    align-content: center;

    button:nth-child(1) {
      position: absolute;
      top: 20px;
      right: 10px;
      height: auto;
      border: 0;
    }
  }
`;

export const Title = styled.h3<IStyle>`
  grid-column: span 6;
  font-size: '1rem';
  color: ${(props) => props.theme.primaryColor};

  padding: 0.6rem;
  padding-left: ${(props) => (props.shared ? '1rem' : '0.5rem')};
`;

export const Description = styled.p<IStyle>`
  grid-column: span 6;
  font-size: 1rem;
  padding: 0.6rem;
  padding-left: ${(props) => (props.shared ? '1rem' : '0.5rem')}; ;
`;

export const LoveContainer = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;

  * {
    position: absolute;
    left: 0;
  }
`;

export const SharedContent = styled.section`
  width: calc(100% - 2rem);
  margin: 0 auto;
  grid-column: span 6;
  padding: 0.5rem 0;

  border-bottom: 1px dashed ${(props) => props.theme.primaryColor};

  h3,
  p {
    padding-left: 0;
  }
`;

export const PostContent = styled.section<IStyle>`
  border-radius: inherit;
  grid-column: span 6;
  background-color: ${({ theme, shared }) =>
    shared ? theme.primaryBg : theme.secondaryBg};

  width: ${(props) => (props.shared ? 'calc(100% - 30px)' : '100%')};
  margin: ${(props) => (props.shared ? '20px' : '0')} auto;
  padding: ${(props) => (props.shared ? 0 : '0.6rem')};

  p:nth-child(1) {
    padding: 0.6rem;
  }

  strong {
    color: ${(props) => props.theme.secondaryColor};
  }
`;
