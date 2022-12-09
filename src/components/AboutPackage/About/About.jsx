import React from 'react';
import Section from '../../Section/Section';
import CustomList from '../../CustomList/CustomList';
import AboutItems from '../AboutItems/AboutItems';
import CLASSNAMES from '../../../utils/scripts/classnames';
import TEXT_CONTENT from '../../../utils/scripts/text-content';

import './About.css';

function About() {
  const {
    main, list, item, subtitle, description,
  } = CLASSNAMES.ABOUT;
  const { titleText, items } = TEXT_CONTENT.ABOUT;

  return (
    <Section className={main} titleText={titleText}>
      <CustomList className={list}>
        <AboutItems
          items={items}
          itemClassName={item}
          subtitleClassName={subtitle}
          descriptionClassName={description}
        />
      </CustomList>
    </Section>
  );
}

export default About;
