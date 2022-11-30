import React from 'react';
import PropTypes from 'prop-types';

import './Section.css';

function Section({
  titleText,
  isMainSection,
  sectionClassNameFromChild,
  titleClassNameFromChild,
  children,
}) {
  const sectionClassName = `section ${sectionClassNameFromChild}`;

  const firstLevelTitleClassName = `section__title section__title_level_first ${titleClassNameFromChild}`;
  const secondLevelTitleClassName = `section__title section__title_level_second ${titleClassNameFromChild}`;

  const firstLevelTitle = <h1 className={firstLevelTitleClassName}>{titleText}</h1>;
  const secondLevelTitle = <h2 className={secondLevelTitleClassName}>{titleText}</h2>;

  const sectionTitle = isMainSection ? firstLevelTitle : secondLevelTitle;

  return (
    <section className={sectionClassName}>
      {sectionTitle}
      {children}
    </section>
  );
}

Section.propTypes = {
  titleText: PropTypes.string,
  isMainSection: PropTypes.bool,
  sectionClassNameFromChild: PropTypes.string,
  titleClassNameFromChild: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  titleText: '',
  isMainSection: false,
  sectionClassNameFromChild: '',
  titleClassNameFromChild: '',
};

export default Section;
