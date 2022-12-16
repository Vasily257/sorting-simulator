import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function NavbarItems({ styles }) {
  const { item, link, linkActive } = styles;
  const { navbarItems } = TEXT_CONTENT.HEADER_NAVIGATION;

  return navbarItems.map(({ id, text, path }) => (
    <li key={id} className={item}>
      <CustomLink path={path} className={link} activeClassName={linkActive}>
        {text}
      </CustomLink>
    </li>
  ));
}

export default NavbarItems;
