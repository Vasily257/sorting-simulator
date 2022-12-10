import React, { useState } from 'react';
import useHistory from '../../../hooks/for-components/useHistory';
import Section from '../../Section/Section';
import CustomList from '../../CustomList/CustomList';
import HistoryYears from '../HistoryYears/HistoryYears';
import HistoryFacts from '../HistoryFacts/HistoryFacts';

import './History.css';

function History() {
  const [selectedId, setSelectedID] = useState(0);

  const { getClassNames, getText } = useHistory({ selectedId });
  const {
    mainClass, titleClass, contentClass, yearsClass,
  } = getClassNames();
  const { titleText } = getText();

  return (
    <Section
      titleText={titleText}
      sectionClassNameFromChild={mainClass}
      titleClassNameFromChild={titleClass}
    >
      <div className={contentClass}>
        <CustomList className={yearsClass}>
          <HistoryYears selectedId={selectedId} setSelectedID={setSelectedID} />
        </CustomList>
        <HistoryFacts selectedId={selectedId} />
      </div>
    </Section>
  );
}

export default History;
