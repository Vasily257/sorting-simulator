import React from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from 'react-router-dom';

import './CustomLink.css';

function CustomLink({
  path, className, activeClassName, onClick, target, ariaLabel, children,
}) {
  if (path.startsWith('http')) {
    return (
      <a href={path} className={`custom-link ${className}`} rel="noreferrer" target={target}>
        {children}
      </a>
    );
  }
  if (activeClassName) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) => `custom-link ${className} ${isActive ? activeClassName : ''}`}
        onClick={onClick}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <Link to={path} className={`custom-link ${className}`} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CustomLink.defaultProps = {
  onClick: () => {},
  target: '_blank',
  activeClassName: '',
  ariaLabel: '' || null,
  children: '' || null,
};

export default CustomLink;
