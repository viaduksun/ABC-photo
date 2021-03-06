/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { paginateAction } from '../../store/searchProducts/actions';
import styles from './PaginationSearchProducts.module.scss';

const PaginationSearchProducts = ({
productsPerPage, totalProducts, currentPage, scrollToTop
}) => {
    const dispatch = useDispatch();
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const handlePaginate = (pageNumber) => {
      dispatch(paginateAction(pageNumber));
      scrollToTop();
    };
    const handlePaginateRight = () => {
      if (currentPage <= pageNumbers.length - 1) {
        dispatch(paginateAction(currentPage + 1));
        scrollToTop();
      }
    };
    const handlePaginateLeft = () => {
      if (currentPage > 1) {
        dispatch(paginateAction(currentPage - 1));
        scrollToTop();
      }
    };
    return (
      <div className={styles.Pagination}>
        <FaChevronLeft
          className={styles.ButtonPrev}
          onClick={handlePaginateLeft}
        />
        {pageNumbers.map((pageNumber) => (
          <div
            className={classNames({
            [styles.PaginationItem]: true,
            [styles.PaginationItem_active]: currentPage === pageNumber,
          })}
            key={pageNumber}
            onClick={() => handlePaginate(pageNumber)}
          >
            {pageNumber}
          </div>
      ))}
        <FaChevronRight
          className={styles.ButtonNext}
          onClick={handlePaginateRight}
        />
      </div>
    );
};

PaginationSearchProducts.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  productsPerPage: PropTypes.number,
  totalProducts: PropTypes.number,
  currentPage: PropTypes.number,
};

PaginationSearchProducts.defaultProps = {
  productsPerPage: 1,
  totalProducts: 1,
  currentPage: 1
};

export default PaginationSearchProducts;