/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductsField.module.scss';
import ProductsSorting from '../ProductsSorting/ProductsSorting';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import getProducts from '../../api/getProducts';
import Loader from '../UI/Loader/Loader';

const ProductsField = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getProducts().then((productsDB) => {
  //     setProducts(productsDB.data);
  //   });
  // }, []);

  const products = useSelector((state) => state.products);
  console.log(products);

  return (
    <div className={styles.ProductsField}>
      
      <ProductsSorting />
      <h1>ProductsField</h1>
      {products.length === 0 ? <Loader /> : (
        <div className={styles.ProductsFieldGrid}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
        ))}
        </div>
)}
      
      <Pagination />
    </div>
  );
};

export default ProductsField;
