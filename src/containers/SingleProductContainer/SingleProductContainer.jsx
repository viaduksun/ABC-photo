/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import SingleProductBlock from '../../components/SingleProductBlock/SingleProductBlock';
import SingleProductInfoTabs from '../../components/SingleProductInfoTabs/SingleProductInfoTabs';

const SingleProductContainer = () => {
    const singleProduct = useSelector((state) => state.singleProduct.singleProduct);
    return (
      <div className="container">
        {Object.keys(singleProduct).length !== 0 && <SingleProductBlock singleProduct={singleProduct} />}
        {Object.keys(singleProduct).length !== 0 && <SingleProductInfoTabs singleProduct={singleProduct} />}
      </div>
    );
};

export default SingleProductContainer;