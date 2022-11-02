import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import ProfileLink from '../ProfileLink/ProfileLink';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <CustomLink path="/" className="navbar__link" activeClassName="navbar__link_active">
            Главная
          </CustomLink>
        </li>
        <li className="navbar__item">
          <CustomLink
            path="/simulator"
            className="navbar__link"
            activeClassName="navbar__link_active"
          >
            Тренажёр
          </CustomLink>
        </li>
        <li className="navbar__item">
          <CustomLink path="/memos" className="navbar__link" activeClassName="navbar__link_active">
            Памятки
          </CustomLink>
        </li>
        <li className="navbar__item">
          <CustomLink
            path="/catalog"
            className="navbar__link"
            activeClassName="navbar__link_active"
          >
            Справочник фракций
          </CustomLink>
        </li>
        <li className="navbar__item">
          <ProfileLink path="/profile" commonClassName="navbar__link" text="Профиль" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
