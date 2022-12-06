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

  const {
    title, subtitle, pictureAltText, buttonText,
  } = TEXT_CONTENT.PROMO;

  return (
    <Section
      titleText={title}
      isMainSection
      sectionClassNameFromChild="promo"
      titleClassNameFromChild={titleClassName}
      contentClassNameFromChild="promo__content"
    >
      <picture className="promo__picture-wrapper">
        <source srcSet={promoPictureWebp} />
        <img className="promo__picture" src={promoPicturePng} alt={pictureAltText} />
      </picture>
      <p className="promo__subtitle">{subtitle}</p>
      <CustomButton className="button promo__button" isClassicStyle>
        {buttonText}
      </CustomButton>
    </Section>
  );
}

export default Promo;
