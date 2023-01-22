import React from 'react';
import { useBearStore } from 'src/stories/Users/userActions';
import * as S from './style'

export const BearFn: React.FC = () => {

  const {increasePopulation } = useBearStore();
  return <S.Container>
    <p>ashasuhasu</p>

    <button onClick={() => increasePopulation()}>INCREASE</button>
  </S.Container>
}
