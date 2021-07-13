/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartContainer.module.scss';
import Button from '../../components/UI/Button/Button';
import CartProduct from '../../components/CartProduct/CartProduct';
import { setTotalCountCartAction, setTotalPriceCartAction } from '../../store/cart/actions';

const CartContainer = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalSumCart = useSelector((state) => state.cart.totalSumCart);
  const totalCountCart = useSelector((state) => state.cart.totalCountCart);
  const dispatch = useDispatch();
  let totalSum = 0;
  cart.forEach((item) => {
    totalSum += item.currentPrice * item.count;
  });
  useEffect(() => {
    dispatch(setTotalPriceCartAction(totalSum));
  }, [dispatch, totalSum]);
  let totalCount = 0;
  cart.forEach((item) => {
    totalCount += item.count;
  });
  useEffect(() => {
    dispatch(setTotalCountCartAction(totalCount));
  }, [dispatch, totalCount]);
  return (
    <div className={styles.CartBlock}>
      <div className="container">
        <h2 className={styles.Title}>Моя корзина</h2>
        {cart.length !== 0 ? (
          <div className={styles.Cart}>
            <ul className={styles.CartHeader}>
              <li>Товар</li>
              <li>Цена</li>
              <li>Количество</li>
              <li>Всего</li>
            </ul>
            <ul className={styles.CartMain}>
              {cart.map((cartProduct) => (
                <CartProduct
                  key={cartProduct._id}
                  cartProduct={cartProduct}
                />
              ))}
            </ul>
            <div className={styles.CartFooter}>
              <div>
                <Link to="/products">
                  <Button addClass="cart_grey">Продолжить покупки</Button>
                </Link>
              </div>
              <div className={styles.CartFooterRight}>
                <div className={styles.CartFooterRightText}>
                  Всего товаров:
                  <span>
                    {' '}
                    {totalCountCart}
                    {' '}
                    шт.
                  </span>
                  {' '}
                  на общую сумму
                </div>
                <div className={styles.CartFooterRightPrice}>
                  {totalSumCart}
                  <span> грн</span>
                </div>
                <Link to="/checkout">
                  <Button addClass="cart_green">Оформить</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : <p>Корзина пустая</p>}
      </div>
    </div>
  );
};

export default CartContainer;
