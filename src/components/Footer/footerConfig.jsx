const footerConfig = [
  {
    title: 'Информация',
    id: 1,
    links: [
      { to: '/about', text: 'О Компании' },
      { to: '/maps', text: 'Карта Сайта' },
      { to: '/public', text: 'Публичная Оферта' },
    ],
  },
  {
    title: 'Покупателям',
    id: 2,
    links: [
      { to: '/credit', text: 'Кредит' },
      { to: '/delivery', text: 'Доставка И Оплата' },
      { to: '/guaranty', text: 'Сервис И Гарантия' },
        
    ],
  },
  {
    title: 'Связаться с нами',
    id: 3,
    links: [
      // { to: '/catalog?brand=AOC', text: 'Контакты' },
      { to: '/contacts', text: 'Контакты' },
      { to: '/shops', text: 'Магазины' },
        
    ],
  },
];
  
export default footerConfig;