/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Stories.module.scss';
// import styles from './DescribeSection.module.scss';
// import { FaBeer } from 'react-icons/fa';

const DescribeSection = () => {
    const [readMore, setReadMore] = useState(false);
    return (
      <div className={styles.Wrapper}>
        <div className="container">
          <div className={styles.DescribeSection}>
            <article>
              <div className={styles.DescribeSectionTitle}>
                <h2>Фотоаппарат - яркие кадры жизни</h2>
              </div>
              <div className={styles.DescribeSectionText}>
                <p>
                  Вас интересуют цифровые фотоаппараты? Вы не знаете, как выбрать цифровой фото
                  аппарат? Вы ищете в своем городе цифровые фотоаппараты(в Одессе, Харькове, вся
                  Украина.)? Если «да», то вы попали в самое подходящее место. Компания «АВС Фото»
                  поможет вам выбрать и купить цифровой фотоаппарат в Киеве, Одессе и других
                  городах Украины.
                  <br />
                </p>
                <p hidden={!readMore}>
                  Следует заметить, что далеко не все знают, как выбрать цифровой фотоаппарат.
                  А между тем цифровые фотокамеры предлагаются широким спектром.
                  Вы можете выбрать недорогие цифровые фотоапараты, либо же дорогостоящие «зеркалки».
                  Однако не следует отталкиваться от параметра цены, и рассуждать,
                  что чем дороже, тем лучше.
                  Выбор цифрового фотоаппарата – процесс индивидуальный, и почти что «интимный».
                </p>
                
              </div>
              <div
                className={!readMore ? styles.DescribeSectionReadMore : styles.DescribeSectionReadMoreHide}
                type="button"
                onClick={() => { setReadMore(true); }}
              >
                <p>
                  Читать полностью
                </p>
                <MdKeyboardArrowDown style={{color: '00A1E9', cursor: 'pointer'}} />
              </div>
            </article>
          </div>
        </div>
      </div>
    );
};

export default DescribeSection;