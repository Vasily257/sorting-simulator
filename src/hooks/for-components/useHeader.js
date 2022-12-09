import { useContext, useEffect } from 'react';
import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../useScreenView';

function useHeader({ isMenuOpened, setIsMenuOpened }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop, isTablet, isMobile } = useScreenView();

  const isMenuButtonShown = isLoggedIn && !isDesktop;
  const isNavbarShown = isDesktop || (isMenuOpened && (isTablet || isMobile));

  useEffect(() => {
    if (isDesktop && setIsMenuOpened !== undefined) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return {
    isMenuOpened,
    setIsMenuOpened,
    isMenuButtonShown,
    isNavbarShown,
    isLoggedIn,
  };
}

export default useHeader;
