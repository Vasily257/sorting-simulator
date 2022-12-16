import React, { useState, useEffect } from 'react';
import useScreenView from '../../hooks/useScreenView';
import useHeader from '../../hooks/useHeader';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import headerLogoUrl from '../../images/header-logo.svg';
import styles from './Header.module.css';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isDesktop } = useScreenView();

  const { getComponentStatuses, getComplexClassNames } = useHeader({ styles });
  const { isMenuButtonShown, isNavbarShown, isSignBarShown } = getComponentStatuses(isMenuOpened);
  const { headerClassName, navigationClassName } = getComplexClassNames(isMenuOpened);

  const { logo } = styles;
  const { logoAltText } = TEXT_CONTENT.HEADER;

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return (
    <header className={headerClassName}>
      <img className={logo} src={headerLogoUrl} alt={logoAltText} />
      <HeaderNavigation
        classNameFromParent={navigationClassName}
        isNavbarShown={isNavbarShown}
        isSignBarShown={isSignBarShown}
      />
      {isMenuButtonShown && (
        <HeaderMenuButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      )}
    </header>
  );
}

export default Header;
