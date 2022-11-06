import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LoggedInContext from '../../contexts/LoggedInContext';

import CustomButton from '../CustomButton/CustomButton';

import './HeaderMenu.css';

function HeaderMenu({ isMenuOpened, setIsMenuOPened }) {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    isLoggedIn && (
      <CustomButton
        className={`header-menu ${isMenuOpened ? 'header-menu_opened ' : ''}`}
        onClick={() => {
          setIsMenuOPened(!isMenuOpened);
        }}
        ariaLabel={isMenuOpened ? 'Закрыть меню' : 'Открыть меню'}
      />
    )
  );
}

HeaderMenu.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOPened: PropTypes.func.isRequired,
};

export default HeaderMenu;
