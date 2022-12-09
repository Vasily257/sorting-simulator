import React from 'react';
import PropTypes from 'prop-types';
import CustomList from '../../CustomList/CustomList';
import SignbarItems from '../SignbarItems/SignbarItems';
import CLASSNAMES from '../../../utils/scripts/classnames';

function Signbar({ classNameFromParent }) {
  const {
    main,
    list,
    item,
    link,
    mainTypeSignBar,
    listTypeSignBar,
    itemTypeSignBar,
    linkTypeSignBar,
  } = CLASSNAMES.HEADER_NAVIGATION;

  return (
    <nav className={`${classNameFromParent} ${main} ${mainTypeSignBar}`}>
      <CustomList className={`${list} ${listTypeSignBar}`}>
        <SignbarItems
          itemClassName={`${item} ${itemTypeSignBar}`}
          linkClassName={`${link} ${linkTypeSignBar}`}
        />
      </CustomList>
    </nav>
  );
}

Signbar.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
};

export default Signbar;
