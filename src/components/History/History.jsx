import React, { useState } from 'react';

import Section from '../Section/Section';
import CustomButton from '../CustomButton/CustomButton';
import CustomList from '../CustomList/CustomList';

import TEXT_CONTENT from '../../utils/scripts/text-content';

import './History.css';

function History() {
  const [selectedId, setSelectedID] = useState(0);

  const buttonActiveClassName = 'history__year-button_active';

  function getButtonActiveClassName(ID) {
    if (selectedId === ID) return buttonActiveClassName;
    return '';
  }

  const yearFacts = TEXT_CONTENT.HISTORY.YEAR_FACTS;

  return (
    <Section
      titleText={TEXT_CONTENT.HISTORY.TITLE}
      sectionClassNameFromChild="history"
      titleClassNameFromChild="history__title"
    >
      <div className="history__content">
        <CustomList className="history__years">
          {yearFacts.map(({ ID, YEAR }) => (
            <li key={ID} className="history__year">
              <CustomButton
                className={`history__year-button ${getButtonActiveClassName(ID)}`}
                onClick={() => setSelectedID(ID)}
                isClassicStyle
              >
                <span className="history__year-button-text">{YEAR}</span>
              </CustomButton>
            </li>
          ))}
        </CustomList>
        {yearFacts
          .filter(({ ID }) => ID === selectedId)
          .map(({ ID, YEAR, FACTS }) => (
            <CustomList
              key={ID}
              className="history__facts"
              ariaLabel={`События выбранного года: ${YEAR}`}
            >
              {FACTS.map(({ FACT_ID, FACT }) => (
                <li key={FACT_ID} className="history__fact">
                  <p className="history__fact-text">{FACT}</p>
                </li>
              ))}
            </CustomList>
          ))}
      </div>
    </Section>
  );
}

export default History;
