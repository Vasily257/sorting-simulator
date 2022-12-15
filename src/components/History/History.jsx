import React, { useState } from 'react';
import Section from '../Section/Section';
import HistoryYearList from '../HistoryYearList/HistoryYearList';
import HistoryFactList from '../HistoryFactList/HistoryFactList';
import styles from './History.module.css';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function History() {
  const [selectedId, setSelectedID] = useState(0);
  const { titleText } = TEXT_CONTENT.HISTORY;

  return (
    <Section titleText={titleText}>
      <div className={styles.content}>
        <HistoryYearList selectedId={selectedId} setSelectedID={setSelectedID} styles={styles} />
        <HistoryFactList selectedId={selectedId} styles={styles} />
      </div>
    </Section>
  );
}

export default History;
