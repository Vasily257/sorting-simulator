// HTML mnemonics to Unicode Characters
// &nbsp; — \u00A0
// &laquo; — \u00AB
// &raquo; — \u00BB

const TEXT_CONTENT = {
  PROMO: {
    TITLE: 'Вторсырьё на\u00A0благотворительность',
    PICTURE_ALT: 'Логотип движения \u00ABВторсырьё на\u00A0благотворительность\u00BB',
    SUBTITLE:
      'Страница движения \u00ABВнБ Самара\u00BB, где можно подробнее узнать про движение, а\u00A0также найти полезную информацию по\u00A0раздельному сбору отходов.',
    BUTTON: 'Узнать больше',
  },

  ABOUT: {
    TITLE: 'О\u00A0проекте',
    ITEMS: [
      { ID: 0, SUBTITLE: 'Что за\u00A0проект', DESCRIPTION: 'Hекоммерческий волонтерский проект.' },
      {
        ID: 1,
        SUBTITLE: 'Зачем нужен проект',
        DESCRIPTION:
          'Распространять культуру раздельного сбора отходов и\u00A0финансировать благотворительные организации.',
      },
      {
        ID: 2,
        SUBTITLE: 'Кто участвует в проекте',
        DESCRIPTION:
          'Жители Самарской области, которые могут прийти на\u00A0акцию и\u00A0сдать отсортированные отходы.',
      },
    ],
  },

  HISTORY: {
    TITLE: 'История',
    YEAR_FACTS: [
      {
        ID: 0,
        YEAR: '2017',
        FACTS: [
          { FACT_ID: 0, FACT: 'Событие 1' },
          { FACT_ID: 1, FACT: 'Событие 2' },
          { FACT_ID: 2, FACT: 'Событие 3' },
          { FACT_ID: 3, FACT: 'Событие 4' },
          { FACT_ID: 4, FACT: 'Событие 5' },
        ],
      },
      {
        ID: 1,
        YEAR: '2018',
        FACTS: [
          { FACT_ID: 0, FACT: 'Событие 6' },
          { FACT_ID: 1, FACT: 'Событие 7' },
          { FACT_ID: 2, FACT: 'Событие 8' },
          { FACT_ID: 3, FACT: 'Событие 9' },
          { FACT_ID: 4, FACT: 'Событие 10' },
        ],
      },
      {
        ID: 2,
        YEAR: '2019',
        FACTS: [
          { FACT_ID: 0, FACT: 'Событие 11' },
          { FACT_ID: 1, FACT: 'Событие 12' },
          { FACT_ID: 2, FACT: 'Событие 13' },
          { FACT_ID: 3, FACT: 'Событие 14' },
          { FACT_ID: 4, FACT: 'Событие 15' },
        ],
      },
      {
        ID: 3,
        YEAR: '2020',
        FACTS: [
          { FACT_ID: 0, FACT: 'Событие 16' },
          { FACT_ID: 1, FACT: 'Событие 17' },
          { FACT_ID: 2, FACT: 'Событие 18' },
          { FACT_ID: 3, FACT: 'Событие 19' },
          { FACT_ID: 4, FACT: 'Событие 20' },
        ],
      },
      {
        ID: 4,
        YEAR: '2021',
        FACTS: [
          { FACT_ID: 0, FACT: 'Событие 21' },
          { FACT_ID: 1, FACT: 'Событие 22' },
          { FACT_ID: 2, FACT: 'Событие 23' },
          { FACT_ID: 3, FACT: 'Событие 24' },
          { FACT_ID: 4, FACT: 'Событие 25' },
        ],
      },
      {
        ID: 5,
        YEAR: '2022',
        FACTS: [
          { FACT_ID: 0, FACT: 'Событие 26' },
          { FACT_ID: 1, FACT: 'Событие 27' },
          { FACT_ID: 2, FACT: 'Событие 28' },
          { FACT_ID: 3, FACT: 'Событие 29' },
          { FACT_ID: 4, FACT: 'Событие 30' },
        ],
      },
    ],
  },
};

export default TEXT_CONTENT;
