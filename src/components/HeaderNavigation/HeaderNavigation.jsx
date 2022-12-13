import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Signbar from '../Signbar/Signbar';
import styles from './HeaderNavigation.module.css';

function HeaderNavigation({ classNameFromParent, isNavbarShown, isSignBarShown }) {
  return (
    <>
      {isNavbarShown && <Navbar classNameFromParent={classNameFromParent} styles={styles} />}
      {isSignBarShown && <Signbar classNameFromParent={classNameFromParent} styles={styles} />}
    </>
  );
}

HeaderNavigation.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
  isNavbarShown: PropTypes.bool.isRequired,
  isSignBarShown: PropTypes.bool.isRequired,
};

export default HeaderNavigation;
