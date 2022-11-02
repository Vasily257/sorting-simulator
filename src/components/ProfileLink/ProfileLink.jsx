import React from 'react';
import PropTypes from 'prop-types';

import CustomLink from '../CustomLink/CustomLink';

import './ProfileLink.css';

function ProfileLink({ path, commonClassName, text }) {
  return (
    <CustomLink
      path={path}
      className={`${commonClassName} profile-link`}
      activeClassName="profile-link_active"
    >
      {text}
    </CustomLink>
  );
}

ProfileLink.propTypes = {
  path: PropTypes.string.isRequired,
  commonClassName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProfileLink;
