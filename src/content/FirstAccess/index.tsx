import { NextPageAuthenticated } from '@auth';
import { PasswordInput, TextInput } from '@components/UI/inputs';
import { zodResolver } from '@hookform/resolvers/zod';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './style';
import * as z from 'zod';

type IFirstAccess = z.infer<typeof schema>;

const schema = z.object({
  github_username: z.string(),
  password: z
    .string({ required_error: 'This field is required' })
    .min(8, { message: 'Password must contain at least 8 character(s)' }),
});

const FirstAccess: NextPageAuthenticated = () => {
  if (typeof window !== 'undefined') {
    let userContent = localStorage.getItem('@USER_CREDENTIALS');

    if (userContent && !JSON.parse(userContent).firstAccess)
      return Router.push('/');
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<IFirstAccess>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    localStorage.setItem('@USER_CREDENTIALS', JSON.stringify(data));
    Router.push('/');
  });

  return (
    <S.Container>
      <section>
        <h2>First Login detected</h2>

        <TextInput
          label="github username"
          type="text"
          register={register('github_username')}
          error={errors.github_username?.message}
        />
        <PasswordInput
          label="Password"
          register={register('password')}
          error={errors.password?.message}
        />

        <S.SignInButton onClick={onSubmit}>Go to homepage</S.SignInButton>
      </section>
    </S.Container>
  );
};

export default FirstAccess;
