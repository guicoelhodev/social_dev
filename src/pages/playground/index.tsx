import { BearData } from '@components/FC/testComponents/BearData';
import { BearFn } from '@components/FC/testComponents/BearFn';
import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  /* place-items: center; */
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

const Playground: NextPage = () => {
  return (
    <Container>
      <BearData />
      <BearFn />
    </Container>
  );
};

export default Playground;
