import { NextPageAuthenticated } from '@auth';
import { useSession } from 'next-auth/react';

import React, { useContext, useMemo } from 'react';
import * as S from './style';
import { AiFillEdit } from 'react-icons/ai';
import { Layout } from '@components/UI/Layout';
import { NetworkList } from './NetworkList';
import { RepositoryList } from './RepositoryList';
import { ModalLanguages } from '../../components/FC/ModalLanguages';
import { SimpleCarousel } from '@components/UI/carousels';
import { languages } from 'src/global/data/languages';
import { Chat } from '@components/FC/Chat';
import { UserActionsContext } from '@context/userActions';
import { handleUserLanguagesActions } from 'src/reducers/globalComponentsReducer/actions';

const Profile: NextPageAuthenticated = () => {
  const { data: session } = useSession();
  const { globalComponentsState, dispatchGlobalComponents } =
    useContext(UserActionsContext);

  const user = useMemo(() => {
    return session?.user;
    // if (typeof window !== 'undefined') {
    //   let tmpUser = localStorage.getItem('@USER_CREDENTIALS');

    //   return tmpUser ? JSON.parse(tmpUser) : null;
    // } else return null;
  }, [session]);

  const transformLanguagesArray: any = () => {
    return languages.reduce((prev, acc) => ({ ...prev, [acc.name]: acc }), {});
  };

  const handleLanguages = (langs: string[]) => console.log(langs);
  return (
    <Layout>
      <Chat />
      <S.Container>
        <S.ProfileSection>
          <header>
            <S.AvatarImage
              src={user?.image ? user.image : ''}
              width={120}
              height={120}
              alt="avatar user image"
            />

            <S.EditBtn>
              <AiFillEdit />
            </S.EditBtn>
          </header>
          <S.ProfileInfo>
            <div>
              <aside>
                <span>Name:</span>
                <p>{user?.name}</p>
              </aside>

              <aside>
                <span>Job:</span>
                <p>{user.job}</p>
              </aside>
            </div>

            <div>
              <aside>
                <span>Email:</span>
                <p>{user?.email}</p>
              </aside>
            </div>
          </S.ProfileInfo>
        </S.ProfileSection>

        <S.DescriptionSection>
          <article>
            <h3>Description</h3>
            <div>
              <p>{user?.description}</p>
            </div>
          </article>
          <article>
            <h3>Skills</h3>
            <SimpleCarousel>
              {user?.languages?.split('-').map((item: string) => {
                let currentLanguage = transformLanguagesArray()[item];
                return (
                  <li title={currentLanguage?.name}>
                    {currentLanguage && <currentLanguage.icon />}
                  </li>
                );
              })}
            </SimpleCarousel>
            <S.EditBtn
              size="sm"
              onClick={() =>
                dispatchGlobalComponents(handleUserLanguagesActions())
              }
            >
              <AiFillEdit />
            </S.EditBtn>
          </article>
        </S.DescriptionSection>

        <RepositoryList />
        <NetworkList />

        {globalComponentsState.languages && (
          <ModalLanguages handleLanguages={handleLanguages} />
        )}
      </S.Container>
    </Layout>
  );
};

export default Profile;

Profile.auth = true;
