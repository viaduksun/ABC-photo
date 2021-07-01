/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React, { useState } from 'react';

import { BsChevronDown } from 'react-icons/bs';
import styles from './SingleProductInfoTabs.module.scss';

const Desctiption = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const readMoreIcon = classNames({
    [styles.readMoreIcon]: true,
    [styles.readMoreIcon_active]: isExpanded,
  });
  return (
    <>
      <div className={styles.descriptionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.descriptionTitle}>
            Качество, которого заслуживают ваши фотографии
          </div>
          <div className={styles.descriptionBody}>
            24,2-мегапиксельный датчик изображения формата APS-C нового
            поколения обеспечивает потрясающую детализацию даже в сложных
            условиях съемки. Камера EOS 800D мгновенно срабатывает, оснащена
            ярким оптическим видоискателем и позволяет вести непрерывную съемку
            со скоростью 6 кадров в секунду. При построении кадра на экране с
            переменным углом наклона, самая быстрая в мире система АФ в режиме
            Live View выполняет точную фокусировку всего лишь за 0,03 с.
          </div>
          <div className={styles.readMore} onClick={expandToggle}>
            {isExpanded ? (
              <p>Скрыть дополнительное описание</p>
            ) : (
              <p>Читать больше</p>
            )}
            <BsChevronDown className={readMoreIcon} />
          </div>
        </div>
        <div className={styles.descriptionImg}>
          <img src="./img/temp_img/description_01.png" alt="description" />
        </div>
      </div>
      {isExpanded && (
        <div className={styles.descriptionWrapper2}>
          <div className={styles.textBlock}>
            <div className={styles.descriptionTitle}>
              НАСТРОЙКА КОМПОНЕНТОВ УПРАВЛЕНИЯ
            </div>
            <div className={styles.descriptionBody}>
              Жидкокристаллический дисплей камеры позволяет просматривать
              настройки и менять их в зависимости от условий съемки в любой
              момент. Важные параметры могут устанавливаться непосредственно во
              время фотосессии. Ничто не мешает фотографу самостоятельно
              приспосабливать орудие съемки к собственным потребностям.
            </div>
          </div>
          <div className={styles.descriptionImg}>
            <img src="./img/temp_img/description_02.png" alt="description" />
          </div>
        </div>
      )}
    </>
  );
};

export default Desctiption;
