import React from 'react';

import Section from '../Section/Section';

import CustomList from '../CustomList/CustomList';

import TEXT_CONTENT from '../../utils/scripts/text-content';

import './About.css';

function About() {
  return (
    <Section titleText={TEXT_CONTENT.ABOUT.TITLE}>
      <CustomList className="about__list">
        {TEXT_CONTENT.ABOUT.ITEMS.map(({ ID, SUBTITLE, DESCRIPTION }) => (
          <li key={ID} className="about__item">
            <h3 className="about__subtitle">{SUBTITLE}</h3>
            <p className="about__description">{DESCRIPTION}</p>
          </li>
        ))}
      </CustomList>
    </Section>
  );
}

export default About;
