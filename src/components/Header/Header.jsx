import React, { useState } from 'react';
import useHeader from '../../hooks/for-components/useHeader';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import headerLogoUrl from '../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const { getComponentStatuses, getClassNames, getLogoAltText } = useHeader({
    isMenuOpened,
    setIsMenuOpened,
  });
  const {
    logo, menuButton, mainClassName, navigationClassName,
  } = getClassNames();
  const { isMenuButtonShown } = getComponentStatuses();
  const { logoAltText } = getLogoAltText();

  return (
    <header className={mainClassName}>
      <img className={logo} src={headerLogoUrl} alt={logoAltText} />
      <HeaderNavigation classNameFromParent={navigationClassName} isMenuOpened={isMenuOpened} />
      {isMenuButtonShown && (
        <HeaderMenuButton
          classNameFromParent={menuButton}
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      )}
    </header>
  );
}

export default Header;
