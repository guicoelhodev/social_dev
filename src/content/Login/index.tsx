import { NextPage } from 'next';
import { Background } from '@pages/Login/Background';
import { SignIn } from '@pages/Login/SignIn';
import { useSession } from 'next-auth/react';

import * as S from './style';

const LoginPage: NextPage = () => {
  const { data } = useSession();

  console.log(data);

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
