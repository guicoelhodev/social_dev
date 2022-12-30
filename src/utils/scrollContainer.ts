import { RefObject } from 'react';

export const scrollContainer = (
  divRef: RefObject<HTMLDivElement>,
  direction: 'left' | 'right'
) => {
  const currentDiv = divRef.current;

  const offSetWidth = currentDiv!.offsetWidth * 0.8;

  if (direction === 'left') {
    currentDiv!.scrollLeft = currentDiv!.scrollLeft - offSetWidth;
  } else {
    currentDiv!.scrollLeft = currentDiv!.scrollLeft + offSetWidth;
  }
};
