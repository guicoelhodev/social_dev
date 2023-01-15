import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import * as S from './style';

interface IGithubButton {
  text?: string;
  onClick: () => void;
}
export const GithubButton: React.FC<IGithubButton> = ({ text, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <p>{text ? text : 'Connect github account'}</p>
      <AiFillGithub />
    </S.Container>
  );
};
