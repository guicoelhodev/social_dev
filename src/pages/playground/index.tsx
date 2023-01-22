import { Search } from '@pages/Home/Search';
import { NextPage } from 'next';

import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;

  padding: 1rem;
`;

const Playground: NextPage = () => {
  return (
    <Container>
      <Search />
    </Container>
  );
};

export default Playground;
