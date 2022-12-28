import { scrollContainer } from '@utilis/scrollContainer';
import React, { ReactNode, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import * as S from './style';

interface ISimpleCarousel {
  children: ReactNode;
}
export const SimpleCarousel: React.FC<ISimpleCarousel> = ({ children }) => {
  const listRef = useRef(null);
  return (
    <S.Container>
      <button onClick={() => scrollContainer(listRef, 'left')}>
        <BsChevronCompactLeft />
      </button>
      <ul ref={listRef}>{children}</ul>
      <button onClick={() => scrollContainer(listRef, 'right')}>
        <BsChevronCompactRight />
      </button>
    </S.Container>
  );
};
