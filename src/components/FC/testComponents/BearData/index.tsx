import React from 'react';
import { useBearStore } from 'src/stories/Users/userActions';
import * as S from './style';

export const BearData: React.FC = () => {

  const bears = useBearStore(state => state.bears);
  return (
    <S.Container>
      <p>{bears}</p>
    </S.Container>
  );
};
