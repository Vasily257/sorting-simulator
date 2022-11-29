import React from 'react';
import PropTypes from 'prop-types';

import './CustomList.css';

function CustomList({ className, ariaLabel, children }) {
  return (
    <ul className={`custom-list ${className}`} aria-label={ariaLabel}>
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
  ariaLabel: '',
  children: '' || null,
};

export default CustomList;
