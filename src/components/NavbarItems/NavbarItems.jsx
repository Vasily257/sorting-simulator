import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function NavbarItems({ itemClassName, linkClassName, activeLinkClassName }) {
  const { navbarItems } = TEXT_CONTENT.HEADER;

  return navbarItems.map(({ id, text, path }) => (
    <li key={id} className={itemClassName}>
      <CustomLink path={path} className={linkClassName} activeClassName={activeLinkClassName}>
        {text}
      </CustomLink>
    </li>
  ));
}

export default NavbarItems;
