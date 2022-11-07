import { NextPage } from 'next';
import { SignIn } from './SignIn';
import * as S from './style';

const LoginPage: NextPage = () => {
  return (
    <S.Container>
      <section></section>
      <section>
        <SignIn />
      </section>
    </S.Container>
  );
};

export default LoginPage;
