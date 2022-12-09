import React from 'react';
import PropTypes from 'prop-types';
import useHeader from '../../../hooks/for-components/useHeader';
import Navbar from '../Navbar/Navbar';
import Signbar from '../Signbar/Signbar';

import './HeaderNavigation.css';

function HeaderNavigation({ classNameFromParent, isMenuOpened }) {
  const { isNavbarShown, isLoggedIn } = useHeader({ isMenuOpened });

  return (
    <>
      {isLoggedIn && isNavbarShown && <Navbar classNameFromParent={classNameFromParent} />}
      {!isLoggedIn && <Signbar classNameFromParent={classNameFromParent} />}
    </>
  );
}

HeaderNavigation.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
};

export default HeaderNavigation;
