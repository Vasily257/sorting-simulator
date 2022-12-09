import { useContext, useEffect } from 'react';
import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../useScreenView';
import CLASSNAMES from '../../utils/scripts/classnames';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function useHeader({ isMenuOpened, setIsMenuOpened }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop, isTablet, isMobile } = useScreenView();

  const {
    main,
    mainPositionStandart,
    mainOverlay,
    navigation,
    navigationTypeSignbar,
    logo,
    menuButton,
  } = CLASSNAMES.HEADER;

  function getComplexClassNames() {
    const mainClassName = `${main} ${mainPositionStandart} ${isMenuOpened ? mainOverlay : ''}`;
    const navigationClassName = `${navigation} ${!isLoggedIn ? navigationTypeSignbar : ''} `;

    return { mainClassName, navigationClassName };
  }

  function getClassNames() {
    const { mainClassName, navigationClassName } = getComplexClassNames();

    return {
      logo,
      menuButton,
      mainClassName,
      navigationClassName,
    };
  }

  function getComponentStatuses() {
    const isMenuButtonShown = isLoggedIn && !isDesktop;
    const isNavbarShown = isLoggedIn && (isDesktop || (isMenuOpened && (isTablet || isMobile)));
    const isSignBarShown = !isLoggedIn;
    return { isMenuButtonShown, isNavbarShown, isSignBarShown };
  }

  function getLogoAltText() {
    const { logoAltText } = TEXT_CONTENT.HEADER;
    return { logoAltText };
  }

  useEffect(() => {
    if (isDesktop && setIsMenuOpened !== undefined) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return {
    getClassNames,
    getComponentStatuses,
    getLogoAltText,
  };
}

export default useHeader;
