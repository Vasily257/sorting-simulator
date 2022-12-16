import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomList.module.css';

function CustomList({ className, ariaLabel, children }) {
  return (
    <ul className={`${styles.base} ${className}`} aria-label={ariaLabel}>
      {children}
    </ul>
  );
}

CustomList.propTypes = {
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CustomList.defaultProps = {
  className: '',
  ariaLabel: '' || null,
  children: '' || null,
};

export default CustomList;
