import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../../hooks/useScreenView';

import CustomLink from '../CustomLink/CustomLink';
import ButtonLink from '../ButtonLink/ButtonLink';

import './HeaderNavigation.css';

function HeaderNavigation({ сlassNameFromParent, isMenuOpened }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop, isTablet, isMobile } = useScreenView();

  return (
    (isDesktop || (isMenuOpened && (isTablet || isMobile))) && (
      <nav className={`${сlassNameFromParent} header-navigation`}>
        <ul className="header-navigation__list">
          {isLoggedIn ? (
            <>
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
            </>
          ) : (
            <>
              <li className="header-navigation__item">
                <ButtonLink
                  path="/signup"
                  className="header-navigation__link"
                  type="register"
                  text="Регистрация"
                />
              </li>
              <li className="header-navigation__item">
                <ButtonLink
                  path="/signin"
                  className="header-navigation__link"
                  type="login"
                  text="Вход"
                />
              </li>
            </>
          )}
        </ul>
      </nav>
    )
  );
}

HeaderNavigation.propTypes = {
  сlassNameFromParent: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
};

export default HeaderNavigation;
