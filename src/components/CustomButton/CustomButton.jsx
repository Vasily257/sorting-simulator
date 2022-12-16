import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomButton.module.css';

function CustomButton({
  className,
  isSubmitType,
  isClassicStyle,
  onClick,
  ariaLabel,
  disabled,
  children,
}) {
<<<<<<< HEAD
  const { base, baseStyleClassic } = styles;
  const finalClassName = `${isClassicStyle ? baseStyleClassic : base} ${className}`;

  return (
    <button
      className={finalClassName}
      type={isSubmitType ? 'submit' : 'button'}
=======
  return (
    <button
      className={`custom-button ${
        isClassicStyle ? 'custom-button_style_classic' : ''
      } ${className}`}
      type={isSubmitButton ? 'submit' : 'button'}
>>>>>>> 374447910fbb3593ba986326a9a99bb1393ad46c
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
  isSubmitType: PropTypes.bool,
  isClassicStyle: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CustomButton.defaultProps = {
  className: '',
  isSubmitType: false,
  isClassicStyle: false,
  onClick: () => {},
  ariaLabel: '',
  disabled: false,
  children: '' || null,
};

export default CustomButton;
