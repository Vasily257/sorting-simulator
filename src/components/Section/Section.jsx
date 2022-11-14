import React from 'react';
import PropTypes from 'prop-types';

import './Section.css';

function Section({ children, classNameFromChild }) {
  return <section className={`section ${classNameFromChild}`}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classNameFromChild: PropTypes.node.isRequired,
};

export default Section;
