import React, { useContext } from 'react';

import LoggedInContext from '../../contexts/LoggedInContext';

import Navbar from '../Navbar/Navbar';
import Signbar from '../Signbar/Signbar';

import './Header.css';

function Header() {
  const { isLoggedIn } = useContext(LoggedInContext);

  return <header className="header">{isLoggedIn ? <Navbar /> : <Signbar />}</header>;
}

export default Header;
