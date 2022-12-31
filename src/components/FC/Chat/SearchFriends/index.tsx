import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { Avatar } from '../Avatar';
import { listAllFriends } from '../tmpMocks';
import * as S from './style';

export const SearchFriends: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  let filteredFriends = useMemo(
    () => listAllFriends.filter((item) => item.name.includes(searchValue)),
    [searchValue]
  );

  return (
    <S.Container
      exit={{ x: '-100%' }}
      initial={{
        x: '100%',
        opacity: 0,
      }}
      animate={{ x: 0, opacity: [0, 1] }}
      transition={{ duration: 0.2 }}
    >
      <header>
        <input
          type="text"
          placeholder="Search friends in your network"
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <FaUserFriends />
      </header>

      <div>
        <S.List>
          {filteredFriends?.map((friend, index) => (
            <Avatar {...friend} key={index} />
          ))}
        </S.List>
      </div>
    </S.Container>
  );
};
