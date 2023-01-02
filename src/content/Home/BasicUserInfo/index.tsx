import { Button } from '@components/UI/buttons/Button';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { languages } from 'src/global/data/languages';
import { IoMdAddCircleOutline } from 'react-icons/io';

import * as S from './style';
import { UserActionsContext } from '@context/userActions';
import { handleUserLanguagesActions } from 'src/reducers/globalComponentsReducer/actions';

export const BasicUserInfo: React.FC = () => {
  const { data: session } = useSession();
  const { dispatchGlobalComponents } = useContext(UserActionsContext);

  let userStorage =
    typeof window !== 'undefined'
      ? localStorage?.getItem('@USER_CREDENTIALS')
      : null;

  const transformLanguagesArray: any = () => {
    return languages.reduce((prev, acc) => ({ ...prev, [acc.name]: acc }), {});
  };

  return (
    <S.Container>
      {session && (
        <>
          <Link href="/profile">
            <S.User>
              <header>
                <article>
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="user avatar "
                      width={1280}
                      height={720}
                    />
                  ) : (
                    <span>
                      <AiOutlineUser />
                    </span>
                  )}
                </article>
                {userStorage && (
                  <section>
                    <h4>{session?.user?.name}</h4>
                    <p>{JSON.parse(userStorage).job}</p>
                  </section>
                )}
              </header>
              <S.UserConnections>
                <div>
                  <p>Conections</p>
                  <span>
                    .............................................................................................................................
                  </span>
                  <p>12</p>
                </div>
                <div>
                  <p>Saved Articles</p>
                  <span>
                    .............................................................................................................................
                  </span>
                  <p>6</p>
                </div>
              </S.UserConnections>
            </S.User>
          </Link>

          <S.LanguagesContainer>
            <strong>Languages</strong>
            {userStorage && JSON.parse(userStorage).languages?.length !== 0 ? (
              <ul>
                {JSON.parse(userStorage).languages?.map((item: string) => {
                  let currentLanguage = transformLanguagesArray()[item];
                  return (
                    <li title={currentLanguage?.name}>
                      {currentLanguage && <currentLanguage.icon />}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No language added :(</p>
            )}

            <Button
              bg="transparent"
              color="primaryColor"
              onClick={() =>
                dispatchGlobalComponents(handleUserLanguagesActions())
              }
              svgDirection="right"
              svgColor="primaryColor"
            >
              <p>Adicionar</p>
              <IoMdAddCircleOutline />
            </Button>
          </S.LanguagesContainer>
        </>
      )}
    </S.Container>
  );
};
