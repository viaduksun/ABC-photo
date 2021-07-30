/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { IoMdOptions } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './SearchProductsContainer.module.scss';
import PhotoCamerasFilter from '../../components/ProductsFilter/PhotoCamerasFilter';
import {
  getAllProductsCurrentCategoryAction,
  getFilteredProductsAction,
} from '../../store/products/actions';
import Loader from '../../components/UI/Loader/Loader';
import VideoCamerasFilter from '../../components/ProductsFilter/VideoCamerasFilter';
import ActionCamerasFilter from '../../components/ProductsFilter/ActionCamerasFilter';
import LensesFilter from '../../components/ProductsFilter/LensesFilter';
import SearchProductsFilter from '../../components/ProductsFilter/SearchProductsFilter';
import SearchProductsField from '../../components/SearchProductsField/SearchProductsField';
import PaginationSearchProducts from '../../components/PaginationSearchProducts/PaginationSearchProducts';

const SearchProductsContainer = () => {
  const searchProducts = useSelector((state) => state.searchProducts.searchProducts);
  const isLoadingSearchProducts = useSelector(
    (state) => state.searchProducts.isLoadingSearchProducts
  );
  const currentPage = useSelector((state) => state.searchProducts.currentPage);
  const searchProductsPerPage = useSelector((state) => state.searchProducts.searchProductsPerPage);

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
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

  const lastSearchProductsIndex = currentPage * searchProductsPerPage;
  const firstSearchProductsIndex = lastSearchProductsIndex - searchProductsPerPage;
  const currentSearchProducts = (
    searchProducts.slice(firstSearchProductsIndex, lastSearchProductsIndex)
  );

  const scrollToTopHandler = () => {
      window.scrollTo({
        behavior: 'smooth',
      top: 0,
      });
	};

  return (
    <div className={styles.ProductsBlock}>
      <div className="container">
        <div className={styles.ProductsContainer}>
          <div className={showFiltersBtn} onClick={handleClick}>
            <IoMdOptions />
          </div>
          <div className={styles.filterContainer}>
            <SearchProductsFilter />
          </div>
          {searchProducts.length === 0 ? (
            <div className={styles.PrductsFieldLoader}>
              <Loader />
            </div>
          ) : (
            !isLoadingSearchProducts && (
              <SearchProductsField
                searchProducts={currentSearchProducts}
              />
            )
          )}
        </div>
        <PaginationSearchProducts
          currentPage={currentPage}
          productsPerPage={searchProductsPerPage}
          totalProducts={searchProducts.length}
          scrollToTop={scrollToTopHandler}
        />
      </div>

      <div className={filtersOverLay} onClick={handleClick}></div>
      <div className={filtersMobile}>
        <div className={styles.filtersCloseBtn} onClick={handleClick}>
          <VscChromeClose />
        </div>
        <PhotoCamerasFilter />
      </div>
    
    </div>
  );
};

export default SearchProductsContainer;
