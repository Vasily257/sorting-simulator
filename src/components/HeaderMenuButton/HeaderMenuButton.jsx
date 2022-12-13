import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton/CustomButton';
import styles from './HeaderMenuButton.module.css';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function HeaderMenuButton({ isMenuOpened, setIsMenuOpened }) {
  const { main, mainOpened } = styles;
  const mainClassName = `${main} ${isMenuOpened ? mainOpened : ''}`;

  const { ariaLabelText } = TEXT_CONTENT.HEADER_MENU_BUTTON;
  const { close, open } = ariaLabelText;

  return (
    <CustomButton
      className={mainClassName}
      onClick={() => setIsMenuOpened(!isMenuOpened)}
      ariaLabel={isMenuOpened ? close : open}
    />
  );
}

HeaderMenuButton.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOpened: PropTypes.func.isRequired,
};

export default HeaderMenuButton;
