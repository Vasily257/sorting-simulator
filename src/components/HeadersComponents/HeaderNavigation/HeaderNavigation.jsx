import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LoggedInContext from '../../../contexts/LoggedInContext';
import useScreenView from '../../../hooks/useScreenView';
import Navbar from '../Navbar/Navbar';
import Signbar from '../Signbar/Signbar';

import './HeaderNavigation.css';

function HeaderNavigation({ сlassNameFromParent, isMenuOpened }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop, isTablet, isMobile } = useScreenView();

  const isNavbarShown = isDesktop || (isMenuOpened && (isTablet || isMobile));

  return (
    <>
      {isLoggedIn && isNavbarShown && <Navbar сlassNameFromParent={сlassNameFromParent} />}
      {!isLoggedIn && <Signbar сlassNameFromParent={сlassNameFromParent} />}
    </>
  );
}

HeaderNavigation.propTypes = {
  сlassNameFromParent: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
};

export default HeaderNavigation;
