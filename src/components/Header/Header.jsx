import React, { useContext } from 'react';

import LoggedInContext from '../../contexts/LoggedInContext';

import Navbar from '../Navbar/Navbar';
import Signbar from '../Signbar/Signbar';
import CustomButton from '../CustomButton/CustomButton';

import headerLogoUrl from '../../images/header-logo.svg';

import './Header.css';

function Header() {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    <header className="header">
      <img className="header__logo" src={headerLogoUrl} alt="Логотип сайта" />
      <CustomButton className="header__menu-button" />
      {isLoggedIn ? <Navbar /> : <Signbar />}
    </header>
  );
}

export default Header;
