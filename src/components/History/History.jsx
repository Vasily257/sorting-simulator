import React, { useState } from 'react';

import Section from '../Section/Section';
import CustomButton from '../CustomButton/CustomButton';
import CustomList from '../CustomList/CustomList';

import TEXT_CONTENT from '../../utils/scripts/text-content';

import './History.css';

function History() {
  const [selectedId, setSelectedID] = useState(0);

  const buttonActiveClassName = 'history__year-button_active';

  function getButtonActiveClassName(id) {
    if (selectedId === id) return buttonActiveClassName;
    return '';
  }

  const { title, yearFacts } = TEXT_CONTENT.HISTORY;

  return (
    <Section
      titleText={title}
      sectionClassNameFromChild="history"
      titleClassNameFromChild="history__title"
    >
      <div className="history__content">
        <CustomList className="history__years">
          {yearFacts.map(({ id, year }) => (
            <li key={id} className="history__year">
              <CustomButton
                className={`history__year-button ${getButtonActiveClassName(id)}`}
                onClick={() => setSelectedID(id)}
                isClassicStyle
              >
                <span className="history__year-button-text">{year}</span>
              </CustomButton>
            </li>
          ))}
        </CustomList>
        {yearFacts
          .filter(({ id }) => id === selectedId)
          .map(({ id, year, facts }) => (
            <CustomList
              key={id}
              className="history__facts"
              ariaLabel={`События выбранного года: ${year}`}
            >
              {facts.map(({ factId, fact }) => (
                <li key={factId} className="history__fact">
                  <p className="history__fact-text">{fact}</p>
                </li>
              ))}
            </CustomList>
          ))}
      </div>
    </Section>
  );
}

export default History;
