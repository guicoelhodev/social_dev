import { GithubButton } from '@components/UI/buttons/GithubButton';
import { SimpleCarousel } from '@components/UI/carousels';
import { useGetRepositories } from 'src/global/services/http/github/GET/repositories';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiFillBook } from 'react-icons/ai';
import { TiArrowForward } from 'react-icons/ti';
import * as S from './style';
import { useSession } from 'next-auth/react';

let user = {
  github_account: 'gs.coelho@outlook.com',
};

export const RepositoryList: React.FC = () => {
  const { data: session } = useSession();
  const { data } = useGetRepositories(session?.user.github_username);
  // let user = localStorage.getItem('@USER_CREDENTIALS');

  return (
    <S.Container>
      <header>
        <h3>Repositories</h3>
        <span>{data?.length}</span>
      </header>
      {user && session?.user.languages ? (
        <SimpleCarousel>
          {data?.map((item) => (
            <S.Repository key={item.id}>
              <header>
                <AiFillBook />
                <h4>{item.name}</h4>

                <span>{item.visibility}</span>
                <Link
                  href={item.html_url}
                  title={`navigate to ${item.name}`}
                  target="_blank"
                >
                  <TiArrowForward />
                </Link>
              </header>
              <section>
                <p>{item.description ? item.description : 'No description'}</p>
              </section>
            </S.Repository>
          ))}
        </SimpleCarousel>
      ) : (
        <aside>
          <p>Nenhuma conta github conectada :(</p>
          <GithubButton onClick={() => alert('Logar conta github')} />
        </aside>
      )}
    </S.Container>
  );
};
