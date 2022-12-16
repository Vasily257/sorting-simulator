import React from 'react';
import PropTypes from 'prop-types';
import CustomList from '../CustomList/CustomList';
import SignbarItems from '../SignbarItems/SignbarItems';

function Signbar({ classNameFromParent, styles }) {
  const {
    main, mainTypeSignbar, list, listTypeSignbar,
  } = styles;

  return (
    <nav className={`${classNameFromParent} ${main} ${mainTypeSignbar}`}>
      <CustomList className={`${list} ${listTypeSignbar}`}>
        <SignbarItems styles={styles} />
      </CustomList>
    </nav>
  );
}

Signbar.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Signbar;
