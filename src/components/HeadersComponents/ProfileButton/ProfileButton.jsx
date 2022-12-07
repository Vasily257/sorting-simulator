import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../ButtonLink/ButtonLink';
import TEXT_CONTENT from '../../../utils/scripts/text-content';

function ProfileButton({ itemClassName, linkClassName }) {
  const { profileButton } = TEXT_CONTENT.HEADER;
  const { text, type, path } = profileButton;

  return (
    <li className={itemClassName}>
      <ButtonLink path={path} className={linkClassName} type={type} text={text} />
    </li>
  );
}

ProfileButton.propTypes = {
  itemClassName: PropTypes.string.isRequired,
  linkClassName: PropTypes.string.isRequired,
};

export default ProfileButton;
