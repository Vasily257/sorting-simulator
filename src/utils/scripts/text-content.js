// HTML mnemonics to Unicode Characters
// &nbsp; — \u00A0
// &laquo; — \u00AB
// &raquo; — \u00BB

const TEXT_CONTENT = {
  PROMO: {
    title: 'Вторсырьё на\u00A0благотворительность',
    pictureAltText: 'Логотип движения \u00ABВторсырьё на\u00A0благотворительность\u00BB',
    subtitle:
      'Страница движения \u00ABВнБ Самара\u00BB, где можно подробнее узнать про движение, а\u00A0также найти полезную информацию по\u00A0раздельному сбору отходов.',
    buttonText: 'Узнать больше',
  },

  ABOUT: {
    title: 'О\u00A0проекте',
    items: [
      { id: 0, subtitle: 'Что за\u00A0проект', description: 'Hекоммерческий волонтерский проект.' },
      {
        id: 1,
        subtitle: 'Зачем нужен проект',
        description:
          'Распространять культуру раздельного сбора отходов и\u00A0финансировать благотворительные организации.',
      },
      {
        id: 2,
        subtitle: 'Кто участвует в проекте',
        description:
          'Жители Самарской области, которые могут прийти на\u00A0акцию и\u00A0сдать отсортированные отходы.',
      },
    ],
  },

  HISTORY: {
    title: 'История',
    yearFacts: [
      {
        id: 0,
        year: '2017',
        facts: [
          { factId: 0, fact: 'Событие 1' },
          { factId: 1, fact: 'Событие 2' },
          { factId: 2, fact: 'Событие 3' },
          { factId: 3, fact: 'Событие 4' },
          { factId: 4, fact: 'Событие 5' },
        ],
      },
      {
        id: 1,
        year: '2018',
        facts: [
          { factId: 0, fact: 'Событие 6' },
          { factId: 1, fact: 'Событие 7' },
          { factId: 2, fact: 'Событие 8' },
          { factId: 3, fact: 'Событие 9' },
          { factId: 4, fact: 'Событие 10' },
        ],
      },
      {
        id: 2,
        year: '2019',
        facts: [
          { factId: 0, fact: 'Событие 11' },
          { factId: 1, fact: 'Событие 12' },
          { factId: 2, fact: 'Событие 13' },
          { factId: 3, fact: 'Событие 14' },
          { factId: 4, fact: 'Событие 15' },
        ],
      },
      {
        id: 3,
        year: '2020',
        facts: [
          { factId: 0, fact: 'Событие 16' },
          { factId: 1, fact: 'Событие 17' },
          { factId: 2, fact: 'Событие 18' },
          { factId: 3, fact: 'Событие 19' },
          { factId: 4, fact: 'Событие 20' },
        ],
      },
      {
        id: 4,
        year: '2021',
        facts: [
          { factId: 0, fact: 'Событие 21' },
          { factId: 1, fact: 'Событие 22' },
          { factId: 2, fact: 'Событие 23' },
          { factId: 3, fact: 'Событие 24' },
          { factId: 4, fact: 'Событие 25' },
        ],
      },
      {
        id: 5,
        year: '2022',
        facts: [
          { factId: 0, fact: 'Событие 26' },
          { factId: 1, fact: 'Событие 27' },
          { factId: 2, fact: 'Событие 28' },
          { factId: 3, fact: 'Событие 29' },
          { factId: 4, fact: 'Событие 30' },
        ],
      },
    ],
  },
};

export default TEXT_CONTENT;
