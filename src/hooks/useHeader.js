import { useContext } from 'react';
import LoggedInContext from '../contexts/LoggedInContext';
import useScreenView from './useScreenView';

function useHeader({ styles }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop, isTablet, isMobile } = useScreenView();

  const {
    basePositionStandart, baseOverlay, navigation, navigationTypeSignbar,
  } = styles;

  function getComponentStatuses(isMenuOpened) {
    const isMenuButtonShown = isLoggedIn && !isDesktop;
    const isNavbarShown = isLoggedIn && (isDesktop || (isMenuOpened && (isTablet || isMobile)));
    const isSignBarShown = !isLoggedIn;

    return { isMenuButtonShown, isNavbarShown, isSignBarShown };
  }

  function getComplexClassNames(isMenuOpened) {
    const headerClassName = isMenuOpened ? baseOverlay : basePositionStandart;
    const navigationClassName = !isLoggedIn ? navigationTypeSignbar : navigation;

    return { headerClassName, navigationClassName };
  }

  return {
    getComplexClassNames,
    getComponentStatuses,
  };
}

export default useHeader;
