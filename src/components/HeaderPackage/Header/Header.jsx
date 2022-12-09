import React, { useState, useContext, useEffect } from 'react';
import LoggedInContext from '../../../contexts/LoggedInContext';
import useScreenView from '../../../hooks/useScreenView';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import CLASSNAMES from '../../../utils/scripts/classnames';
import TEXT_CONTENT from '../../../utils/scripts/text-content';
import headerLogoUrl from '../../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop } = useScreenView();

  const isMenuButtonShown = isLoggedIn && !isDesktop;

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

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return (
    <header className={mainClassName}>
      <img className={logo} src={headerLogoUrl} alt={logoAlt} />
      <HeaderNavigation сlassNameFromParent={navigationClassName} isMenuOpened={isMenuOpened} />
      {isMenuButtonShown && (
        <HeaderMenuButton
          сlassNameFromParent={menuButton}
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      )}
    </header>
  );
}

export default Header;
