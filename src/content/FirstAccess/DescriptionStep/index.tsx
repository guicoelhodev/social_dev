import React from 'react';
import { IFormSchema } from '@context/firstAccess/types';
import { UseFormProps, UseFormReturn } from 'react-hook-form';
import * as S from '../style';

interface IDescriptionStep {
  hookForm: UseFormReturn<IFormSchema>;
}
export const DescriptionStep: React.FC<IDescriptionStep> = ({ hookForm }) => {
  const { watch, register } = hookForm;

  const description = watch('description');
  return (
    <S.View>
      <h4>Tell us about you</h4>

      <S.DescriptionContainer>
        <p>{description?.length}/200</p>
        <textarea {...register('description')} maxLength={200} />
      </S.DescriptionContainer>
    </S.View>
  );
};
