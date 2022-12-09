import React from 'react';
import PropTypes from 'prop-types';
import CustomList from '../../CustomList/CustomList';
import NavbarItems from '../NavbarItems/NavbarItems';
import ProfileButton from '../ProfileButton/ProfileButton';
import CLASSNAMES from '../../../utils/scripts/classnames';

function Navbar({ classNameFromParent }) {
  const {
    main, list, item, link, activeLink,
  } = CLASSNAMES.HEADER_NAVIGATION;

  return (
    <nav className={`${classNameFromParent} ${main}`}>
      <CustomList className={list}>
        <NavbarItems itemClassName={item} linkClassName={link} activeLinkClassName={activeLink} />
        <ProfileButton itemClassName={item} linkClassName={link} />
      </CustomList>
    </nav>
  );
}

Navbar.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
};

export default Navbar;
