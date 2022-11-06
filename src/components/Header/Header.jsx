import React, { useState } from 'react';

import HeaderBar from '../HeaderBar/HeaderBar';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

import headerLogoUrl from '../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOPened] = useState(false);

  return (
    <header className="header">
      <img className="header__logo" src={headerLogoUrl} alt="Логотип сайта" />
      <HeaderBar />
      <HeaderMenu isMenuOpened={isMenuOpened} setIsMenuOPened={setIsMenuOPened} />
    </header>
  );
}

export default Header;
