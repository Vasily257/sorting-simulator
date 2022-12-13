import { useContext, useEffect } from 'react';
import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../useScreenView';

function useHeader({ setIsMenuOpened, styles }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop, isTablet, isMobile } = useScreenView();

  const {
    main, mainPositionStandart, mainOverlay, navigation, navigationTypeSignbar,
  } = styles;

  function getComponentStatuses(isMenuOpened) {
    const isMenuButtonShown = isLoggedIn && !isDesktop;
    const isNavbarShown = isLoggedIn && (isDesktop || (isMenuOpened && (isTablet || isMobile)));
    const isSignBarShown = !isLoggedIn;

    return { isMenuButtonShown, isNavbarShown, isSignBarShown };
  }

  function getComplexClassNames(isMenuOpened) {
    const mainHeaderClassName = `${main} ${mainPositionStandart} `;
    const headerClassName = `${mainHeaderClassName} ${isMenuOpened ? mainOverlay : ''}`;
    const navigationClassName = `${navigation} ${!isLoggedIn ? navigationTypeSignbar : ''} `;

    return { headerClassName, navigationClassName };
  }

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return {
    getComplexClassNames,
    getComponentStatuses,
  };
}

export default useHeader;
