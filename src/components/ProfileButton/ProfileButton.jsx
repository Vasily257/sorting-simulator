import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../ButtonLink/ButtonLink';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function ProfileButton({ styles }) {
  const { item, link } = styles;
  const { profileButton } = TEXT_CONTENT.HEADER_NAVIGATION;
  const { text, type, path } = profileButton;

  return (
    <li className={item}>
      <ButtonLink path={path} className={link} type={type} text={text} />
    </li>
  );
}

ProfileButton.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProfileButton;
