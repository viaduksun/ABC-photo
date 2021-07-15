import React from 'react';
import { useSelector } from 'react-redux';
import SingleProductBlock from '../../components/SingleProductBlock/SingleProductBlock';
import SingleProductInfoTabs from '../../components/SingleProductInfoTabs/SingleProductInfoTabs';

const SingleProductContainer = () => {
    console.log('test');
    const singleProduct = useSelector((state) => state.singleProduct.singleProduct);
    return (
      <div className="container">
        <SingleProductBlock singleProduct={singleProduct} />
        <SingleProductInfoTabs singleProduct={singleProduct} />
      </div>
    );
};

export default SingleProductContainer;