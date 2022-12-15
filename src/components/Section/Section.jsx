import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';
import useSection from '../../hooks/for-components/useSection';

function Section({
  titleText,
  sectionClassNameFromChild,
  titleClassNameFromChild,
  isMainSection,
  children,
}) {
  const { getComplexClassNames, getTitleMakrup } = useSection({
    titleText,
    isMainSection,
    sectionClassNameFromChild,
    titleClassNameFromChild,
    styles,
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
  sectionClassNameFromChild: '',
  titleClassNameFromChild: '',
  isMainSection: false,
};

export default Section;
