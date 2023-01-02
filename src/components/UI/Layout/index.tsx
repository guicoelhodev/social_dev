import React, { ReactNode, useContext, useState } from 'react';

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
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { UserActionsContext } from '@context/userActions';
import { handleChatStateActions } from 'src/reducers/globalComponentsReducer/actions';

interface ILayout {
  children: ReactNode;
  fill?: boolean;
}

export const Layout: React.FC<ILayout> = ({ children, fill }) => {
  const { theme, themeToggler } = useContext(ThemeContext);
  const { globalComponentsState, dispatchGlobalComponents } =
    useContext(UserActionsContext);

  const router = useRouter();

  const getInitialProfile = () => {
    if (router.pathname === '/') return 'Home';
    return 'Profile';
  };
  const [activeTab, setActiveTab] = useState(getInitialProfile());
  const navList = [
    {
      title: 'Home',
      icon: <AiFillHome />,
      onClick: () => router.push('/'),
    },
    {
      title: 'Profile',
      icon: <AiOutlineUser />,
      onClick: () => router.push('/profile'),
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
      onClick: () => dispatchGlobalComponents(handleChatStateActions()),
    },
  ];

  const getActiveClassName = (title: string) => {
    if (title === 'Chat') return globalComponentsState.chat ? 'active' : '';
    return title === activeTab ? 'active' : '';
  };

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
      <S.PageContainer fill={fill}>{children}</S.PageContainer>
      <S.NavigatePages>
        {navList.map((item) => (
          <S.ButtonNav
            onClick={() => {
              setActiveTab(item.title);
              item.onClick();
            }}
            title={item.title}
            className={getActiveClassName(item.title)}
          >
            {item.icon}

            <span>{item.title}</span>
          </S.ButtonNav>
        ))}
      </S.NavigatePages>
    </S.Container>
  );
};
