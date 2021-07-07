/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import getProducts from '../api/getProducts';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';
import Stories from '../containers/Stories/Stories';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products.data);
      setIsLoading(false);
    });
  }, []);

      console.log(products);
  return (
    <>
      <Breadcrumbs />
      {!isLoading && <ProductsContainer products={products} />}
      <Stories />
    </>
  );
};

export default Products;
