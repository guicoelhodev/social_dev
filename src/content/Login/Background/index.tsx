import { useScroll } from 'framer-motion';
import React, { useEffect } from 'react';
import * as S from './style';

export const Background: React.FC = () => {
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log('Page scroll: ', latest);
    });
  }, []);
  return (
    <S.Container>
      <p>hdsuhdu</p>
    </S.Container>
  );
};
