import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchForm.module.scss';

const SearchForm = () => (
  <div className={styles.searchFormWrapper}>
    <form className={styles.searchForm}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search text"
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon className={styles.searchIcon} />
      </button>
    </form>
  </div>
);

export default SearchForm;
