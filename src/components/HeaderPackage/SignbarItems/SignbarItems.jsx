import React from 'react';
import ButtonLink from '../../ButtonLink/ButtonLink';
import TEXT_CONTENT from '../../../utils/scripts/text-content';

function SignbarItems({ itemClassName, linkClassName }) {
  const { signbarItems } = TEXT_CONTENT.HEADER;

  return signbarItems.map(({
    id, text, type, path,
  }) => (
    <li key={id} className={itemClassName}>
      <ButtonLink path={path} className={linkClassName} type={type} text={text} />
    </li>
  ));
}

export default SignbarItems;
