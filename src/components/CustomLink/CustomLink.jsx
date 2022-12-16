import React from 'react';
import PropTypes from 'prop-types';
import WebLink from '../WebLink/WebLink';
import RouterLink from '../RouterLink/RouterLink';
import RouterNavLink from '../RouterNavLink/RouterNavLink';
import styles from './CustomLink.module.css';

function CustomLink({
  path, className, activeClassName, onClick, target, ariaLabel, children,
}) {
  if (path.startsWith('http')) {
    return (
      <WebLink path={path} className={className} target={target}>
        {children}
      </WebLink>
    );
  }

  if (activeClassName) {
    return (
      <RouterNavLink
        path={path}
        className={className}
        activeClassName={activeClassName}
        styles={styles}
        onClick={onClick}
      >
        {children}
      </RouterNavLink>
    );
  }

  return (
    <RouterLink
      path={path}
      className={className}
      styles={styles}
      onClick={onClick}
      ariaLabel={ariaLabel}
    >
      {children}
    </RouterLink>
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
  ariaLabel: '',
  children: '' || null,
};

export default CustomLink;
