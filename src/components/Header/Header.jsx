import React from 'react';

import HeaderBar from '../HeaderBar/HeaderBar';
import CustomButton from '../CustomButton/CustomButton';

import headerLogoUrl from '../../images/header-logo.svg';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogoUrl} alt="Логотип сайта" />
      <HeaderBar />
      <CustomButton className="header__menu-button" />
    </header>
  );
}

export default Header;
