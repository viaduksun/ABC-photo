/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './SearchProductsField.module.scss';
import SearchProductsSorting from '../SearchProductsSorting/SearchProductsSorting';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardLine from '../ProductCardLine/ProductCardLine';
import { showGridSearchProductsAction } from '../../store/searchProducts/actions';

const SearchProductsField = ({ searchProducts }) => {
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const allProducts = useSelector(
    (state) => state.productsPage.allProductsForPagination.length
  );
  const showGrid = useSelector((state) => state.searchProducts.showGrid);
  const dispatch = useDispatch();
  const handlerSwitch = () => {
    dispatch(showGridSearchProductsAction());
  };
  return (
    <div className={styles.ProductsField}>
      <SearchProductsSorting
        currentPage={currentPage}
        allProducts={allProducts}
        handlerSwitch={handlerSwitch}
      />
      <div className={styles.ProductsFieldGridWrapp}>
        {showGrid ? (
          <div className={styles.ProductsFieldGrid}>
            {searchProducts.map((product) => (
              <ProductCard product={product} key={product._id} dragable={false} />
          ))}
          </div>
          ) : (
            <div className={styles.ProductsFieldLine}>
              {searchProducts.map((product) => (
                <ProductCardLine product={product} key={product._id} />
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

SearchProductsField.propTypes = {
  // eslint-disable-next-line react/require-default-props
  searchProducts: PropTypes.arrayOf(PropTypes.any),
};
SearchProductsField.defaultProps = {
  searchProducts: []
};

export default SearchProductsField;
