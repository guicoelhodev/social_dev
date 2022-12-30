import { NextPageAuthenticated } from '@auth';
import { useSession } from 'next-auth/react';
import {
  DiAngularSimple,
  DiJava,
  DiJavascript1,
  DiReact,
  DiApple,
  DiAws,
} from 'react-icons/di';

import React, { useMemo } from 'react';
import * as S from './style';
import { AiFillEdit } from 'react-icons/ai';
import { Layout } from '@components/UI/Layout';
import { NetworkList } from './NetworkList';
import { RepositoryList } from './RepositoryList';
import { Modal } from '@components/UI/Modal';
import { useState } from 'react';
import { ModalLanguages } from '../../components/FC/ModalLanguages';
import { SimpleCarousel } from '@components/UI/carousels';
import { languages } from 'src/global/data/languages';

const Profile: NextPageAuthenticated = () => {
  const { data } = useSession();
  const [languagesModal, setLanguagesModal] = useState(false);

  const user = useMemo(() => {
    if (typeof window !== 'undefined') {
      let tmpUser = localStorage.getItem('@USER_CREDENTIALS');

      return tmpUser ? JSON.parse(tmpUser) : null;
    } else return null;
  }, [window]);

  const transformLanguagesArray: any = () => {
    return languages.reduce((prev, acc) => ({ ...prev, [acc.name]: acc }), {});
  };

  return (
    <Layout>
      {typeof window !== 'undefined' && (
        <S.Container>
          <S.ProfileSection>
            <header>
              <S.AvatarImage
                src={data?.user?.image ? data.user.image : ''}
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
                  <p>{data?.user?.name}</p>
                </aside>

                <aside>
                  <span>Job:</span>
                  <p>{user.job}</p>
                </aside>
              </div>

              <div>
                <aside>
                  <span>Email:</span>
                  <p>{data?.user?.email}</p>
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
                {user?.languages.map((item: string) => {
                  let currentLanguage = transformLanguagesArray()[item];

                  return <li>{<currentLanguage.icon />}</li>;
                })}
              </SimpleCarousel>
              <S.EditBtn size="sm" onClick={() => setLanguagesModal(true)}>
                <AiFillEdit />
              </S.EditBtn>
            </article>
          </S.DescriptionSection>

          <RepositoryList />
          <NetworkList />

          {languagesModal && <ModalLanguages setState={setLanguagesModal} />}
        </S.Container>
      )}
    </Layout>
  );
};

export default Profile;

Profile.auth = true;
