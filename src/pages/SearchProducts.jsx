import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SearchProductsContainer from '../containers/SearchProductsContainer/SearchProductsContainer';

const SearchProducts = () => {
  const array = [['/', 'Главная'], ['products', 'Товары']];
  return (
    <>
      <Breadcrumbs data={array} />
      <SearchProductsContainer />
    </>
  );
};

export default SearchProducts;