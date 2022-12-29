import React, {
  ChangeEvent,
  useId,
  RefObject,
  forwardRef,
  FC,
  useState,
} from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import * as S from './style';

interface ITextInput {
  label: string;
  value?: string;
  register?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
}

export const PasswordInput: FC<ITextInput> = (props) => {
  const [viewPassword, setViewPassword] = useState(false);
  const inputId = useId();
  return (
    <S.Container>
      <label htmlFor={inputId}>{props.label}</label>
      <input
        {...props}
        type={viewPassword ? 'text' : 'password'}
        id={props.id ? props.id : inputId}
        {...props.register}
      />
      <S.ViewPassword onClick={() => setViewPassword((prev) => !prev)}>
        {viewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
      </S.ViewPassword>

      <div>{props.error}</div>
    </S.Container>
  );
};
