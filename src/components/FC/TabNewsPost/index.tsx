import React, { useState } from 'react';
import { useTabNewsPost } from '@services/http/tabNews/GET/infoPost';
import ReactMarkdown from 'react-markdown';

import * as S from './style';

interface ITabNewsPost {
  user: string;
  slug: string;
}

const animationArticle = {
  closed: {
    height: '12rem',
  },
  open: {
    height: 'auto',
  },
};

export const TabNewsPost: React.FC<ITabNewsPost> = (params) => {
  const [showMore, setShowMore] = useState(false);
  const { data: user } = useTabNewsPost(params);

  return (
    <S.Container>
      <S.Header>
        <h3>{user?.title}</h3>
        <p>{user?.owner_username}</p>
      </S.Header>

      {user?.body && (
        <S.ContentOfBody
          variants={animationArticle}
          initial="closed"
          animate={showMore ? 'open' : 'closed'}
        >
          <ReactMarkdown>{user.body}</ReactMarkdown>
        </S.ContentOfBody>
      )}

      <footer>
        <button onClick={() => setShowMore((prev) => !prev)}>
          <p>{showMore ? 'Hidden content' : 'Show more'}</p>
        </button>
      </footer>
    </S.Container>
  );
};
