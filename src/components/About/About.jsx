import React from 'react';

import Section from '../Section/Section';

import CustomList from '../CustomList/CustomList';

import TEXT_CONTENT from '../../utils/scripts/text-content';

import './About.css';

function About() {
  const { titleText, items } = TEXT_CONTENT.ABOUT;

  return (
    <Section titleText={titleText}>
      <CustomList className="about__list">
        {items.map(({ id, subtitle, description }) => (
          <li key={id} className="about__item">
            <h3 className="about__subtitle">{subtitle}</h3>
            <p className="about__description">{description}</p>
          </li>
        ))}
      </CustomList>
    </Section>
  );
}

export default About;
