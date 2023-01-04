import React, { ChangeEvent, useId, FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import * as S from './style';

interface ITextInput {
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: any;
  type?: IInputType;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
}

type IInputType = 'email' | 'text';

export const TextInput: FC<ITextInput> = (props) => {
  const inputId = useId();
  return (
    <S.Container>
      <label htmlFor={inputId}>{props.label}</label>
      <input
        type={props.type}
        id={props.id ? props.id : inputId}
        {...props.register}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
      <div>{props.error}</div>
    </S.Container>
  );
};
