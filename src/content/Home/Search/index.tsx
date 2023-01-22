import React from 'react';
import {
  ISearch,
  ISearchType,
  useAppInteractionStore,
} from 'src/stories/appInteraction';
import { AiFillCodepenCircle } from 'react-icons/ai';

import * as S from './style';

const searchAnimation = {
  closed: {
    height: '6rem',
  },
  open: {
    height: '8rem',
  },
};

export const Search: React.FC = () => {
  const search = useAppInteractionStore((state) => state.search);
  const searchType = useAppInteractionStore((state) => state.searchType);

  const { handleSearch, handleSearchType } = useAppInteractionStore();

  const buttons = [
    {
      label: 'Feed',
      value: 'feed',
    },
    {
      label: 'Search Articles',
      value: 'search',
    },
  ];

  const searchButtons = [
    {
      label: 'Tabnews',
      value: 'tabNews',
    },
    {
      label: 'Google news',
      value: 'googleNews',
    },
  ];

  const handleSearchContent = (value: ISearch) => handleSearch(value);

  const handleSearchTypeContent = (value: ISearchType) =>
    handleSearchType(value);

  return (
    <S.Container
      variants={searchAnimation}
      initial="closed"
      animate={search === 'search' ? 'open' : 'closed'}
    >
      <article>
        {buttons.map((btn) => (
          <S.SearchBtn
            key={btn.value}
            onClick={() => handleSearchContent(btn.value as ISearch)}
            className={btn.value === search ? 'active-search' : ''}
          >
            <p>{btn.label}</p>
          </S.SearchBtn>
        ))}
      </article>

      <article>
        {search === 'search' &&
          searchButtons.map((btn) => (
            <S.NewsBtn
              key={btn.value}
              onClick={() => handleSearchTypeContent(btn.value as ISearchType)}
              className={btn.value === searchType ? 'active-search-type' : ''}
            >
              <AiFillCodepenCircle />
              <p>{btn.label}</p>
            </S.NewsBtn>
          ))}
      </article>
    </S.Container>
  );
};
