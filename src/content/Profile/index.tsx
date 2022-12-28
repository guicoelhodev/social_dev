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

import React from 'react';
import * as S from './style';
import { AiFillEdit } from 'react-icons/ai';
import { Layout } from '@components/UI/Layout';
import { NetworkList } from './NetworkList';
import { RepositoryList } from './RepositoryList';
import { Modal } from '@components/UI/Modal';
import { useState } from 'react';
import { ModalLanguages } from './ModalLanguages';
import { SimpleCarousel } from '@components/UI/carousels';

const mockLanguages = [
  <DiJavascript1 />,
  <DiAngularSimple />,
  <DiJava />,
  <DiReact />,
  <DiApple />,
  <DiAws />,
];

const Profile: NextPageAuthenticated = () => {
  const { data } = useSession();
  const [languagesModal, setLanguagesModal] = useState(false);

  return (
    <Layout>
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
                <p>{}</p>
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
              <p>
                Adipisicing et proident est magna adipisicing pariatur veniam.
                Ut officia culpa cupidatat do voluptate laborum nostrud commodo.
                iuah iuadh iuashdiudahs iuhd iuh diahunsectetur occaecat duis
                aliqua culpa. Non consequat aliqua fugiat enim Lorem tempor.
              </p>
            </div>
          </article>
          <article>
            <h3>Skills</h3>
            <SimpleCarousel>
              {mockLanguages.map((lang) => (
                <li>{lang}</li>
              ))}
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
    </Layout>
  );
};

export default Profile;
