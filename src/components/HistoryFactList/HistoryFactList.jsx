import React from 'react';
import PropTypes from 'prop-types';
import CustomList from '../CustomList/CustomList';
import HistoryFactItems from '../HistoryFactItems/HistoryFactItems';
import useHistory from '../../hooks/for-components/useHistory';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function HistoryFactList({ selectedId, styles }) {
  const { getFiltredYearFacts } = useHistory({ styles });
  const { yearFacts, factsAriaLabelText } = TEXT_CONTENT.HISTORY;

  const filtredYearFacts = getFiltredYearFacts({ yearFacts, selectedId });
  const { id, yearValue, facts } = filtredYearFacts;

  return (
    <CustomList key={id} className={styles.facts} ariaLabel={`${factsAriaLabelText} ${yearValue}`}>
      <HistoryFactItems facts={facts} styles={styles} />
    </CustomList>
  );
}

HistoryFactList.propTypes = {
  selectedId: PropTypes.bool.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default HistoryFactList;
