import React from 'react';

function HistoryFactItems({ facts, styles }) {
  return facts.map(({ factId, factText }) => (
    <li key={factId} className={styles.fact}>
      <p className={styles.factText}>{factText}</p>
    </li>
  ));
}

export default HistoryFactItems;
