import React, { useState, useContext } from 'react';

import LoggedInContext from '../../../contexts/LoggedInContext';

import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';

import headerLogoUrl from '../../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isLoggedIn } = useContext(LoggedInContext);

  const finalClassName = `header header_position_standart ${isMenuOpened ? 'header_overlay' : ''}`;
  const finalNavigationClassName = `header__navigation ${
    !isLoggedIn ? 'header__navigation_type_signbar' : ''
  } `;

  return (
    <header className={finalClassName}>
      <img className="header__logo" src={headerLogoUrl} alt="Логотип сайта" />
      <HeaderNavigation
        сlassNameFromParent={finalNavigationClassName}
        isMenuOpened={isMenuOpened}
      />
      <HeaderMenuButton
        сlassNameFromParent="header__menu-button"
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </header>
  );
}

export default Header;
