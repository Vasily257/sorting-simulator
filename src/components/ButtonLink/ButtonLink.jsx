import React from 'react';
import PropTypes from 'prop-types';
import useButtonLink from '../../hooks/useButtonLink';
import CustomLink from '../CustomLink/CustomLink';
import styles from './ButtonLink.module.css';

function ButtonLink({
  path, className, type, text,
}) {
<<<<<<< HEAD
  const { typeClassName, typeActiveClassName } = useButtonLink({ className, type, styles });

  return (
    <CustomLink path={path} className={typeClassName} activeClassName={typeActiveClassName}>
=======
  const { typeClassName, typeActiveClassName } = getTypeClassName(type);

  return (
    <CustomLink
      path={path}
      className={`button-link ${typeClassName} ${className} `}
      activeClassName={typeActiveClassName}
    >
>>>>>>> 374447910fbb3593ba986326a9a99bb1393ad46c
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
