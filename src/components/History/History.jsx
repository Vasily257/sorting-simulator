import React, { useState } from 'react';
import Section from '../Section/Section';
import CustomList from '../CustomList/CustomList';
import HistoryYears from '../HistoryYears/HistoryYears';
import HistoryFactList from '../HistoryFactList/HistoryFactList';
import styles from './History.module.css';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function History() {
  const [selectedId, setSelectedID] = useState(0);

  const { content, years } = styles;
  const { titleText } = TEXT_CONTENT.HISTORY;

  return (
    <Section titleText={titleText}>
      <div className={content}>
        <CustomList className={years}>
          <HistoryYears selectedId={selectedId} setSelectedID={setSelectedID} styles={styles} />
        </CustomList>
        <HistoryFactList selectedId={selectedId} styles={styles} />
      </div>
    </Section>
  );
}

export default History;
