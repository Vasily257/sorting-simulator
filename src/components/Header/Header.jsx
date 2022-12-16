import React, { useState } from 'react';
import useHeader from '../../hooks/for-components/useHeader';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderMenuButton from '../HeaderMenuButton/HeaderMenuButton';
import headerLogoUrl from '../../images/header-logo.svg';
import styles from './Header.module.css';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const { getComponentStatuses, getComplexClassNames } = useHeader({ setIsMenuOpened, styles });
  const { isMenuButtonShown, isNavbarShown, isSignBarShown } = getComponentStatuses(isMenuOpened);
  const { headerClassName, navigationClassName } = getComplexClassNames(isMenuOpened);

  const { logo } = styles;
  const { logoAltText } = TEXT_CONTENT.HEADER;

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
