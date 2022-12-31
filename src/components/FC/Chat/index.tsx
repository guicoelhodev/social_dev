import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronUp } from 'react-icons/bs';
import { BiUserVoice } from 'react-icons/bi';
import { chatTransition } from './animation';
import { Avatar } from './Avatar';
import { CurrentChat } from './CurrentChat';
import { SearchFriends } from './SearchFriends';
import { listFriendsActiveMock } from './tmpMocks';

import * as S from './style';

export const Chat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [searchFriends, setSearchFriends] = useState(false);

  return (
    <S.Container
      variants={chatTransition}
      animate={open ? 'open' : 'closed'}
      transition={{ duration: 0.2, ease: 'easeIn' }}
    >
      <S.Header open={open}>
        <p>Chat</p>

        <button onClick={() => setOpen((prev) => !prev)}>
          <BsChevronUp />
        </button>
      </S.Header>

      {open ? (
        <S.Content>
          {searchFriends ? <SearchFriends /> : <CurrentChat />}

          <S.FriendList>
            <aside>
              <button onClick={() => setSearchFriends((prev) => !prev)}>
                {searchFriends ? <BiUserVoice /> : <AiOutlineSearch />}
              </button>
            </aside>
            <ul>
              {listFriendsActiveMock.map((friend) => (
                <Avatar {...friend} key={friend.id} />
              ))}
            </ul>
          </S.FriendList>
        </S.Content>
      ) : null}
    </S.Container>
  );
};
