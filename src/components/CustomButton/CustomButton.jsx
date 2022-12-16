import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.css';

function CustomButton({
  className,
  isSubmitButton,
  isClassicStyle,
  onClick,
  ariaLabel,
  disabled,
  children,
}) {
  return (
    <button
      className={`custom-button ${
        isClassicStyle ? 'custom-button_style_classic' : ''
      } ${className}`}
      type={isSubmitButton ? 'submit' : 'button'}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  className: PropTypes.string,
  isSubmitButton: PropTypes.bool,
  isClassicStyle: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CustomButton.defaultProps = {
  className: '',
  isSubmitButton: false,
  isClassicStyle: false,
  onClick: () => {},
  ariaLabel: '',
  disabled: false,
  children: '' || null,
};

export default CustomButton;
