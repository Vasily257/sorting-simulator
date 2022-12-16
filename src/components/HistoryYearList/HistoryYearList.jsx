import React from 'react';
import PropTypes from 'prop-types';
import CustomList from '../CustomList/CustomList';
import HistoryYearItems from '../HistoryYearItems/HistoryYearItems';

function HistoryYearList({ selectedId, setSelectedID, styles }) {
  return (
    <CustomList className={styles.years}>
      <HistoryYearItems selectedId={selectedId} setSelectedID={setSelectedID} styles={styles} />
    </CustomList>
  );
}

HistoryYearList.propTypes = {
  selectedId: PropTypes.number.isRequired,
  setSelectedID: PropTypes.func.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default HistoryYearList;
