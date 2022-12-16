import React from 'react';
import PropTypes from 'prop-types';
import CustomList from '../CustomList/CustomList';
import NavbarItems from '../NavbarItems/NavbarItems';
import ProfileButton from '../ProfileButton/ProfileButton';

function Navbar({ classNameFromParent, styles }) {
  const { main, list } = styles;

  return (
    <nav className={`${classNameFromParent} ${main}`}>
      <CustomList className={list}>
        <NavbarItems styles={styles} />
        <ProfileButton styles={styles} />
      </CustomList>
    </nav>
  );
}

Navbar.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Navbar;
