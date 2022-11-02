import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

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
          <CustomLink path="/" className="navbar__link" activeClassName="navbar__link_active">
            Тренажёр
          </CustomLink>
        </li>
        <li className="navbar__item">
          <CustomLink path="/" className="navbar__link" activeClassName="navbar__link_active">
            Памятки
          </CustomLink>
        </li>
        <li className="navbar__item">
          <CustomLink path="/" className="navbar__link" activeClassName="navbar__link_active">
            Справочник фракций
          </CustomLink>
        </li>
        <li className="navbar__item">
          <CustomLink path="/" className="navbar__link" activeClassName="navbar__link_active">
            Профиль
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
