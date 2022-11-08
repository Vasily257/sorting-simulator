import React, { useState } from 'react';

import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';

import headerLogoUrl from '../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOPened] = useState(false);

  return (
    <header className={`header ${isMenuOpened ? 'header_overlay' : ''}`}>
      <img className="header__logo" src={headerLogoUrl} alt="Логотип сайта" />
      <HeaderNavigation сlassNameFromParent="header__navigation" isMenuOpened={isMenuOpened} />
      <HeaderMenuButton isMenuOpened={isMenuOpened} setIsMenuOPened={setIsMenuOPened} />
    </header>
  );
}

export default Header;
