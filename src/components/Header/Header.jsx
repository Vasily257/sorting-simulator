import React, { useState, useContext } from 'react';

import LoggedInContext from '../../contexts/LoggedInContext';

import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';

import headerLogoUrl from '../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isLoggedIn } = useContext(LoggedInContext);

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
