import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './Signbar.css';

function Signbar() {
  return (
    <nav className="signbar">
      <ul className="signbar__list">
        <li className="signbar__item">
          <CustomLink
            path="/signup"
            className="signbar__link"
            activeClassName="signbar__link_active"
          >
            Регистрация
          </CustomLink>
        </li>
        <li className="signbar__item">
          <CustomLink
            path="/signin"
            className="signbar__link"
            activeClassName="signbar__link_active"
          >
            Вход
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}

export default Signbar;
