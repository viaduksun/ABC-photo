import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import {
 getSearchProductsAction,
 clearSearchProductsAction,
 setSearchValueAction,
 clearSearchValueAction,
 setSearchValueForUSerAction
} from '../../../store/searchProducts/actions';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchProducts.searchValue);
  const handleChange = (e) => {
    dispatch(setSearchValueAction(e.target.value));
  };

  const handleClick = () => {
    dispatch(clearSearchProductsAction());
    dispatch(setSearchValueForUSerAction(searchValue));
    dispatch(getSearchProductsAction(searchValue));
    dispatch(clearSearchValueAction());
  };
  
  return (
    <div className={styles.searchFormWrapper}>
      <form className={styles.searchForm}>
        <input
          value={searchValue}
          type="text"
          className={styles.searchInput}
          placeholder="Search text"
          onChange={(e) => handleChange(e)}
        />
        {!searchValue ? (
          <button
            className={styles.searchButton}
            type="button"
          >
            <SearchIcon className={styles.searchIcon} />
          </button>
          ) : (
            <Link to="/search-products">
              <button
                className={styles.searchButton}
                type="button"
                onClick={handleClick}
              >
                <SearchIcon className={styles.searchIconActive} />
              </button>
            </Link>
          )}
      </form>
    </div>
  );
};

export default SearchForm;
