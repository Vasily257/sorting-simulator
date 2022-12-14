import React from 'react';
import CustomList from '../CustomList/CustomList';
import HistoryFactItems from '../HistoryFactItems/HistoryFactItems';
import useHistory from '../../hooks/for-components/useHistory';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function HistoryFactList({ selectedId, styles }) {
  const { getFiltredYearFacts } = useHistory({ styles });
  const { yearFacts, factsAriaLabelText } = TEXT_CONTENT.HISTORY;

  const filtredYearFacts = getFiltredYearFacts({ yearFacts, selectedId });

  return filtredYearFacts.map(({ id, yearValue, facts }) => (
    <CustomList key={id} className={styles.facts} ariaLabel={`${factsAriaLabelText} ${yearValue}`}>
      <HistoryFactItems facts={facts} styles={styles} />
    </CustomList>
  ));
}

export default HistoryFactList;
