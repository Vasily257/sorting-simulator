import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.css';

function SectionTitle({ classNameFromParent, text }) {
  return <h2 className={`section-title ${classNameFromParent}`}>{text}</h2>;
}

SectionTitle.propTypes = {
  classNameFromParent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
