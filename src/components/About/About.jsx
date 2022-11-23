import React from 'react';

import Section from '../Section/Section';

import SectionTitle from '../SectionTitle/SectionTitle';

import './About.css';

function About() {
  return (
    <Section classNameFromChild="about">
      <SectionTitle classNameFromParent="about__title" text="О проекте" />
      <ul className="about__list">
        <li className="about__item">
          <h3 className="about__subtitle">Что за проект</h3>
          <p className="about__description">Hекоммерческий волонтерский проект.</p>
        </li>
        <li className="about__item">
          <h3 className="about__subtitle">Зачем нужен проект</h3>
          <p className="about__description">
            Распространять культуру раздельного сбора отходов и&nbsp;финансировать благотворительные
            организации.
          </p>
        </li>
        <li className="about__item">
          <h3 className="about__subtitle">Кто участвует в проекте</h3>
          <p className="about__description">
            Жители Самарской области, которые могут прийти на&nbsp;акцию и&nbsp;сдать
            отсортированные отходы.
          </p>
        </li>
      </ul>
    </Section>
  );
}

export default About;
