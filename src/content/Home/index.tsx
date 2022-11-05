import { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { IThemeContext, ThemeContext } from "../../context/theme";

import * as S from "./style";

const Home: NextPage = () => {
  const { themeToggler } = useContext(ThemeContext) as IThemeContext;
  return (
    <S.Container>
      <Head>
        <title>Social Dev | Advice</title>
      </Head>
      <p>Hello world</p>
      <h1>This is a simple h1</h1>
      <h2>This is a simple h2</h2>

      <button onClick={() => themeToggler()}>Switch Theme</button>
    </S.Container>
  );
};

export default Home;
