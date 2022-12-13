import React from 'react';
import PropTypes from 'prop-types';
import useHeaderNavigation from '../../hooks/for-components/useHeaderNavigation';
import CustomList from '../CustomList/CustomList';
import SignbarItems from '../SignbarItems/SignbarItems';

function Signbar({ classNameFromParent }) {
  const { getClassNames } = useHeaderNavigation();
  const {
    main, list, mainTypeSignBar, listTypeSignBar,
  } = getClassNames();

  return (
    <nav className={`${classNameFromParent} ${main} ${mainTypeSignBar}`}>
      <CustomList className={`${list} ${listTypeSignBar}`}>
        <SignbarItems />
      </CustomList>
    </nav>
  );
}

Signbar.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
};

export default Signbar;
