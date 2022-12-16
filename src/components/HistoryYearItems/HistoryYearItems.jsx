import React from 'react';

import CustomButton from '../CustomButton/CustomButton';
import useHistory from '../../hooks/useHistory';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function HistoryYearItems({ selectedId, setSelectedID, styles }) {
  const { getButtonClassName } = useHistory({ styles });

  const { year, yearButtonText } = styles;
  const { yearFacts } = TEXT_CONTENT.HISTORY;

  return yearFacts.map(({ id, yearValue }) => (
    <li key={id} className={year}>
      <CustomButton
        className={`${getButtonClassName(id, selectedId)}`}
        onClick={() => setSelectedID(id)}
        isClassicStyle
      >
        <span className={yearButtonText}>{yearValue}</span>
      </CustomButton>
    </li>
  ));
}

export default HistoryYearItems;
