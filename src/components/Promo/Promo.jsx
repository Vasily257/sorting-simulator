import React from 'react';
import usePromo from '../../hooks/usePromo';
import Section from '../Section/Section';
import CustomButton from '../CustomButton/CustomButton';
import styles from './Promo.module.css';
import TEXT_CONTENT from '../../utils/scripts/text-content';
import promoPictureWebp from '../../images/promo/promo-picture.webp';
import promoPicturePng from '../../images/promo/promo-picture.png';

function Promo() {
  const { getComplexClassNames } = usePromo({ styles });
  const { titleClassName } = getComplexClassNames();
  const {
    content, pictureWrapper, picture, subtitle, button,
  } = styles;

  const {
    titleText, subtitleText, pictureAltText, buttonText,
  } = TEXT_CONTENT.PROMO;

  return (
    <Section isMainSection>
      <div className={content}>
        <h1 className={titleClassName}>{titleText}</h1>
        <picture className={pictureWrapper}>
          <source srcSet={promoPictureWebp} />
          <img className={picture} src={promoPicturePng} alt={pictureAltText} />
        </picture>
        <p className={subtitle}>{subtitleText}</p>
        <CustomButton className={button} isClassicStyle>
          {buttonText}
        </CustomButton>
      </div>
    </Section>
  );
}

export default Promo;
