import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SingleProductBlock from '../components/SingleProductBlock/SingleProductBlock';
import SingleProductInfoTabs from '../components/SingleProductInfoTabs/SingleProductInfoTabs';
import SimilarProductsSlider from '../containers/SimilarProductsSlider/SimilarProductsSlider';

const SingleProduct = () => (
  <div>
    <Breadcrumbs />
    <h1>Single product page</h1>
    <SingleProductBlock />
    <SingleProductInfoTabs />
    <SimilarProductsSlider />
  </div>
);

export default SingleProduct;
