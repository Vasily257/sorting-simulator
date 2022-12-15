import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section({ titleText, isMainSection, children }) {
  const { base, title } = styles;

  return (
    <section className={base}>
      {!isMainSection && <h2 className={title}>{titleText}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  titleText: PropTypes.string,
  isMainSection: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  titleText: '',
  isMainSection: false,
};

export default Section;
