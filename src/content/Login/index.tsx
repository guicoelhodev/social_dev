import { NextPage } from 'next';
import { Background } from '@pages/Login/Background';
import { SignIn } from '@pages/Login/SignIn';
import * as S from './style';

const LoginPage: NextPage = () => {
  return (
    <S.Container>
      {/* <Background /> */}
      <section></section>
      <section>
        <SignIn />
      </section>
    </S.Container>
  );
};

export default LoginPage;
