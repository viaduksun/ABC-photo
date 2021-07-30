import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { getSearchProductsAction, clearSearchProductsAction } from '../../../store/searchProducts/actions';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearSearchProductsAction());
    dispatch(getSearchProductsAction(value));
    setValue('');
  };
  
  return (
    <div className={styles.searchFormWrapper}>
      <form className={styles.searchForm}>
        <input
          value={value}
          type="text"
          className={styles.searchInput}
          placeholder="Search text"
          onChange={(e) => handleChange(e)}
        />
        {!value ? (
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
