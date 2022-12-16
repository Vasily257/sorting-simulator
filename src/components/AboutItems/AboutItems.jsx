import React from 'react';
import PropTypes from 'prop-types';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function AboutItems({ styles }) {
  const { item, subtitle, description } = styles;
  const { items } = TEXT_CONTENT.ABOUT;

  return items.map(({ id, subtitleText, descriptionText }) => (
    <li key={id} className={item}>
      <h3 className={subtitle}>{subtitleText}</h3>
      <p className={description}>{descriptionText}</p>
    </li>
  ));
}

AboutItems.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AboutItems;
