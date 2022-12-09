import React, { useState } from 'react';
import useHeader from '../../../hooks/for-components/useHeader';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import CLASSNAMES from '../../../utils/scripts/classnames';
import TEXT_CONTENT from '../../../utils/scripts/text-content';
import headerLogoUrl from '../../../images/header-logo.svg';

import './Header.css';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isMenuButtonShown, isLoggedIn } = useHeader({ isMenuOpened, setIsMenuOpened });

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
      <HeaderNavigation
        classNameFromParent={navigationClassName}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
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
