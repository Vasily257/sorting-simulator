import React, { useContext } from 'react';

import LoggedInContext from '../../contexts/LoggedInContext';

import CustomLink from '../CustomLink/CustomLink';
import ButtonLink from '../ButtonLink/ButtonLink';

import './HeaderBar.css';

function Navbar() {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    <nav className="header-bar">
      <ul className="header-bar__list">
        {isLoggedIn ? (
          <>
            <li className="header-bar__item">
              <CustomLink
                path="/"
                className="header-bar__link"
                activeClassName="header-bar__link_active"
              >
                Главная
              </CustomLink>
            </li>
            <li className="header-bar__item">
              <CustomLink
                path="/simulator"
                className="header-bar__link"
                activeClassName="header-bar__link_active"
              >
                Тренажёр
              </CustomLink>
            </li>
            <li className="header-bar__item">
              <CustomLink
                path="/memos"
                className="header-bar__link"
                activeClassName="header-bar__link_active"
              >
                Памятки
              </CustomLink>
            </li>
            <li className="header-bar__item">
              <CustomLink
                path="/catalog"
                className="header-bar__link"
                activeClassName="header-bar__link_active"
              >
                Справочник фракций
              </CustomLink>
            </li>
            <li className="header-bar__item">
              <ButtonLink path="/profile" className="header-bar__link" type="profile" text="Профиль" />
            </li>
          </>
        ) : (
          <>
            <li className="header-bar__item">
              <ButtonLink path="/signup" className="header-bar__link" type="register" text="Регистрация" />
            </li>
            <li className="header-bar__item">
              <ButtonLink path="/signin" className="header-bar__link" type="login" text="Вход" />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
