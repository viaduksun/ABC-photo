const footerConfig = [
  {
    title: 'Информация',
    id: 1,
    links: [
      { to: '/', text: 'О Компании' },
      { to: '/signup', text: 'Карта Сайта' },
      { to: '/signin', text: 'Публичная Оферта' },
    ],
  },
  {
    title: 'Покупателям',
    id: 2,
    links: [
      { to: '/catalog?categories=gamingMonitors', text: 'Кредит' },
      { to: '/catalog?categories=tablets', text: 'Доставка И Оплата' },
      { to: '/catalog?categories=laptops', text: 'Сервис И Гарантия' },
        
    ],
  },
  {
    title: 'Связаться с нами',
    id: 3,
    links: [
      { to: '/catalog?brand=AOC', text: 'Контакты' },
      { to: '/catalog?brand=MSI', text: 'Магазины' },
        
    ],
  },
];
  
export default footerConfig;