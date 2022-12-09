import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../CustomButton/CustomButton';

import './HeaderMenuButton.css';
import TEXT_CONTENT from '../../../utils/scripts/text-content';
import CLASSNAMES from '../../../utils/scripts/classnames';

function HeaderMenuButton({ сlassNameFromParent, isMenuOpened, setIsMenuOpened }) {
  const { main, mainOpened } = CLASSNAMES.HEADER_MENU_BUTTON;
  const mainClassName = `${сlassNameFromParent} ${main} ${isMenuOpened ? mainOpened : ''}`;

  const { ariaLabelMenuButton } = TEXT_CONTENT.HEADER;
  const { close, open } = ariaLabelMenuButton;

  return (
    <CustomButton
      className={mainClassName}
      onClick={() => setIsMenuOpened(!isMenuOpened)}
      ariaLabel={isMenuOpened ? close : open}
    />
  );
}

HeaderMenuButton.propTypes = {
  сlassNameFromParent: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOpened: PropTypes.func.isRequired,
};

export default HeaderMenuButton;
