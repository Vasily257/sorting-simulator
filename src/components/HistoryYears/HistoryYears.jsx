import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import useHistory from '../../hooks/for-components/useHistory';

function HistoryYears({ selectedId, setSelectedID }) {
  const { getClassNames, getItems, getButtonActiveClassName } = useHistory({
    selectedId,
    setSelectedID,
  });
  const { yearClass, yearButtonClass, yearButtonTextClass } = getClassNames();
  const { yearFacts } = getItems();

  return yearFacts.map(({ id, yearValue }) => (
    <li key={id} className={yearClass}>
      <CustomButton
        className={`${yearButtonClass} ${getButtonActiveClassName(id)}`}
        onClick={() => setSelectedID(id)}
        isClassicStyle
      >
        <span className={yearButtonTextClass}>{yearValue}</span>
      </CustomButton>
    </li>
  ));
}

export default HistoryYears;
