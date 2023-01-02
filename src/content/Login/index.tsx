import { Background } from '@pages/Login/Background';
import { SignIn } from '@pages/Login/SignIn';

import * as S from './style';
import { NextPageAuthenticated } from '@auth';

const LoginPage: NextPageAuthenticated = () => {
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
