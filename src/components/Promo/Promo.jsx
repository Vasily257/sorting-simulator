import React from 'react';

import useScreenView from '../../hooks/useScreenView';

import Section from '../Section/Section';
import CustomButton from '../CustomButton/CustomButton';

import promoPictureWebp from '../../images/promo/promo-picture.webp';
import promoPicturePng from '../../images/promo/promo-picture.png';

import './Promo.css';

function Promo() {
  const { isTablet } = useScreenView();
  return (
    <Section classNameFromChild="promo">
      <h1 className={`promo__title ${!isTablet ? 'visually-hidden' : ''}`}>
        Вторсырьё на&nbsp;благотворительность
      </h1>
      <picture className="promo__picture-wrapper">
        <source srcSet={promoPictureWebp} />
        <img
          className="promo__picture"
          src={promoPicturePng}
          alt="Логотип движения Вторсырьё на благотворительность"
        />
      </picture>
      <p className="promo__subtitle">
        Страница движения &laquo;ВнБ Самара&raquo;, где можно подробнее узнать про движение,
        а&nbsp;также найти полезную информацию по&nbsp;раздельному сбору отходов.
      </p>
      <CustomButton className="button promo__button" isClassicStyle>
        Узнать больше
      </CustomButton>
    </Section>
  );
}

export default Promo;
