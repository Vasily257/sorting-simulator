import React from 'react';
import PropTypes from 'prop-types';
import useSection from '../../hooks/for-components/useSection';

import './Section.css';

function Section({
  titleText,
  isMainSection,
  sectionClassNameFromChild,
  titleClassNameFromChild,
  children,
}) {
  const { getComplexClassNames, getTitleMakrup } = useSection({
    titleText,
    isMainSection,
    sectionClassNameFromChild,
    titleClassNameFromChild,
  });

  const { sectionClassName } = getComplexClassNames();
  const { sectionTitle } = getTitleMakrup();

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
