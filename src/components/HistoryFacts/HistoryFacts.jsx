import React from 'react';
import CustomList from '../CustomList/CustomList';
import useHistory from '../../hooks/for-components/useHistory';

function HistoryFacts({ selectedId }) {
  const { getClassNames, getItems, getText } = useHistory({ selectedId });
  const { factsClass, factClass, factTextClass } = getClassNames();
  const { yearFacts } = getItems();
  const { factsAriaLabelText } = getText();

  return yearFacts
    .filter(({ id }) => id === selectedId)
    .map(({ id, year, facts }) => (
      <CustomList key={id} className={factsClass} ariaLabel={`${factsAriaLabelText} ${year}`}>
        {facts.map(({ factId, factText }) => (
          <li key={factId} className={factClass}>
            <p className={factTextClass}>{factText}</p>
          </li>
        ))}
      </CustomList>
    ));
}

export default HistoryFacts;
