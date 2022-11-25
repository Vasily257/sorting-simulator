import React from 'react';

import Section from '../Section/Section';
import SectionTitle from '../SectionTitle/SectionTitle';

import TEXT_CONTENT from '../../utils/scripts/text-content';

import './About.css';

function About() {
  return (
    <Section classNameFromChild="about">
      <SectionTitle classNameFromParent="about__title" text={TEXT_CONTENT.ABOUT.TITLE} />
      <ul className="about__list">
        {TEXT_CONTENT.ABOUT.ITEMS.map(({ ID, SUBTITLE, DESCRIPTION }) => (
          <li key={ID} className="about__item">
            <h3 className="about__subtitle">{SUBTITLE}</h3>
            <p className="about__description">{DESCRIPTION}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default About;
