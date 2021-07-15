import { Link } from 'react-router-dom';
import React from 'react';
import { FiChevronDown, FiChevronUp} from 'react-icons/fi';
import styles from './SingleProductBlock.module.scss';
import fotoSliderProduct1 from './sliderImage/fotoSliderProduct1.png';
import fotoSliderProduct2 from './sliderImage/fotoSliderProduct2.png';
import fotoSliderProduct3 from './sliderImage/fotoSliderProduct3.png';
import bigFotoSliderProduct from './sliderImage/bigFotoSliderProduct.png';
import carriage from './sliderImage/carriage.png';
import Vector from './sliderImage/Vector.png';

const SliderSelectProduct = () => (
  <>
    <div className="container">
    
      <div className={styles.SliderSelectProductTitle}>
        <h1>Canon 4000D Kit 18-55 DC III</h1>
        <div className={styles.codeProduct}>
          <p className={styles.SliderSelectProductText}> Код товара : С000008595 </p>
        </div>
      </div>
    
      <div className={styles.SliderSelectProductWrapper}>

        <sectionSlider className={styles.sectionSlider}>
          <div className={styles.slideShowContainer}>
            <div className={styles.mySlides}>
              <img src={fotoSliderProduct1} alt="" />
            </div>
            <div className={styles.mySlides}>
              <img src={fotoSliderProduct2} alt="" />
            </div>
            <div className={styles.mySlides}>
              <img src={fotoSliderProduct3} alt="" />
            </div>
            <div className={styles.sectionSliderButton}>
              <button type="button" className={styles.prev} onClick="plusSlides(-1)">
                <FiChevronDown className={styles.prevChevron} />
              </button>
              <button type="button" className={styles.next} onClick="plusSlides(+1)">
                <FiChevronUp className={styles.nextChevron} />
              </button>
            </div>
          </div>
          <div className={styles.mySlidesBig}>
            <img src={bigFotoSliderProduct} alt="" />
         
          </div>
        </sectionSlider>

        <sectionButton>
          <div className={styles.sectionButtonTitle}>
            <h3>в наличии</h3>
            <span className={styles.sectionButtonSpan}>21 473 грн</span>
          </div>
          <div className={styles.sectionButton}>
            <div>
              <Link to="/cart">
                <button type="button" className={styles.sectionButtonBuy}>
                  Купить
                  <img src={carriage} alt="" />
                </button>
              </Link>
              <h2>ДОСТАВКА</h2>
              <div className={styles.sectionButtonUl}>
                <ul>
                  <li>Доставка по всей Украине</li>
                  <li>Оплата товара при получении</li>
                  <li>Возможен самовывоз</li>
                </ul>
              </div>
            </div>
            <div>
              <button type="button" className={styles.sectionButtonCredit}>Купить в кредит</button>
              <h2>ГАРАНТИЯ</h2>
              <div className={styles.sectionButtonCreditText}>
                <p> Официальная 24 месяца от производителя</p>
                {/* <p>от производителя</p> */}
              </div>
              <a href="//#region " className={styles.sectionButtonCreditLink}>Условия доставки и оплаты</a>
              <img src={Vector} alt="" />
            </div>
          </div>
        </sectionButton>
      </div>
    </div>
  </>
);
export default SliderSelectProduct;
