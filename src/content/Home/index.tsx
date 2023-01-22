import { NextPageAuthenticated } from '@auth';
import { Chat } from '@components/FC/Chat';
import { ModalLanguages } from '@components/FC/ModalLanguages';
import { Layout } from '@components/UI/Layout';
import { UserActionsContext } from '@context/userActions';
import React, { useContext } from 'react';
import { BasicUserInfo } from './BasicUserInfo';
import { InternalUserArticle } from '../../components/FC/InternalUserArticle';
import { Search } from './Search';
import * as S from './style';
import { useAppInteractionStore } from 'src/stories/appInteraction';
import { useTabListPosts } from '@services/http/tabNews/GET/listPosts';
import { TabNewsPost } from '@components/FC/TabNewsPost';

const arr = [false, true, false, false, true, true, true, true];

const Home: NextPageAuthenticated = () => {
  const { globalComponentsState } = useContext(UserActionsContext);

  const search = useAppInteractionStore((state) => state.search);
  const searchType = useAppInteractionStore((state) => state.searchType);

  const { data: tabnewsList } = useTabListPosts({});

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
          <Search />
          {search === 'feed' && (
            <S.ListArticles>
              {arr.map((item) => (
                <InternalUserArticle shared={item} />
              ))}
            </S.ListArticles>
          )}

          {search === 'search' && searchType === 'tabNews' && (
            <S.ListArticles>
              {tabnewsList?.map((post) => (
                <TabNewsPost slug={post.slug} user={post.owner_username} />
              ))}
            </S.ListArticles>
          )}
        </S.PageContent>
      </S.Container>
    </Layout>
  );
};

export default Home;

Home.auth = true;
