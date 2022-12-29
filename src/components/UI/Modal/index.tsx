import React, { Dispatch, SetStateAction, ReactNode } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import * as S from './style';

interface IModal {
  setModalState: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
  aspectRatio?: number;
  maxWidth?: string;
}
export const Modal: React.FC<IModal> = ({
  setModalState,
  title,
  children,
  maxWidth,
  aspectRatio,
}) => {
  return (
    <S.Container>
      <S.Window aspectRatio={aspectRatio} maxWidth={maxWidth}>
        <header>
          <h3>{title}</h3>

          <button
            title="Close modal"
            onClick={() => setModalState((prev) => !prev)}
          >
            <AiOutlineCloseCircle />
          </button>
        </header>
        {children}
      </S.Window>
    </S.Container>
  );
};
