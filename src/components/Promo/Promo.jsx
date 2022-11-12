import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import promoPictureWebp from '../../images/promo/promo-image.webp';
import promoPictureJpg from '../../images/promo/promo-image.jpg';

import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Вторсырьё на&nbsp;благотворительность</h1>
      <picture className="promo__picture-wrapper">
        <source srcSet={promoPictureWebp} />
        <img
          className="promo__picture"
          src={promoPictureJpg}
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
    </section>
  );
}

export default Promo;
