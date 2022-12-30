export const getHeightPhone = () => {
  if (typeof window !== 'undefined') {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
    };
    documentHeight();
    window.addEventListener('resize', documentHeight);
  }
};
