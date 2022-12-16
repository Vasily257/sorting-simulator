import React from 'react';
import Section from '../Section/Section';
import CustomList from '../CustomList/CustomList';
import AboutItems from '../AboutItems/AboutItems';
import styles from './About.module.css';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function About() {
  const { main, list } = styles;
  const { titleText } = TEXT_CONTENT.ABOUT;

  return (
    <Section className={main} titleText={titleText}>
      <CustomList className={list}>
        <AboutItems styles={styles} />
      </CustomList>
    </Section>
  );
}

export default About;
