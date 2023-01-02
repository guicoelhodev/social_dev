import { Button } from '@components/UI/buttons/Button';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineShareAlt, AiOutlineUser } from 'react-icons/ai';
import { IoAddOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import loveReaction from '@lottie/love_reactions.json';

import * as S from './style';

const postDataJSON = {
  isShared: true,
  user: {
    name: 'João Ribeiro Monteiro ',
    id: 3427678643,
    job: 'Co-founder and CEO of Tesla',
    title: 'Sharing in my network',
    content: 'Lorem ipsum dolor si a met',
  },
  author: {
    name: 'Guilherme Santos Coelho',
    id: 723468744,
    title: 'React is amazing',
    content:
      'Quis aliqua mollit occaecat dolore adipisicing consequat ullamco eu. Officia laborum sunt esse nulla aliquip deserunt non labore tempor aliqua aliqua ea amet. Enim cupidatat dolore sunt anim nulla magna occaecat dolor consectetur adipisicing incididunt proident nostrud. Ullamco sit ipsum ullamco mollit adipisicing esse aliquip aliquip. Velit sit ullamco minim eu Lorem dolore ullamco est do sint. Officia qui consectetur magna ea consequat eu.',
  },
};

interface IUserArticle {
  shared: boolean;
}
export const InternalUserArticle: React.FC<IUserArticle> = ({ shared }) => {
  const { data: sessionData } = useSession();

  const [postActions, setPostActions] = useState({
    love: false,
    createdBy: null,
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loveReaction,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.Container>
      <S.UserInfo>
        {sessionData?.user?.image ? (
          <Image
            src={sessionData?.user?.image!}
            alt="Avatar user"
            width={50}
            height={50}
          />
        ) : (
          <span>
            <AiOutlineUser />
          </span>
        )}
        <article>
          <p>{postDataJSON.user.name}</p>
          <p>{postDataJSON.user.job}</p>
        </article>
      </S.UserInfo>

      {shared ? (
        <S.SharedContent>
          <S.Title>{postDataJSON.user.title}</S.Title>
          <S.Description>{postDataJSON.user.content}</S.Description>
        </S.SharedContent>
      ) : null}
      <S.FollowUserContainer loveAction={postActions.love}>
        <article>
          <Button onClick={() => {}} svgDirection="right">
            <p>Follow</p>
            <IoAddOutline />
          </Button>
        </article>
        <button>
          <AiOutlineShareAlt />
        </button>
        <button
          onClick={() =>
            setPostActions((prev) => ({ ...prev, love: !prev.love }))
          }
        >
          <S.LoveContainer>
            {postActions.love ? (
              <Lottie
                options={defaultOptions}
                width={90}
                height={90}
                style={{ top: '-32px', left: '-30px' }}
              />
            ) : (
              <AiFillHeart />
            )}
          </S.LoveContainer>
        </button>
      </S.FollowUserContainer>

      <S.PostContent shared={shared}>
        {shared && (
          <p>
            This post was created by <strong>guicoelhodev</strong>
          </p>
        )}
        <S.Title>{postDataJSON.author.title}</S.Title>
        <S.Description>{postDataJSON.author.content}</S.Description>
      </S.PostContent>
    </S.Container>
  );
};
