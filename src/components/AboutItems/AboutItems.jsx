import React from 'react';

function AboutItems({
  items, itemClassName, subtitleClassName, descriptionClassName,
}) {
  return items.map(({ id, subtitle, description }) => (
    <li key={id} className={itemClassName}>
      <h3 className={subtitleClassName}>{subtitle}</h3>
      <p className={descriptionClassName}>{description}</p>
    </li>
  ));
}

export default AboutItems;
