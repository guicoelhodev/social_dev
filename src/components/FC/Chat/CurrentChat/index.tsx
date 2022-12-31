import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { chatExample } from '../tmpMocks';
import * as S from './style';

export const CurrentChat: React.FC = () => {
  const getEmotes = (event: any) => {
    const input = document.getElementById('input-message');
    input?.focus();
  };

  return (
    <S.Container
      exit={{ x: '100%' }}
      initial={{
        x: '-100%',
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <header>a</header>
      <S.ChatContainer>
        {chatExample.map((item, index) => (
          <S.ChatBox key={index}>
            <p>{item.message}</p>
            <span>{item.hour}</span>
          </S.ChatBox>
        ))}
      </S.ChatContainer>
      <S.SendContainer>
        <input type="text" id="input-message" placeholder="Send message" />

        <button onClick={(e) => getEmotes(e)}>
          <BsEmojiSmile />
        </button>

        <button>
          <AiOutlineSend />
        </button>
      </S.SendContainer>
    </S.Container>
  );
};
