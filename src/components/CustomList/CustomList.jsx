import React from 'react';
import PropTypes from 'prop-types';

import './CustomList.css';

function CustomList({ className, children }) {
  return <ul className={`custom-list ${className}`}>{children}</ul>;
}

CustomList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CustomList.defaultProps = {
  className: '',
  children: '' || null,
};

export default CustomList;
