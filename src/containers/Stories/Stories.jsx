/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Stories.module.scss';
// import styles from './DescribeSection.module.scss';
// import { FaBeer } from 'react-icons/fa';

const DescribeSection = ({historyData}) => {
    const [readMore, setReadMore] = useState(false);
    return (
      <div className={styles.Wrapper}>
        <div className="container">
          <div className={styles.DescribeSection}>
            <article>
              <div className={styles.DescribeSectionTitle}>
                <h2>{historyData.title}</h2>
              </div>
              <div className={styles.DescribeSectionText}>
                <p>
                  {historyData.text1}
                  <br />
                </p>
                <p hidden={!readMore}>
                  {historyData.text2}
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