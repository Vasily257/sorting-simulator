import React from 'react';
import useHeaderNavigation from '../../../hooks/for-components/useHeaderNavigation';
import ButtonLink from '../../ButtonLink/ButtonLink';

function SignbarItems() {
  const { getClassNames, getItems } = useHeaderNavigation();
  const {
    item, link, itemTypeSignBar, linkTypeSignBar,
  } = getClassNames();
  const { signbarItems } = getItems();

  return signbarItems.map(({
    id, text, type, path,
  }) => (
    <li key={id} className={`${item} ${itemTypeSignBar}`}>
      <ButtonLink path={path} className={`${link} ${linkTypeSignBar}`} type={type} text={text} />
    </li>
  ));
}

export default SignbarItems;
