import { NextPage } from 'next';
import { Background } from '@pages/Login/Background';
import { SignIn } from '@pages/Login/SignIn';
import { useSession } from 'next-auth/react';

import * as S from './style';
import { NextPageAuthenticated } from '@auth';

const LoginPage: NextPageAuthenticated = () => {
  const { data, status } = useSession();

  console.log(status);

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

LoginPage.auth = false;
