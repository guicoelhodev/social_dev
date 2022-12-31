import React from 'react';
import * as S from './style';

interface IAvatar {
  avatar: string;
  name: string;
  id: string;
  disabled?: boolean;
  onClick?: () => void;
}
export const Avatar: React.FC<IAvatar> = (props) => {
  return (
    <S.Container title={props.name}>
      <img src={props.avatar} alt="friend avatar icon" />
    </S.Container>
  );
};
