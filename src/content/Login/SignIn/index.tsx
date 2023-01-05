import React from 'react';
import { PasswordInput, TextInput } from '@components/UI/inputs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

import SmallSocialLogo from '@assets/svg/social_logo_sm.svg';
import Image from 'next/image';

import * as S from './style';
import * as z from 'zod';

const requiredField = 'This field is required';

const shema = z.object({
  email: z.string({ required_error: requiredField }).email({
    message: 'Format email invalid',
  }),
  password: z.string({ required_error: requiredField }).min(1, {
    message: requiredField,
  }),
});

type IUserLogin = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserLogin>({
    resolver: zodResolver(shema),
  });

  const onSubmit = handleSubmit((data) => console.log('data'));

  const handleSign = async (provider: string) => {
    await signIn(provider, {
      callbackUrl: `${process.env.URL_APP}/firstAccess`,
      //redirect: false,
    });
  };
  return (
    <S.Container>
      <header>
        <h2>SOCIAL DEV</h2>
        <Image
          src={SmallSocialLogo}
          alt="social logo small size to decorate header login"
          height={60}
          width={60}
          className="logo-sm"
        />
      </header>

      <S.ExternalLogin>
        <p>Sign In with your account</p>

        <button onClick={() => handleSign('github')}>
          <AiFillGithub />
        </button>

        <button onClick={() => handleSign('linkedin')}>
          <AiFillLinkedin />
        </button>
      </S.ExternalLogin>
      <aside>
        <span />
        <p>OR</p>
        <span />
      </aside>
      <form onSubmit={onSubmit}>
        <TextInput
          label="Email"
          type="email"
          register={register('email')}
          error={errors.email?.message}
        />
        <PasswordInput
          label="Password"
          register={register('password')}
          error={errors.password?.message}
        />

        <S.SignInButton onClick={() => {}}>Log In</S.SignInButton>
      </form>

      <footer>
        <p>
          Did you forget the password? <a href="#">Click here</a>
        </p>
      </footer>
    </S.Container>
  );
};
