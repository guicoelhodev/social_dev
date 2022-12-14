import { useSession } from 'next-auth/react';
import { useEffect, ReactNode } from 'react';
import * as S from './style';

interface IAuth {
  children: ReactNode;
}

export const AuthComponent: React.FC<IAuth> = ({ children }: IAuth) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status, data } = useSession({ required: true });

  if (status === 'loading') return <S.Loading>Redirect...</S.Loading>;

  return <>{children}</>;
};
