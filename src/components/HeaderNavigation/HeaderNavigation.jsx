import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../../hooks/useScreenView';

import CustomList from '../CustomList/CustomList';
import CustomLink from '../CustomLink/CustomLink';
import ButtonLink from '../ButtonLink/ButtonLink';

import './HeaderNavigation.css';

function HeaderNavigation({ сlassNameFromParent, isMenuOpened }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop, isTablet, isMobile } = useScreenView();

  const isNavbarShown = isDesktop || (isMenuOpened && (isTablet || isMobile));

  return (
    <>
      {isLoggedIn && isNavbarShown && (
        <nav className={`${сlassNameFromParent} header-navigation`}>
          <CustomList className="header-navigation__list">
            <li className="header-navigation__item">
              <CustomLink
                path="/"
                className="header-navigation__link"
                activeClassName="header-navigation__link_active"
              >
                Главная
              </CustomLink>
            </li>
            <li className="header-navigation__item">
              <CustomLink
                path="/simulator"
                className="header-navigation__link"
                activeClassName="header-navigation__link_active"
              >
                Тренажёр
              </CustomLink>
            </li>
            <li className="header-navigation__item">
              <CustomLink
                path="/memos"
                className="header-navigation__link"
                activeClassName="header-navigation__link_active"
              >
                Памятки
              </CustomLink>
            </li>
            <li className="header-navigation__item">
              <CustomLink
                path="/catalog"
                className="header-navigation__link"
                activeClassName="header-navigation__link_active"
              >
                Справочник
              </CustomLink>
            </li>
            <li className="header-navigation__item">
              <ButtonLink
                path="/profile"
                className="header-navigation__link"
                type="profile"
                text="Профиль"
              />
            </li>
          </CustomList>
        </nav>
      )}
      {!isLoggedIn && (
        <nav className={`${сlassNameFromParent} header-navigation header-navigation_type_signbar`}>
          <CustomList className="header-navigation__list header-navigation__list_type_signbar">
            <li className="header-navigation__item header-navigation__item_type_signbar">
              <ButtonLink
                path="/signup"
                className="header-navigation__link header-navigation__link_type_signbar"
                type="register"
                text="Регистрация"
              />
            </li>
            <li className="header-navigation__item header-navigation__item_type_signbar">
              <ButtonLink
                path="/signin"
                className="header-navigation__link header-navigation__link_type_signbar"
                type="login"
                text="Вход"
              />
            </li>
          </CustomList>
        </nav>
      )}
    </>
  );
}

HeaderNavigation.propTypes = {
  сlassNameFromParent: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
};

export default HeaderNavigation;
