/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState, useEffect, useCallback} from 'react';
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
  const autocompleteData = useSelector((state) => state.searchProducts.autocompleteData);

  const [state, setState] = useState([]);

  const handleChange = (e) => {
    const newArr = autocompleteData.filter((item) => item.includes(searchValue));
    setState(newArr);
    dispatch(setSearchValueAction(e.target.value));
  };

  const handleClickAutocomplete = (item) => {
    let searchValueRu = '';
    if (item === 'фотоаппараты') {
      searchValueRu = 'photocameras';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else if (item === 'видеокамеры') {
      searchValueRu = 'videocameras';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else if (item === 'экшнкамеры') {
      searchValueRu = 'actioncameras';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else if (item === 'объективы') {
      searchValueRu = 'lenses';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else {
      dispatch(clearSearchProductsAction());
      dispatch(setSearchValueForUSerAction(item));
      dispatch(getSearchProductsAction(item));
      dispatch(clearSearchValueAction());
    }
  };

  const handleClick = () => {
    let searchValueRu = '';
    if (searchValue === 'фотоаппараты') {
      searchValueRu = 'photocameras';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else if (searchValue === 'видеокамеры') {
      searchValueRu = 'videocameras';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else if (searchValue === 'экшнкамеры') {
      searchValueRu = 'actioncameras';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else if (searchValue === 'объективы') {
      searchValueRu = 'lenses';
      dispatch(clearSearchProductsAction());
      dispatch(getSearchProductsAction(searchValueRu));
      dispatch(clearSearchValueAction());
    } else {
      dispatch(clearSearchProductsAction());
      dispatch(setSearchValueForUSerAction(searchValue));
      dispatch(getSearchProductsAction(searchValue));
      dispatch(clearSearchValueAction());
    }
  };

  return (
    <div className={styles.searchFormWrapper}>
      <form className={styles.searchForm} onSubmit={handleClick}>
        <input
          value={searchValue}
          type="text"
          className={styles.searchInput}
          placeholder="Search text"
          onChange={(e) => handleChange(e)}
        />
        {searchValue && (
        <ul className={styles.Autocomplete}>
          {state.map((item) => (
            <Link to="/search-products">
              <li
                className={styles.AutocompleteItem}
                onClick={() => handleClickAutocomplete(item)}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
)}
     
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
                type="submit"
                onClick={(e) => handleClick(e)}
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
