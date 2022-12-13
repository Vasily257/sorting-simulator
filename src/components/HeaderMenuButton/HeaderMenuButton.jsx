import React from 'react';
import PropTypes from 'prop-types';
import useHeaderMenuButton from '../../hooks/for-components/useHeaderMenuButton';
import CustomButton from '../CustomButton/CustomButton';
import './HeaderMenuButton.css';

function HeaderMenuButton({ classNameFromParent, isMenuOpened, setIsMenuOpened }) {
  const { getClassNames, getAriaLabelText } = useHeaderMenuButton({
    classNameFromParent,
    isMenuOpened,
  });
  const { mainClassName } = getClassNames();
  const { close, open } = getAriaLabelText();

  return (
    <CustomButton
      className={mainClassName}
      onClick={() => setIsMenuOpened(!isMenuOpened)}
      ariaLabel={isMenuOpened ? close : open}
    />
  );
}

HeaderMenuButton.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOpened: PropTypes.func.isRequired,
};

export default HeaderMenuButton;
