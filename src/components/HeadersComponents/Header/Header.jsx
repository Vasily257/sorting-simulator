import React, { useState, useContext } from 'react';
import LoggedInContext from '../../../contexts/LoggedInContext';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import CLASSNAMES from '../../../utils/scripts/classnames';
import TEXT_CONTENT from '../../../utils/scripts/text-content';
import headerLogoUrl from '../../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isLoggedIn } = useContext(LoggedInContext);

  const { logoAlt } = TEXT_CONTENT.HEADER;
  const {
    main,
    mainPositionStandart,
    mainOverlay,
    navigation,
    navigationTypeSignbar,
    logo,
    menuButton,
  } = CLASSNAMES.HEADER;

  const mainClassName = `${main} ${mainPositionStandart} ${isMenuOpened ? mainOverlay : ''}`;
  const navigationClassName = `${navigation} ${!isLoggedIn ? navigationTypeSignbar : ''} `;

  return (
    <header className={mainClassName}>
      <img className={logo} src={headerLogoUrl} alt={logoAlt} />
      <HeaderNavigation сlassNameFromParent={navigationClassName} isMenuOpened={isMenuOpened} />
      <HeaderMenuButton
        сlassNameFromParent={menuButton}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </header>
  );
}

export default Header;
