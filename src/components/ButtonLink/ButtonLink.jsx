import React from 'react';
import PropTypes from 'prop-types';
import useButtonLink from '../../hooks/useButtonLink';
import CustomLink from '../CustomLink/CustomLink';
import styles from './ButtonLink.module.css';

function ButtonLink({
  path, className, type, text,
}) {
  const { typeClassName, typeActiveClassName } = useButtonLink({ className, type, styles });

  return (
    <CustomLink path={path} className={typeClassName} activeClassName={typeActiveClassName}>
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
