import React from 'react';
import PropTypes from 'prop-types';

function WebLink({
  path, className, styles, target, children,
}) {
  return (
    <a href={path} className={`${styles.base} ${className}`} rel="noreferrer" target={target}>
      {children}
    </a>
  );
}

WebLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WebLink;
