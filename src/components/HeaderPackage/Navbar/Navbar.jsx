import React from 'react';
import PropTypes from 'prop-types';
import CustomList from '../../CustomList/CustomList';
import NavbarItems from '../NavbarItems/NavbarItems';
import ProfileButton from '../ProfileButton/ProfileButton';
import CLASSNAMES from '../../../utils/scripts/classnames';

function Navbar({ сlassNameFromParent }) {
  const {
    main, list, item, link, activeLink,
  } = CLASSNAMES.HEADER_NAVIGATION;

  return (
    <nav className={`${сlassNameFromParent} ${main}`}>
      <CustomList className={list}>
        <NavbarItems itemClassName={item} linkClassName={link} activeLinkClassName={activeLink} />
        <ProfileButton itemClassName={item} linkClassName={link} />
      </CustomList>
    </nav>
  );
}

Navbar.propTypes = {
  сlassNameFromParent: PropTypes.string.isRequired,
};

export default Navbar;
