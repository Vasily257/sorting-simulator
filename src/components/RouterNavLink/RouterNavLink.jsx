import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouterNavLink({
  path, className, activeClassName, styles, onClick, children,
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `${styles.base} ${className} ${isActive ? activeClassName : ''}`}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

RouterNavLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  activeClassName: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default RouterNavLink;
