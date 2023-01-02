import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronUp } from 'react-icons/bs';
import { BiUserVoice } from 'react-icons/bi';
import { chatTransition } from './animation';
import { Avatar } from './Avatar';
import { CurrentChat } from './CurrentChat';
import { SearchFriends } from './SearchFriends';
import { listFriendsActiveMock } from './tmpMocks';

import { UserActionsContext } from '@context/userActions';
import { handleChatState } from 'src/reducers/globalComponentsReducer/actions';

import * as S from './style';

export const Chat: React.FC = () => {
  const { globalComponentsState, dispatchGlobalComponents } =
    useContext(UserActionsContext);
  const [searchFriends, setSearchFriends] = useState(false);

  return (
    <S.Container
      variants={chatTransition}
      animate={globalComponentsState?.chat ? 'open' : 'closed'}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      open={globalComponentsState.chat}
    >
      <S.Header open={globalComponentsState.chat}>
        <p>Chat</p>

        <button onClick={() => dispatchGlobalComponents(handleChatState())}>
          <BsChevronUp />
        </button>
      </S.Header>

      {globalComponentsState.chat ? (
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
