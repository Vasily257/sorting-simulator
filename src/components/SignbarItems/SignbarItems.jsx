import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function SignbarItems({ styles }) {
  const {
    item, link, itemTypeSignbar, linkTypeSignbar,
  } = styles;
  const { signbarItems } = TEXT_CONTENT.HEADER_NAVIGATION;

  return signbarItems.map(({
    id, text, type, path,
  }) => (
    <li key={id} className={`${item} ${itemTypeSignbar}`}>
      <ButtonLink path={path} className={`${link} ${linkTypeSignbar}`} type={type} text={text} />
    </li>
  ));
}

export default SignbarItems;
