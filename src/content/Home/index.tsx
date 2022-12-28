import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import { IThemeContext, ThemeContext } from '../../context/theme';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Figma from '../../assets/svg/figma_logo.png';

import * as S from './style';
import { NextPageAuthenticated } from '@auth';
import Link from 'next/link';
import { Layout } from '@components/UI/Layout';

const Home: NextPageAuthenticated = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <Layout>
      <S.Container>
        <Head>
          <title>Social Dev | Advice</title>
        </Head>

        <S.AdviceContainer>
          <h1>Calm down</h1>

          <S.ToggleTheme>
            <button onClick={() => themeToggler()}>
              {theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
          </S.ToggleTheme>
          <h2>
            We are working hard to create a first version of social dev app
          </h2>

          <S.Section>
            <p>But..</p>
            <span> You can see our figma UI design, to kill the curiosity</span>

            <article>
              <S.FigmaButton>
                <a
                  href="https://www.figma.com/file/aM023hg9G2bOPsLHfGUSaW/Social-dev?node-id=1%3A672"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image height={25} src={Figma} alt="figma logo content" />
                  <p>Check figma project</p>
                </a>
              </S.FigmaButton>
            </article>
          </S.Section>
          <Image
            alt="confused anime girl gif"
            className="confused-girl"
            width={200}
            height={200}
            src={'https://media.tenor.com/zVtSqLENqIIAAAAj/jinx-flipzflops.gif'}
          />

          <Link href="/profile">Perfil pessoal</Link>
        </S.AdviceContainer>
      </S.Container>
    </Layout>
  );
};

export default Home;

Home.auth = true;
