import React, { useState } from 'react';
import useHeader from '../../../hooks/for-components/useHeader';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import TEXT_CONTENT from '../../../utils/scripts/text-content';
import headerLogoUrl from '../../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { getComponentStatuses, getHeaderClassnames } = useHeader({
    isMenuOpened,
    setIsMenuOpened,
  });

  const {
    logo, menuButton, mainClassName, navigationClassName,
  } = getHeaderClassnames();
  const { isMenuButtonShown } = getComponentStatuses();

  const { logoAltText } = TEXT_CONTENT.HEADER;

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
