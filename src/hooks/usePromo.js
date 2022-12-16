import useScreenView from './useScreenView';

function usePromo({ styles }) {
  const { isTablet } = useScreenView();
  const { title, titleHidden } = styles;

  function getComplexClassNames() {
    const titleClassName = `${title} ${!isTablet ? titleHidden : ''}`;
    return { titleClassName };
  }

  return {
    getComplexClassNames,
  };
}

export default usePromo;
