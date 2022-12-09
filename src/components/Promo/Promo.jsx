import React from 'react';
import usePromo from '../../hooks/for-components/usePromo';
import Section from '../Section/Section';
import CustomButton from '../CustomButton/CustomButton';
import TEXT_CONTENT from '../../utils/scripts/text-content';
import promoPictureWebp from '../../images/promo/promo-picture.webp';
import promoPicturePng from '../../images/promo/promo-picture.png';

import './Promo.css';

function Promo() {
  const { getPromoClassNames } = usePromo();
  const {
    main, titleClassName, content, pictureWrapper, picture, subtitle, button,
  } = getPromoClassNames();

  const {
    titleText, subtitleText, pictureAltText, buttonText,
  } = TEXT_CONTENT.PROMO;

  return (
    <Section
      titleText={titleText}
      isMainSection
      sectionClassNameFromChild={main}
      titleClassNameFromChild={titleClassName}
      contentClassNameFromChild={content}
    >
      <picture className={pictureWrapper}>
        <source srcSet={promoPictureWebp} />
        <img className={picture} src={promoPicturePng} alt={pictureAltText} />
      </picture>
      <p className={subtitle}>{subtitleText}</p>
      <CustomButton className={button} isClassicStyle>
        {buttonText}
      </CustomButton>
    </Section>
  );
}

export default Promo;
