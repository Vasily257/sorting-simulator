import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.css';

function CustomButton({
  className, isSubmitButton, onClick, ariaLabel, disabled, children,
}) {
  return (
    <button
      className={`custom-button ${className}`}
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
  className: PropTypes.string.isRequired,
  isSubmitButton: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CustomButton.defaultProps = {
  isSubmitButton: false,
  onClick: () => {},
  ariaLabel: '',
  disabled: false,
  children: '' || null,
};

export default CustomButton;
