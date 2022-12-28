import React, { ReactNode, useContext } from 'react';

import SocialLogo from '@assets/svg/social_logo_sm.svg';

import * as S from './style';
import Image from 'next/image';

import {
  BsFillChatDotsFill,
  BsFillMoonFill,
  BsFillSunFill,
} from 'react-icons/bs';
import { ThemeContext } from '@context/theme';
import {
  AiFillHome,
  AiOutlinePlus,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { useRouter } from 'next/router';

interface ILayout {
  children: ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  const { theme, themeToggler } = useContext(ThemeContext);

  const router = useRouter();
  const navList = [
    {
      title: 'Home',
      icon: <AiFillHome />,
      onClick: () => router.push('/home'),
    },
    {
      title: 'Add post',
      icon: <AiOutlinePlus />,
      onClick: () => alert('clicked'),
    },
    {
      title: 'Add friends',
      icon: <AiOutlineUsergroupAdd />,
      onClick: () => alert('clicked '),
    },
    {
      title: 'Chat',
      icon: <BsFillChatDotsFill />,
      onClick: () => alert('clicked '),
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.ButtonMode onClick={() => themeToggler()}>
          {theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
        </S.ButtonMode>
        <aside>
          <Image src={SocialLogo} alt="aaa" />
        </aside>
      </S.Header>
      <S.PageContainer>{children}</S.PageContainer>
      <S.NavigatePages>
        {navList.map((item) => (
          <S.ButtonNav onClick={item.onClick} title={item.title}>
            {item.icon}
          </S.ButtonNav>
        ))}
      </S.NavigatePages>
      {/* <S.Footer>
        <p>Visit our github page</p>
        <p>V 1.0.0</p>
      </S.Footer> */}
    </S.Container>
  );
};
