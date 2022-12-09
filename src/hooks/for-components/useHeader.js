import { useContext, useEffect } from 'react';
import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../useScreenView';
import CLASSNAMES from '../../utils/scripts/classnames';

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

  function getHeaderClassnames() {
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

  useEffect(() => {
    if (isDesktop && setIsMenuOpened !== undefined) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return {
    isMenuOpened,
    setIsMenuOpened,
    getComponentStatuses,
    getHeaderClassnames,
  };
}

export default useHeader;
