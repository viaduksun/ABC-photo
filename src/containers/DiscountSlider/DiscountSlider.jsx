import React from 'react';
import SwiperCarousel from './SwiperCarousel/SwiperCarousel';
import styles from './DiscountSlider.module.scss';
import item2 from '../../assets/img/discountSliderComponent/img1.png';
import item3 from '../../assets/img/discountSliderComponent/img2.png';
import item4 from '../../assets/img/discountSliderComponent/img3.png';
import item5 from '../../assets/img/discountSliderComponent/img4.png';
import item6 from '../../assets/img/discountSliderComponent/img5.png';

const DiscountSlider = () => (
  <div className={styles.Sale}>
    <div className={styles.SaleContainer}>
      <h2 className={styles.SaleTitle}>АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</h2>
      <div className={styles.SaleSlider}>
        <div className={styles.Item1Slider}>
          <SwiperCarousel />
        </div>
        <div className={styles.Item2}>
          <div className={styles.Item2Content}>
            <p className={styles.Item2ContentDiscount}>Скидка 10%</p>
            <p className={styles.Item2ContentPrice}>
              1120
              <span> грн</span>
            </p>
            <p className={styles.Item2ContentTitle}>Benro DJ-80</p>
          </div>
          <div className={styles.Item2Block}>
            <img src={item2} alt={item2} />
          </div>
        </div>
        <div className={styles.Item3}>
          <div>
            <img src={item3} alt={item3} />
          </div>
          <div>
            <p className={styles.Item3Discount}>-10%</p>
            <p className={styles.Item3Title}>BENRO</p>
          </div>
        </div>
        <div className={styles.Item4}>
          <div>
            <img src={item4} alt={item4} />
          </div>
          <div>
            <p className={styles.Item4Title}>СУПЕРЦЕНА</p>
            <p className={styles.Item4Price}>
              5684
              <span>грн</span>
            </p>
          </div>
        </div>
        <div className={styles.Item5}>
          <div>
            <p className={styles.Item5Title}>
              <span>Объектив</span>
              <br />
              Nikon 50mmf
              <br />
              1.8G AF-S
            </p>
            <p className={styles.Item5Discount}>
              4982
              <span> грн</span>
            </p>
            <p className={styles.Item5Price}>
              4758
              <span> грн</span>
            </p>
          </div>
          <div>
            <img src={item5} alt={item5} />
          </div>
        </div>
        <div className={styles.Item6}>
          <div>
            <p className={styles.Item6Title}>
              <span>Фотобумага</span>
              <br />
              Canon KP-108IN
            </p>
            <p className={styles.Item6Discount}>
              1028
              <span> грн</span>
            </p>
            <p className={styles.Item6Price}>
              908
              <span> грн</span>
            </p>
          </div>
          <div>
            <img src={item6} alt={item6} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DiscountSlider;
