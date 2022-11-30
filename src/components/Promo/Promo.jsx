import React from 'react';

import useScreenView from '../../hooks/useScreenView';

import Section from '../Section/Section';
import CustomButton from '../CustomButton/CustomButton';

import TEXT_CONTENT from '../../utils/scripts/text-content';

import promoPictureWebp from '../../images/promo/promo-picture.webp';
import promoPicturePng from '../../images/promo/promo-picture.png';

import './Promo.css';

function Promo() {
  const { isTablet } = useScreenView();
  const titleClassName = `promo__title ${!isTablet ? 'visually-hidden' : ''}`;

  return (
    <Section
      titleText={TEXT_CONTENT.PROMO.TITLE}
      isMainSection
      sectionClassNameFromChild="promo"
      titleClassNameFromChild={titleClassName}
      contentClassNameFromChild="promo__content"
    >
      <picture className="promo__picture-wrapper">
        <source srcSet={promoPictureWebp} />
        <img
          className="promo__picture"
          src={promoPicturePng}
          alt={TEXT_CONTENT.PROMO.PICTURE_ALT}
        />
      </picture>
      <p className="promo__subtitle">{TEXT_CONTENT.PROMO.SUBTITLE}</p>
      <CustomButton className="button promo__button" isClassicStyle>
        {TEXT_CONTENT.PROMO.BUTTON}
      </CustomButton>
    </Section>
  );
}

export default Promo;
