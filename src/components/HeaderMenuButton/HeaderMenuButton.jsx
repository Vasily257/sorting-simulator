import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import LoggedInContext from '../../contexts/LoggedInContext';
import useScreenView from '../../hooks/useScreenView';

import CustomButton from '../CustomButton/CustomButton';

import './HeaderMenuButton.css';

function HeaderMenuButton({ сlassNameFromParent, isMenuOpened, setIsMenuOpened }) {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { isDesktop } = useScreenView();

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpened(false);
    }
  }, [isDesktop, setIsMenuOpened]);

  return (
    isLoggedIn
    && !isDesktop && (
      <CustomButton
        className={`${сlassNameFromParent} header-menu-button ${
          isMenuOpened ? 'header-menu-button_opened' : ''
        }`}
        onClick={() => {
          setIsMenuOpened(!isMenuOpened);
        }}
        ariaLabel={isMenuOpened ? 'Закрыть меню' : 'Открыть меню'}
      />
    )
  );
}

HeaderMenuButton.propTypes = {
  сlassNameFromParent: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOpened: PropTypes.func.isRequired,
};

export default HeaderMenuButton;
