import React from 'react';
import PropTypes from 'prop-types';
import useHeaderNavigation from '../../hooks/for-components/useHeaderNavigation';
import CustomList from '../CustomList/CustomList';
import NavbarItems from '../NavbarItems/NavbarItems';
import ProfileButton from '../ProfileButton/ProfileButton';

function Navbar({ classNameFromParent }) {
  const { getClassNames } = useHeaderNavigation();
  const { main, list } = getClassNames();

  return (
    <nav className={`${classNameFromParent} ${main}`}>
      <CustomList className={list}>
        <NavbarItems />
        <ProfileButton />
      </CustomList>
    </nav>
  );
}

Navbar.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
};

export default Navbar;
