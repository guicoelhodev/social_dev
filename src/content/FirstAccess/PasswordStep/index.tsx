import { PasswordInput, TextInput } from '@components/UI/inputs';
import { IFormSchema } from '@context/firstAccess/types';
import { useSession } from 'next-auth/react';
import { UseFormReturn } from 'react-hook-form';
import React, { useEffect } from 'react';

import * as S from '../style';

interface IPasswordStep {
  hookForm: UseFormReturn<IFormSchema>;
}
export const PasswordStep: React.FC<IPasswordStep> = ({ hookForm }) => {
  const { data: session } = useSession();
  const {
    register,
    formState: { errors },
    setValue,
  } = hookForm;

  useEffect(() => {
    setValue(
      'github_username',
      session?.user.github_username ? session?.user.github_username : null
    );
  }, [session]);

  return (
    <S.View>
      <TextInput
        label="Job "
        placeholder="ex: software developer"
        type="text"
        register={register('job')}
        error={errors.job?.message as string}
      />
      {/* <TextInput
        label="github username"
        placeholder="ex: guicoelhodev"
        type="text"
        register={register('github_username')}
        error={errors.github_username?.message as string}
      /> */}
      <PasswordInput
        label="Password*"
        register={register('password')}
        placeholder="*********"
        error={errors.password?.message as string}
      />
      <PasswordInput
        label="Confirm password*"
        register={register('confirmPassword')}
        placeholder="*********"
        error={errors.confirmPassword?.message as string}
      />
    </S.View>
  );
};
