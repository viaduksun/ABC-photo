// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */
// import classNames from 'classnames';
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { BsChevronDown } from 'react-icons/bs';
// import styles from './SingleProductInfoTabs.module.scss';

// const Desctiption = ({singleProduct}) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const expandToggle = () => {
//     setIsExpanded(!isExpanded);
//   };
//   const readMoreIcon = classNames({
//     [styles.readMoreIcon]: true,
//     [styles.readMoreIcon_active]: isExpanded,
//   });
//   return (
//     <>
//       <div className={styles.descriptionWrapper}>
//         <div className={styles.textBlock}>
//           <div className={styles.descriptionTitle}>
//             Качество, которого заслуживают ваши фотографии
//           </div>
//           <div className={styles.descriptionBody}>
// eslint-disable-next-line max-len
//             {singleProduct.description ? `${singleProduct.description.split(' ').slice(0, 50).join(' ')}...` : null}
//           </div>
//           <div className={styles.readMore} onClick={expandToggle}>
//             {isExpanded ? (
//               <p>Скрыть дополнительное описание</p>
//             ) : (
//               <p>Читать больше</p>
//             )}
//             <BsChevronDown className={readMoreIcon} />
//           </div>
//         </div>
//         <div className={styles.descriptionImg}>
//           <img src="./img/temp_img/description_01.png" alt="description" />
//         </div>
//       </div>
//       {isExpanded && (
//         <div className={styles.descriptionWrapper2}>
//           <div className={styles.textBlock}>
//             <div className={styles.descriptionTitle}>
//               НАСТРОЙКА КОМПОНЕНТОВ УПРАВЛЕНИЯ
//             </div>
//             <div className={styles.descriptionBody}>
// eslint-disable-next-line max-len
//               {singleProduct.description ? singleProduct.description.split(' ').slice(50, 150).join(' ') : null}
//             </div>
//           </div>
//           <div className={styles.descriptionImg}>
//             <img src="./img/temp_img/description_02.png" alt="description" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// Desctiption.propTypes = {
//   singleProduct: PropTypes.objectOf
// };
// Desctiption.defaultProps = {
//   singleProduct: 'description'
// };

// export default Desctiption;
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
// import { BsChevronDown } from 'react-icons/bs';
import styles from './SingleProductInfoTabs.module.scss';

const Desctiption = ({singleProduct}) =>
  // const [isExpanded, setIsExpanded] = useState(false);
  // const expandToggle = () => {
  //   setIsExpanded(!isExpanded);
  // };
  // const readMoreIcon = classNames({
  //   [styles.readMoreIcon]: true,
  //   [styles.readMoreIcon_active]: isExpanded,
  // });
   // eslint-disable-next-line implicit-arrow-linebreak
   (
     <>
       <div className={styles.descriptionWrapper}>
         <div className={styles.textBlock}>
           <div className={styles.descriptionBody}>
             {singleProduct.description}
           </div>
         </div>
       </div>
     </>
  );
Desctiption.propTypes = {
  singleProduct: PropTypes.objectOf
};
Desctiption.defaultProps = {
  singleProduct: 'description'
};

export default Desctiption;
