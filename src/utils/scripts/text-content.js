// HTML mnemonics to Unicode Characters
// &nbsp; — \u00A0
// &laquo; — \u00AB
// &raquo; — \u00BB

const TEXT_CONTENT = {
  HEADER: {
    logoAlttext: 'Логотип сайта',
  },

  HEADER_NAVIGATION: {
    navbarItems: [
      { id: 0, text: 'Главная', path: '/' },
      { id: 1, text: 'Тренажёр', path: '/simulator' },
      { id: 2, text: 'Памятки', path: '/memos' },
      { id: 3, text: 'Справочник', path: '/catalog' },
    ],
    signbarItems: [
      {
        id: 0,
        text: 'Регистрация',
        type: 'register',
        path: '/signup',
      },
      {
        id: 1,
        text: 'Вход',
        type: 'login',
        path: '/signin',
      },
    ],
    profileButton: { text: 'Профиль', type: 'profile', path: '/profile' },
  },

  HEADER_MENU_BUTTON: { ariaLabelText: { close: 'Закрыть меню', open: 'Открыть меню' } },

  PROMO: {
    titleText: 'Вторсырьё на\u00A0благотворительность',
    pictureAltText: 'Логотип движения \u00ABВторсырьё на\u00A0благотворительность\u00BB',
    subtitleText:
      'Страница движения \u00ABВнБ Самара\u00BB, где можно подробнее узнать про движение, а\u00A0также найти полезную информацию по\u00A0раздельному сбору отходов.',
    buttonText: 'Узнать больше',
  },

  ABOUT: {
    titleText: 'О\u00A0проекте',
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
    titleText: 'История',
    factsAriaLabelText: 'События выбранного года:',
    yearFacts: [
      {
        id: 0,
        yearValue: '2017',
        facts: [
          { factId: 0, factText: 'Событие 1' },
          { factId: 1, factText: 'Событие 2' },
          { factId: 2, factText: 'Событие 3' },
          { factId: 3, factText: 'Событие 4' },
          { factId: 4, factText: 'Событие 5' },
        ],
      },
      {
        id: 1,
        yearValue: '2018',
        facts: [
          { factId: 0, factText: 'Событие 6' },
          { factId: 1, factText: 'Событие 7' },
          { factId: 2, factText: 'Событие 8' },
          { factId: 3, factText: 'Событие 9' },
          { factId: 4, factText: 'Событие 10' },
        ],
      },
      {
        id: 2,
        yearValue: '2019',
        facts: [
          { factId: 0, factText: 'Событие 11' },
          { factId: 1, factText: 'Событие 12' },
          { factId: 2, factText: 'Событие 13' },
          { factId: 3, factText: 'Событие 14' },
          { factId: 4, factText: 'Событие 15' },
        ],
      },
      {
        id: 3,
        yearValue: '2020',
        facts: [
          { factId: 0, factText: 'Событие 16' },
          { factId: 1, factText: 'Событие 17' },
          { factId: 2, factText: 'Событие 18' },
          { factId: 3, factText: 'Событие 19' },
          { factId: 4, factText: 'Событие 20' },
        ],
      },
      {
        id: 4,
        yearValue: '2021',
        facts: [
          { factId: 0, factText: 'Событие 21' },
          { factId: 1, factText: 'Событие 22' },
          { factId: 2, factText: 'Событие 23' },
          { factId: 3, factText: 'Событие 24' },
          { factId: 4, factText: 'Событие 25' },
        ],
      },
      {
        id: 5,
        yearValue: '2022',
        facts: [
          { factId: 0, factText: 'Событие 26' },
          { factId: 1, factText: 'Событие 27' },
          { factId: 2, factText: 'Событие 28' },
          { factId: 3, factText: 'Событие 29' },
          { factId: 4, factText: 'Событие 30' },
        ],
      },
    ],
  },
};

export default TEXT_CONTENT;
