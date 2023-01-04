import { NextPageAuthenticated } from '@auth';
import { Chat } from '@components/FC/Chat';
import { ModalLanguages } from '@components/FC/ModalLanguages';
import { Layout } from '@components/UI/Layout';
import { UserActionsContext } from '@context/userActions';
import React, { Suspense, useContext } from 'react';
import { BasicUserInfo } from './BasicUserInfo';
import { InternalUserArticle } from './InternalUserArticle';
import * as S from './style';

const arr = [false, true, false, false, true, true, true, true];

const Home: NextPageAuthenticated = () => {
  const { globalComponentsState } = useContext(UserActionsContext);

  const handleLanguages = (langs: string[]) => console.log(langs);
  return (
    <Layout fill={true}>
      <Chat />

      {globalComponentsState.languages && (
        <ModalLanguages handleLanguages={handleLanguages} />
      )}
      <S.Container>
        <div>
          <BasicUserInfo />
        </div>
        <S.PageContent>
          <S.ListInternalArticles>
            {arr.map((item) => (
              <InternalUserArticle shared={item} />
            ))}
          </S.ListInternalArticles>
        </S.PageContent>
      </S.Container>
    </Layout>
  );
};

export default Home;

Home.auth = true;
