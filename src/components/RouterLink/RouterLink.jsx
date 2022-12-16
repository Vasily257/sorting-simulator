import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouterLink({
  path, className, styles, onClick, ariaLabel, children,
}) {
  return (
    <Link
      to={path}
      className={`${styles.base} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

RouterLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

RouterLink.defaultProps = {
  ariaLabel: '' || null,
};

export default RouterLink;
