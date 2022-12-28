import styled from 'styled-components';

interface IFriendAvatar {
  positionX: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBg};

  border-radius: ${(props) => props.theme.radius};
  padding: 1rem;

  header {
    display: flex;
    align-items: center;
    h3,
    h4 {
      color: ${(props) => props.theme.primaryColor};
      flex: 1;
    }
  }
`;

export const FriendAvatar = styled.li<IFriendAvatar>`
  width: 4rem;
  transform: ${(props) => props.positionX};

  img {
    border: 2px solid;
    border-color: ${(props) => props.theme.primaryColor};
    aspect-ratio: 1/1;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
