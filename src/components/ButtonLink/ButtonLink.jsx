import React from 'react';
import PropTypes from 'prop-types';

import CustomLink from '../CustomLink/CustomLink';

import getTypeClassName from '../../utils/scripts/utils';

import './ButtonLink.css';

function ButtonLink({
  path, className, type, text,
}) {
  const { typeClassName, typeActiveClassName } = getTypeClassName(type);

  return (
    <CustomLink
      path={path}
      className={`button-link ${typeClassName} ${className} `}
      activeClassName={typeActiveClassName}
    >
      {text}
    </CustomLink>
  );
}

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLink;
