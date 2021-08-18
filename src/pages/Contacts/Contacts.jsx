import React from 'react';
import { FiMail } from 'react-icons/fi';
import { MdPhoneIphone } from 'react-icons/md';
import Breadcrumbs from '../../containers/Breadcrumbs/Breadcrumbs';
import styles from './Contacts.module.scss';

const Contacts = () => {
  const array = [['/', 'Главная'], ['contacts', 'Контакты']];
  return (
    <div className={styles.ContactsWrapper}>
      <div className="container">
        <Breadcrumbs data={array} />
        <h2>Контакты</h2>
        <ul className={styles.ContactsList}>
          <li>
            <MdPhoneIphone style={{color: '#51ad33'}} />
            <a href="tel:0445005050">044 500 50 50</a>
          </li>
          <li>
            <MdPhoneIphone style={{color: '#51ad33'}} />
            <a href="tel:0975005050">097 500 50 50</a>
          </li>
          <li>
            <FiMail style={{color: '#51ad33'}} />
            <a href="mailto:info@abcphoto.com.ua">info@abcphoto.com.ua</a>
          </li>
        </ul>
        <p className={styles.ContactsText}>
          Компания «abcphoto» старается делать все возможное,
          чтобы приобретение товаров через наш интернет-магазин
          было максимально удобным и легким для всех наших покупателей и клиентов.
          Мы постоянно стараемся улучшать качество обслуживания,
          и потому будем благодарны за любые замечания, пожелания или рекомендации
          по работе нашего предприятия, которые помогут нам устранить возможные недоработки.
        </p>
      </div>
    </div>
    
  );
};

export default Contacts;
