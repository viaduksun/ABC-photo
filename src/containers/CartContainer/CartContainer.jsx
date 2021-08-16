/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './CartContainer.module.scss';
import Button from '../../components/UI/Button/Button';
import CartProduct from '../../components/CartProduct/CartProduct';
import emptyCart from '../../assets/img/cartBlock/emptyCart.png';
import getOneProduct from '../../api/getOneProduct';

const CartContainer = () => {
  const cartDB = useSelector((state) => state.cart.cartDB);
  const cart = useSelector((state) => state.cart.cart);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const totalSumCart = useSelector((state) => state.cart.totalSumCart);
  const totalCountCart = useSelector((state) => state.cart.totalCountCart);
  // const cartArray = cartDB.products.map((item) => {
  //   console.log(item);
  //   let currProduct = {};
  //   getOneProduct(item.product).then((product) => {
  //     console.log('product', product);
  //     currProduct = product;
  //   });
  //   return currProduct;
  // });
  // console.log(cart);

  let cartArr = null;
  if (isLoggedIn) {
    cartArr = cartDB;
  } else {
    cartArr = cart;
  }
  // console.log(cartArr);
  return (
    <div className={styles.CartBlock}>
      <div className="container">
        <h2 className={styles.Title}>Моя корзина</h2>
        {Object.keys(cartArr).length !== 0 ? (
          <div className={styles.Cart}>
            <ul className={styles.CartHeader}>
              <li>Товар</li>
              <li>Цена</li>
              <li>Количество</li>
              <li>Всего</li>
            </ul>
            <ul className={styles.CartMain}>
              {isLoggedIn &&
                cartArr.map((cartItem) => (
                  // console.log(cartItem.product);
                  <CartProduct
                    key={cartItem._id}
                    cartProduct={cartItem.product}
                    cartQuantity={cartItem.cartQuantity}
                  />
                ))}
              {!isLoggedIn &&
                cartArr.map((cartItem) => {
                  console.log(cartItem);
                  return (
                    <CartProduct
                      key={cartItem._id}
                      cartProduct={cartItem}
                      cartQuantity={cartItem.count}
                    />
                  );
                })}
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
                  <span> {totalCountCart} шт.</span> на общую сумму
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
        ) : (
          <div className={styles.EmptyCart}>
            <img src={emptyCart} alt="empty cart" />
            <h3>Корзина пуста</h3>
            <p>Но это никогда не поздно исправить :)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
