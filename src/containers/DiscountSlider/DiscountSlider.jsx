// import React from 'react';
// import styles from './DiscountSlider.module.scss';

// const DiscountSlider = () => (
//   <div className="container">
//     <div className={styles.DiscountSlider}>
//       <h1>Discount Slider</h1>
//     </div>
//   </div>
// );

// export default DiscountSlider;
import React from 'react';
import SwiperCarousel from './SwiperCarousel/SwiperCarousel';
import styles from './DiscountSlider.module.scss';
import img1 from '../../assets/img/discountSliderComponent/img1.png';
import img2 from '../../assets/img/discountSliderComponent/img2.png';
import img3 from '../../assets/img/discountSliderComponent/img3.png';
import img4 from '../../assets/img/discountSliderComponent/img4.png';
import img5 from '../../assets/img/discountSliderComponent/img5.png';

const DiscountSlider = () => (
  <div className={styles.Sale}>
    <div className={styles.slider}>
      <SwiperCarousel />
    </div>
    <div className={styles.img1}>
      <img src={img1} alt={img1} />
    </div>
    <div className={styles.img2}>
      <img src={img2} alt={img1} />
    </div>
    <div className={styles.img3}>
      <img src={img3} alt={img1} />
    </div>
    <div className={styles.img4}>
      <img src={img4} alt={img1} />
    </div>
    <div className={styles.img5}>
      <img src={img5} alt={img1} />
    </div>
  </div>
        
    );

export default DiscountSlider;
