/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { FormatItalic } from '@material-ui/icons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactDetails.module.scss';
import getAreas from '../../../../api/novaPoshta/getAreas';
import getCities from '../../../../api/novaPoshta/getCities';
import getWarehouses from '../../../../api/novaPoshta/getWarehouses';
import getOneProduct from '../../../../api/getOneProduct';
import createOrder from '../../../../api/createOrder';
import {
  cartDeleteAction,
  deleteLocalCartAction,
} from '../../../../store/cart/actions';
import FinalModal from '../../../FinalModal/FinalModal';
import sendMessageToTelegram from '../../../../api/telegram';

const ContactDetails = () => {
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const cart = useSelector((state) => state.cart.cart);
  const currentUserId = useSelector((state) => state.admin.currentUser._id);

  const [orderNo, setOrderNo] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const [radioDeliveryValue, setRadioDeliveryValue] = useState('a');
  const [radioPaymentValue, setRadioPaymentValue] = useState('');

  const [areasNP, setAreasNP] = useState([]);
  const [filteredCitiesNP, setFilteredCitiesNP] = useState([]);
  const [warehousesNP, setWarehousesNP] = useState([]);
  const dispatch = useDispatch();

  const orderProducts = [];
  if (!isLoggedIn) {
    cart.forEach((product) => {
      // console.log(product);
      getOneProduct(product.itemNo).then((res) => {
        // console.log('GETTED', res);
        const productObj = {
          product: res.data,
          cartQuantity: product.count,
        };
        orderProducts.push(productObj);
        // console.log(orderProducts);
      });
    });
  }
  // === NP ===
  const handleRadioPaymentChange = (e) => {
    setRadioPaymentValue(e.target.value);
  };
  const handleRadioDeliveryChange = (e) => {
    setRadioDeliveryValue(e.target.value);
    if (e.target.value === 'b') {
      getAreas().then((response) => {
        setAreasNP(response.data.data);
      });
    }
  };
  // === NP handle API ===
  const handleSelectArea = (e) => {
    const areaRef = e.target.value;
    getCities().then((response) => {
      const citiArr = response.data.data;
      const filteredCityArr = citiArr.filter((c) => c.Area === areaRef);
      setFilteredCitiesNP(filteredCityArr);
    });
  };
  const handleSelectCity = (e) => {
    const cityRef = e.target.value;
    getWarehouses(cityRef).then((response) => {
      setWarehousesNP(response.data.data);
    });
  };
  // === OPTIONS ========
  const selfDeliveryOptions = (
    <>
      <option value="" selected hidden>
        Выберите пункт выдачи
      </option>
      <option value="point-01">Бульвар Кольцова 2а. Пункт выдачи №1</option>
      <option value="point-02">Ул. Куприянова 12. Пункт выдачи №2</option>
      <option value="point-03">
        Бульвар Ромена Роллана 5/8. Пункт выдачи №3
      </option>
    </>
  );
  const areaOptionsNP = () => {
    const areasOptions = [];
    const defaultOption = (
      <option hidden selected>
        Выберите область
      </option>
    );
    areasOptions.push(defaultOption);
    if (areasNP.length > 0) {
      const areasOptionsNP = areasNP.map((area) => (
        <option value={area.Ref}>{area.DescriptionRu}</option>
      ));
      const areasOptionsNPconcat = areasOptions.concat(areasOptionsNP);
      return areasOptionsNPconcat;
    }
    return areasOptions;
  };
  const cityOptionsNP = () => {
    if (filteredCitiesNP.length > 0) {
      const citiesOptions = filteredCitiesNP.map((city) => (
        <option value={city.Ref}>{city.DescriptionRu}</option>
      ));
      const defaultOption = (
        <option value="" hidden selected>
          Выберите город
        </option>
      );
      citiesOptions.push(defaultOption);
      return citiesOptions;
    }
    return (
      <option value="" hidden selected>
        Выберите город
      </option>
    );
  };
  const wirehousesOptionsNP = () => {
    if (warehousesNP.length > 0) {
      const wirehouseOptions = warehousesNP.map((item) => (
        <option value={item.Number}>{item.DescriptionRu}</option>
      ));
      const defaultOption = (
        <option value="" hidden selected>
          Выберите отделение
        </option>
      );
      wirehouseOptions.push(defaultOption);
      return wirehouseOptions;
    }
    return (
      <option value="" hidden selected>
        Выберите отделение
      </option>
    );
  };

  // === FORMIK ===
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    selfDelivery: '',
    npArea: '',
    npCity: '',
    npOffice: '',
    address: '',
    paymentRadioGroup: '',
    comment: '',
  };
  const onSubmit = (values) => {
    console.log('SUBMIT:', values, radioPaymentValue);
    const orderNumber = Math.floor(Math.random() * 999999);
    setOrderNo(orderNumber);

    let deliveryOption = '';
    if (radioDeliveryValue === 'a') {
      deliveryOption = values.selfDelivery;
    }
    if (radioDeliveryValue === 'b') {
      deliveryOption = {
        npArea: values.npArea,
        npCity: values.npCity,
        npOffice: values.npOffice,
      };
    }
    if (radioDeliveryValue === 'c') {
      deliveryOption = values.address;
    }
    const newOrder = {
      deliveryAddress: JSON.stringify({
        country: 'Ukraine',
        city: values.npCity,
        deliveryOption,
      }),
      shipping: JSON.stringify('Kiev 50UAH'),
      paymentInfo: JSON.stringify(values.paymentRadioGroup),
      name: values.name,
      email: values.email,
      mobile: values.phone,
      comment: values.comment,
      letterSubject: 'ABC_Photo_ordering confirm',
      letterHtml: `<h1>${values.name}, Ваш заказ принят. Номер заказа ${orderNumber}.</h1><p>Мы свяжемся с Вами в ближайшее время</p>`,
    };
    if (isLoggedIn) {
      newOrder.customerId = currentUserId;
    } else {
      newOrder.products = JSON.stringify(orderProducts);
    }
    console.log('NEWORDER', newOrder);
    if (isLoggedIn) {
      createOrder(newOrder);
      dispatch(cartDeleteAction());
    } else {
      createOrder(newOrder);
      dispatch(deleteLocalCartAction());
    }
    sendMessageToTelegram(
      `Номер заказа: №${orderNo}, Имя: ${values.name}, Телефон: ${values.phone}, Email: ${values.email}`
    );
    // resetForm();
    setModalActive(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.phone) {
      errors.phone = 'Required';
    }
    if (!values.selfDelivery && radioDeliveryValue === 'a') {
      errors.selfDelivery = 'Required';
    }

    if (!values.npArea && radioDeliveryValue === 'b') {
      errors.npArea = 'Required';
    }
    if (!values.npCity && radioDeliveryValue === 'b') {
      errors.npCity = 'Required';
    }
    if (!values.npOffice && radioDeliveryValue === 'b') {
      errors.npOffice = 'Required';
    }
    if (!values.address && radioDeliveryValue === 'c') {
      errors.address = 'Required';
    }
    if (!values.paymentRadioGroup) {
      errors.paymentRadioGroup = 'Выберите способ оплаты';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // console.log('Form values:', formik.values);
  // console.log('Form errors:', formik.errors);
  // console.log('Visited fields:', formik.touched);
  const theme = createMuiTheme({
    palette: {
      primary: { main: purple[500] }, // Purple - just for example.
      secondary: { main: '#51AD33' }, // Secondary - is a default radio color, so we override it.
    },
  });
  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
        id="orderCheckoutForm"
      >
        <div className={styles.formSectionTitle}>
          <h2>*Контактные данные</h2>
          <p>*Поля, обязательные для заполнения</p>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="nameId">
            Имя
          </label>
          <input
            name="name"
            className={styles.formInput}
            type="text"
            id="nameId"
            placeholder="Your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className={styles.formError}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="phoneId">
            Телефон
          </label>
          <input
            name="phone"
            className={styles.formInput}
            type="text"
            id="phoneId"
            placeholder="Your phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className={styles.formError}>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="emailId">
            Емэйл
          </label>
          <input
            name="email"
            className={styles.formInput}
            type="text"
            id="emailId"
            placeholder="Your email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className={styles.formError}>{formik.errors.email}</div>
          ) : null}
        </div>
        {/* =============================== RADIO =========  */}
        <div className={styles.formSectionTitle}>
          <h2>*Способы доставки</h2>
        </div>
        <div className={styles.formRadioWrapp}>
          <MuiThemeProvider theme={theme}>
            <RadioGroup
              name="npRadioGroup"
              value={radioDeliveryValue}
              onChange={handleRadioDeliveryChange}
            >
              <div className={styles.formGroup}>
                <div className={styles.radioWrapp}>
                  <FormControlLabel
                    value="a"
                    control={<Radio />}
                    label="Самовывоз из пункта выдачи"
                  />
                  {/* <input
                    className={styles.formRadio}
                    type="radio"
                    name="deliveryOption"
                    id="delivery"
                    value="a"
                    onChange={handleRadioDeliveryChange}
                    checked={radioDeliveryValue === 'a'}
                  />
                  <label className={styles.radioLabel} htmlFor="delivery">
                    Самовывоз из пункта выдачи
                  </label> */}
                </div>
                <div className={styles.formGroup}>
                  {radioDeliveryValue === 'a' && (
                    <>
                      <label className={styles.formLabel} htmlFor="country">
                        Пункт выдачи
                      </label>
                      <select
                        name="selfDelivery"
                        className={styles.formSelect}
                        id="country"
                        value={formik.values.selfDelivery}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {selfDeliveryOptions}
                      </select>
                    </>
                  )}
                  {radioDeliveryValue === 'a' &&
                  formik.errors.selfDelivery &&
                  formik.touched.selfDelivery ? (
                    <div className={styles.formError}>{formik.errors.name}</div>
                  ) : null}
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.radioWrapp}>
                  <FormControlLabel
                    value="b"
                    control={<Radio />}
                    label="Новая почта (в отделение)"
                  />
                </div>
                {radioDeliveryValue === 'b' && (
                  <>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="npArea">
                        Выберите район
                      </label>
                      <select
                        name="npArea"
                        className={styles.formSelect}
                        id="npArea"
                        value={formik.values.npArea}
                        onChange={(e) => {
                          formik.handleChange(e);
                          handleSelectArea(e);
                        }}
                        onBlur={formik.handleBlur}
                      >
                        {areaOptionsNP()}
                      </select>
                      {formik.errors.npArea &&
                      formik.touched.npArea &&
                      radioDeliveryValue === 'b' ? (
                        <div className={styles.formError}>
                          {formik.errors.npArea}
                        </div>
                      ) : null}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="npCity">
                        Выберите город
                      </label>
                      <select
                        name="npCity"
                        className={styles.formSelect}
                        id="npCity"
                        value={formik.values.npCity}
                        onChange={(e) => {
                          formik.handleChange(e);
                          handleSelectCity(e);
                        }}
                        onBlur={formik.handleBlur}
                        disabled={filteredCitiesNP.length === 0}
                      >
                        {cityOptionsNP()}
                      </select>
                      {formik.errors.npCity &&
                      formik.touched.npCity &&
                      radioDeliveryValue === 'b' ? (
                        <div className={styles.formError}>
                          {formik.errors.npCity}
                        </div>
                      ) : null}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="npOffice">
                        Выберите отделение
                      </label>
                      <select
                        name="npOffice"
                        className={styles.formSelect}
                        id="npOffice"
                        value={formik.values.npOffice}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={warehousesNP.length === 0}
                      >
                        {wirehousesOptionsNP()}
                      </select>
                      {formik.errors.npOffice &&
                      formik.touched.npOffice &&
                      radioDeliveryValue === 'b' ? (
                        <div className={styles.formError}>
                          {formik.errors.npOffice}
                        </div>
                      ) : null}
                    </div>
                  </>
                )}
              </div>
              <div className={styles.formGroup}>
                <div className={styles.radioWrapp}>
                  <FormControlLabel
                    value="c"
                    control={<Radio />}
                    label="Доставка по адресу"
                  />
                </div>
                <div className={styles.formGroup}>
                  {radioDeliveryValue === 'c' && (
                    <>
                      <label className={styles.formLabel} htmlFor="address">
                        Адрес
                      </label>
                      <input
                        name="address"
                        className={styles.formInput}
                        type="text"
                        id="address"
                        placeholder="Address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.address &&
                      formik.touched.address &&
                      radioDeliveryValue === 'c' ? (
                        <div className={styles.formError}>
                          {formik.errors.address}
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            </RadioGroup>
          </MuiThemeProvider>
        </div>
        <div className={styles.formSectionTitle}>
          <h2>*Способы оплаты</h2>
          {formik.errors.paymentRadioGroup && formik.touched.address ? (
            <div className={styles.formDeliveryError}>
              {formik.errors.paymentRadioGroup}
            </div>
          ) : null}
        </div>
        <div className={styles.formRadioWrapp}>
          <MuiThemeProvider theme={theme}>
            <RadioGroup
              name="paymentRadioGroup"
              value={radioPaymentValue}
              onChange={(e) => {
                formik.handleChange(e);
                handleRadioPaymentChange(e);
              }}
              onBlur={formik.handleBlur}
            >
              <div className={styles.paymentWrapper}>
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label="Наличными при получении"
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label="Картой при получении"
                />
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  label="Безналичный расчет"
                />
                <FormControlLabel
                  value="d"
                  control={<Radio />}
                  label="Кредит Альфа Банк"
                />
                <FormControlLabel
                  value="e"
                  control={<Radio />}
                  label="Кредит Credit Agricole"
                />
                <FormControlLabel
                  value="f"
                  control={<Radio />}
                  label="Кредит УКРСИББАНК"
                />
                {/* <div className={styles.paymentColumn}>
                </div> */}
                {/* <div className={styles.paymentColumn} /> */}
              </div>
            </RadioGroup>
          </MuiThemeProvider>
        </div>
        <div className={styles.formSectionTitle}>
          <h2>Комментарий к заказу</h2>
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="comment"
            className={styles.formTextarea}
            type="text"
            id="comment"
            placeholder="Комментарий к заказу"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </form>
      <FinalModal
        active={modalActive}
        setActive={setModalActive}
        orderNo={orderNo}
      />
    </div>
  );
};

export default ContactDetails;
