import React from 'react';
import useHeaderNavigation from '../../../hooks/for-components/useHeaderNavigation';
import ButtonLink from '../../ButtonLink/ButtonLink';

function ProfileButton() {
  const { getClassNames, getProfileButtonInfo } = useHeaderNavigation();
  const { item, link } = getClassNames();
  const { text, type, path } = getProfileButtonInfo();

  return (
    <li className={item}>
      <ButtonLink path={path} className={link} type={type} text={text} />
    </li>
  );
}

export default ProfileButton;
