import React, { ChangeEvent, useState } from 'react';
import { TextInput } from '../../../components/UI/inputs';
import { yupValidateFn } from '../../../utils/yupValidate';
import * as yup from 'yup';
import * as S from './style';

type IUserLogin = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const [userLogin, setUserLogin] = useState<IUserLogin>({
    email: '',
    password: '',
  });
  const [yupError, setYupError] = useState<any>({});

  let yupSchema = yup.object().shape({
    email: yup.string().email().required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
  });

  const getInputValue = (
    { target }: ChangeEvent<HTMLInputElement>,
    mode: 'email' | 'password'
  ) => {
    if (mode === 'email') {
      setUserLogin((prev) => ({ ...prev, email: target.value }));
    } else {
      setUserLogin((prev) => ({ ...prev, password: target.value }));
    }
  };

  const verifyLoginFn = async () => {
    let result = await yupValidateFn(yupSchema, userLogin);
    setYupError(result.errors);
  };

  return (
    <S.Container>
      <header>Thats my header</header>
      <article>
        <TextInput
          label="email"
          type="email"
          value={userLogin.email}
          onChange={(e) => {
            getInputValue(e, 'email');
          }}
          error={yupError.email}
        />
        <TextInput
          label="passowrd"
          value={userLogin.password}
          onChange={(e) => {
            getInputValue(e, 'password');
          }}
          error={yupError.password}
        />

        <button onClick={verifyLoginFn}>Click here</button>
      </article>
    </S.Container>
  );
};
