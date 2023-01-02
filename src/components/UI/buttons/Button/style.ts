import styled from 'styled-components';
import { PropsBtn } from '.';

export const Container = styled.button<PropsBtn>`
  height: 100%;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  background: ${({ bg, theme }) => (bg ? bg : theme.primaryColor)};
  color: ${({ color, theme }) => (color ? theme[color] : '#000')};
  box-shadow: ${({ boxShadow }) => boxShadow};

  border-radius: ${({ radius }) => (radius ? radius : '30px')};

  display: flex;
  align-items: center;
  border: 1px solid ${({ borderColor, bg }) => (borderColor ? borderColor : bg)};

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ svgColor, theme }) => (svgColor ? theme[svgColor] : '#000')};
  }

  p {
    color: inherit;
    margin-left: ${({ svgDirection }) =>
      svgDirection === 'left' ? '10px' : 0};
    margin-right: ${({ svgDirection }) =>
      svgDirection === 'right' ? '10px' : 0};
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }
`;
