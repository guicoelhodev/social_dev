import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  align-items: center;
  gap: 0.5rem;

  button {
    background-color: transparent;
    border: 0;

    svg {
      width: 2rem;
      height: 2rem;
    }

    :focus {
      outline: 0;
    }
  }

  ul {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display: inline-flexbox;
    overflow-x: scroll;

    position: relative;

    ::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    li {
      scroll-snap-align: center;
    }
  }
`;
