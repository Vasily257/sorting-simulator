import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../../hooks/useScreenView';

import CustomButton from '../CustomButton/CustomButton';

import './HeaderMenuButton.css';

function HeaderMenuButton({ isMenuOpened, setIsMenuOPened }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop } = useScreenView();

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOPened(false);
    }
  }, [isDesktop, setIsMenuOPened]);

  return (
    isLoggedIn
    && !isDesktop && (
      <CustomButton
        className={`header-menu-button ${isMenuOpened ? 'header-menu-button_opened ' : ''}`}
        onClick={() => {
          setIsMenuOPened(!isMenuOpened);
        }}
        ariaLabel={isMenuOpened ? 'Закрыть меню' : 'Открыть меню'}
      />
    )
  );
}

HeaderMenuButton.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOPened: PropTypes.func.isRequired,
};

export default HeaderMenuButton;
