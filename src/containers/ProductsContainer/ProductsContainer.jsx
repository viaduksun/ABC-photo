/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { IoMdOptions } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductsContainer.module.scss';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import ProductsField from '../../components/ProductsField/ProductsField';
import { axiosProducts } from '../../store/products/actions';
import Loader from '../../components/UI/Loader/Loader';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.productsPage.products);
  console.log(products);
  const isLoadingProducts = useSelector((state) => state.productsPage.isLoadingProducts);

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    console.log('Close');
    document.body.classList.toggle('no-scroll');
    setIsActive(!isActive);
  };
  const filtersMobile = classNames({
    [styles.filtersContainerMobile]: true,
    [styles.filtersContainerMobile_active]: isActive,
  });
  const filtersOverLay = classNames({
    [styles.filtersOverlay]: true,
    [styles.filtersOverlay_active]: isActive,
  });
  const showFiltersBtn = classNames({
    [styles.showFiltersBtn]: true,
    [styles.showFiltersBtn_hidden]: isActive,
  });
  return (
    <div className={styles.ProductsBlock}>
      <div className="container">
        <div className={styles.ProductsContainer}>
          <div className={showFiltersBtn} onClick={handleClick}>
            <IoMdOptions />
          </div>
          <div className={styles.filterContainer}>
            <ProductsFilter />
          </div>
          {(products.length === 0
            ? <div className={styles.PrductsFieldLoader}><Loader /></div>
            : (!isLoadingProducts && <ProductsField products={products} />))}
        </div>
      </div>

      <div className={filtersOverLay} onClick={handleClick}></div>
      <div className={filtersMobile}>
        <div className={styles.filtersCloseBtn} onClick={handleClick}>
          <VscChromeClose />
        </div>
        <ProductsFilter />
      </div>
    </div>

  );
};

export default ProductsContainer;
