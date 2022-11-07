import React, { ChangeEvent, useId, RefObject, forwardRef, FC } from 'react';
import * as S from './style';

interface ITextInput {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: IInputType;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
}

type IInputType = 'email' | 'password' | 'text';

export const TextInput: FC<ITextInput> = (props) => {
  const inputId = useId();
  return (
    <S.Container>
      <label htmlFor={inputId}>{props.label}</label>
      <input {...props} type="text" id={props.id ? props.id : inputId} />
      <div>{props.error}</div>
    </S.Container>
  );
};
