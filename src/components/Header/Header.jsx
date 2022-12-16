<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import useScreenView from '../../hooks/useScreenView';
import useHeader from '../../hooks/useHeader';
=======
import React, { useState, useContext } from 'react';

import LoggedInContext from '../../contexts/LoggedInContext';

>>>>>>> 374447910fbb3593ba986326a9a99bb1393ad46c
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';

import headerLogoUrl from '../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
<<<<<<< HEAD
  const { isDesktop } = useScreenView();

  const { getComponentStatuses, getComplexClassNames } = useHeader({ styles });
  const { isMenuButtonShown, isNavbarShown, isSignBarShown } = getComponentStatuses(isMenuOpened);
  const { headerClassName, navigationClassName } = getComplexClassNames(isMenuOpened);

  const { logo } = styles;
  const { logoAltText } = TEXT_CONTENT.HEADER;
=======
  const { isLoggedIn } = useContext(LoggedInContext);
>>>>>>> 374447910fbb3593ba986326a9a99bb1393ad46c

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return (
    <header className={`header ${isMenuOpened ? 'header_overlay' : ''}`}>
      <img className="header__logo" src={headerLogoUrl} alt="Логотип сайта" />
      <HeaderNavigation
        сlassNameFromParent={`header__navigation ${
          !isLoggedIn ? 'header__navigation_type_signbar' : ''
        } `}
        isMenuOpened={isMenuOpened}
      />
      <HeaderMenuButton
        сlassNameFromParent={`header__menu-button ${
          isMenuOpened ? 'header__menu-button_opened' : ''
        }`}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </header>
  );
}

export default Header;
