import React from 'react';
import useHeaderNavigation from '../../../hooks/for-components/useHeaderNavigation';
import CustomLink from '../../CustomLink/CustomLink';

function NavbarItems() {
  const { getClassNames, getItems } = useHeaderNavigation();
  const { item, link, activeLink } = getClassNames();
  const { navbarItems } = getItems();

  return navbarItems.map(({ id, text, path }) => (
    <li key={id} className={item}>
      <CustomLink path={path} className={link} activeClassName={activeLink}>
        {text}
      </CustomLink>
    </li>
  ));
}

export default NavbarItems;
