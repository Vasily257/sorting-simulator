import useScreenView from '../useScreenView';
import CLASSNAMES from '../../utils/scripts/classnames';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function usePromo() {
  const { isTablet } = useScreenView();
  const { visuallyHidden } = CLASSNAMES.SPECIAL;
  const {
    main, title, content, pictureWrapper, picture, subtitle, button,
  } = CLASSNAMES.PROMO;
  const {
    titleText, subtitleText, pictureAltText, buttonText,
  } = TEXT_CONTENT.PROMO;

  function getComplexClassNames() {
    const titleClassName = `${title} ${!isTablet ? visuallyHidden : ''}`;
    return { titleClassName };
  }

  function getClassNames() {
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

  function getText() {
    return {
      titleText, subtitleText, pictureAltText, buttonText,
    };
  }

  return {
    getClassNames,
    getText,
  };
}

export default usePromo;
