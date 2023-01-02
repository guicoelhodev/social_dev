import { darkTheme } from '@style/theme';
import React, { MouseEvent, ReactNode } from 'react';
import * as S from './style';

export interface PropsBtn {
  color?: keyof typeof darkTheme;
  bg?: string;
  radius?: string;
  svgDirection?: 'left' | 'right';
  svgColor?: keyof typeof darkTheme;
  borderColor?: string;
  boxShadow?: string;
}

interface IButton extends PropsBtn {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButton> = (props) => {
  return (
    <S.Container {...props} onClick={props.onClick}>
      {props.children}
    </S.Container>
  );
};
