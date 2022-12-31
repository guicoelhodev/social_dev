import { Chat } from '@components/FC/Chat';
import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Playground: NextPage = () => {
  return (
    <Container>
      <Chat />
    </Container>
  );
};

export default Playground;
