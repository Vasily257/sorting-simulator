import useScreenView from '../useScreenView';
import CLASSNAMES from '../../utils/scripts/classnames';

function usePromo() {
  const { isTablet } = useScreenView();
  const { visuallyHidden } = CLASSNAMES.SPECIAL;
  const {
    main, title, content, pictureWrapper, picture, subtitle, button,
  } = CLASSNAMES.PROMO;

  function getComplexClassNames() {
    const titleClassName = `${title} ${!isTablet ? visuallyHidden : ''}`;

    return { titleClassName };
  }

  function getPromoClassnames() {
    const { titleClassName } = getComplexClassNames();

    return {
      main,
      titleClassName,
      content,
      pictureWrapper,
      picture,
      subtitle,
      button,
    };
  }

  return {
    getPromoClassnames,
  };
}

export default usePromo;
