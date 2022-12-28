import { SimpleCarousel } from '@components/UI/carousels';
import { useSession } from 'next-auth/react';
import React from 'react';

import * as S from './style';

export const NetworkList: React.FC = () => {
  const arr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1,
  ];
  const { data } = useSession();

  const getHorizontalPosition = (index: number) => {
    return `translateX(-${index * 8}px)`;
  };

  return (
    <S.Container>
      <header>
        <h3>My network</h3>
        <p>{arr.length}</p>
      </header>
      <SimpleCarousel>
        {arr.map((_, index) => (
          <S.FriendAvatar
            key={'friend_' + index}
            positionX={getHorizontalPosition(index)}
          >
            <img src={data?.user?.image!} />
          </S.FriendAvatar>
        ))}
      </SimpleCarousel>
    </S.Container>
  );
};
