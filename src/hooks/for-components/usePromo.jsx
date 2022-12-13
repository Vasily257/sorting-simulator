import useScreenView from '../useScreenView';
import styles from '../../components/Promo/Promo.module.css';

function usePromo() {
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
