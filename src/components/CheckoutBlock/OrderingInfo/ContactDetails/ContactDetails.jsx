/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import { FormatItalic } from '@material-ui/icons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
  const [radioPaymentValue, setRadioPaymentValue] = useState(null);

  const [areasNP, setAreasNP] = useState([]);
  const [filteredCitiesNP, setFilteredCitiesNP] = useState([]);
  const [warehousesNP, setWarehousesNP] = useState([]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const [selfDeliveryValue, setSelfDeliveryValue] = useState(null);
  const [npAreaValue, setNpAreaValue] = useState(null);
  const [npCityValue, setNpCityValue] = useState(null);
  const [npOfficeValue, setNpOfficeValue] = useState(null);

  // const [orderProducts, setOrderProducts] = useState([]);

  const resetFormState = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSelfDeliveryValue(null);
    setNpAreaValue(null);
    setNpCityValue(null);
    setNpOfficeValue(null);
    setRadioPaymentValue(null);
    setRadioDeliveryValue('a');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const dispatch = useDispatch();

  // const orderProducts = [];
  const orderProducts = useMemo(
    () => [], // 1st arg: some function
    [] // 2nd arg: array of dependencies
  );

  useEffect(() => {
    if (!isLoggedIn) {
      cart.forEach((product) => {
        // console.log(product);
        getOneProduct(product.itemNo).then((res) => {
          console.log('GETTED', res);
          const productObj = {
            product: res.data,
            cartQuantity: product.count,
          };
          orderProducts.push(productObj);
          console.log(orderProducts);
        });
      });
    }
  }, [cart, isLoggedIn, orderProducts]);

  // === NP ===
  const handleRadioPaymentChange = (e) => {
    setRadioPaymentValue(e.target.value);
  };
  const handleRadioDeliveryChange = (e) => {
    setRadioDeliveryValue(e.target.value);
    if (e.target.value === 'b') {
      getAreas().then((response) => {
        console.log(response);
        setAreasNP(response.data.data);
      });
    }
  };
  // === NP handle API ===
  const handleSelectArea = (area) => {
    // console.log(area);
    getCities().then((response) => {
      const citiArr = response.data.data;
      let areaRef = 0;
      if (area) {
        areaRef = area.Ref;
      }
      // console.log(citiArr);
      const filteredCityArr = citiArr.filter((c) => c.Area === areaRef);
      console.log(filteredCityArr);
      setFilteredCitiesNP(filteredCityArr);
    });
  };
  const handleSelectCity = (e) => {
    let cityRef = 0;
    if (e) {
      cityRef = e.Ref;
    }
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
  const selfDeliveryOptionsArr = [
    { value: 'point-01', title: 'Бульвар Кольцова 2а. Пункт выдачи №1' },
    { value: 'point-02', title: 'Ул. Куприянова 12. Пункт выдачи №2' },
    { value: 'point-03', title: 'Бульвар Ромена Роллана 5/8. Пункт выдачи №3' },
  ];
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
  const onSubmit = (values, actions) => {
    const orderNumber = Math.floor(Math.random() * 999999);
    setOrderNo(orderNumber);

    let deliveryOption = '';
    if (radioDeliveryValue === 'a') {
      deliveryOption = selfDeliveryValue.title;
    }
    if (radioDeliveryValue === 'b') {
      deliveryOption = {
        npArea: npAreaValue.Ref,
        npCity: npCityValue.Ref,
        npOffice: npOfficeValue.Ref,
      };
    }
    if (radioDeliveryValue === 'c') {
      deliveryOption = values.address;
    }
    const newOrder = {
      deliveryAddress: JSON.stringify({
        country: 'Ukraine',
        // city: npCityValue.DescriptionRu,
        deliveryOption,
      }),
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

    // console.log('NEWORDER Products', orderProducts);
    console.log('NEWORDER', newOrder);
    if (isLoggedIn) {
      createOrder(newOrder);
      dispatch(cartDeleteAction());
    } else {
      createOrder(newOrder);
      dispatch(deleteLocalCartAction());
    }
    sendMessageToTelegram(
      `Номер заказа: №${orderNumber}, Имя: ${values.name}, Телефон: ${values.phone}, Email: ${values.email}`
    );
    resetFormState();
    actions.resetForm();
    setModalActive(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!name) {
      errors.name = 'Введите ваше имя';
    }
    if (!values.phone) {
      errors.phone = 'Введите ваш телефон';
    }
    if (!values.email) {
      errors.email = 'Введите адрес электронной почты';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Некорректный имейл';
    }
    if (!selfDeliveryValue && radioDeliveryValue === 'a') {
      errors.selfDelivery = 'Выберите пункт выдачи';
    }

    if (!npAreaValue && radioDeliveryValue === 'b') {
      errors.npArea = 'Выберите область';
    }
    if (!npCityValue && radioDeliveryValue === 'b') {
      errors.npCity = 'Выберите город';
    }
    if (!npOfficeValue && radioDeliveryValue === 'b') {
      errors.npOffice = 'Выберите отделение';
    }
    if (!values.address && radioDeliveryValue === 'c') {
      errors.address = 'Введите адрес доставки';
    }
    if (!values.paymentRadioGroup) {
      errors.paymentRadioGroup = 'Выберите способ оплаты';
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
  // === REACT MUI ===
  const selfDeliveryProps = {
    options: selfDeliveryOptionsArr,
    getOptionLabel: (option) => option.title,
  };
  const areasNPProps = {
    options: areasNP,
    getOptionLabel: (option) => option.DescriptionRu,
  };
  const citiesNPProps = {
    options: filteredCitiesNP,
    getOptionLabel: (option) => option.DescriptionRu,
  };
  const officeNPProps = {
    options: warehousesNP,
    getOptionLabel: (option) => option.DescriptionRu,
  };

  // ===
  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
        id="orderCheckoutForm"
        noValidate
      >
        <div className={styles.formSectionTitle}>
          <h2>Контактные данные</h2>
          <p>*Поля, обязательные для заполнения</p>
        </div>
        <div className={styles.formGroup}>
          <TextField
            value={name}
            name="name"
            required
            id="nameId"
            label="Имя"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => {
              handleNameChange(e);
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            margin="normal"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className={styles.formError}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <TextField
            value={phone}
            name="phone"
            required
            id="phoneId"
            label="Телефон"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => {
              handlePhoneChange(e);
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            margin="normal"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className={styles.formError}>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <TextField
            value={email}
            name="email"
            required
            id="phoneId"
            label="Имейл"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => {
              handleEmailChange(e);
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            margin="normal"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className={styles.formError}>{formik.errors.email}</div>
          ) : null}
        </div>
        {/* =============================== RADIO =========  */}
        <div className={styles.formSectionTitle}>
          <h2>Способы доставки</h2>
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
                </div>
                <div className={styles.formGroup}>
                  {radioDeliveryValue === 'a' && (
                    <>
                      {/* <label className={styles.formLabel} htmlFor="country">
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
                      </select> */}
                      <Autocomplete
                        {...selfDeliveryProps}
                        id="controlled-demo"
                        value={selfDeliveryValue}
                        name="selfDeliveryAutocomplete"
                        onChange={(event, newValue) => {
                          setSelfDeliveryValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            required
                            label="Пункт выдачи"
                            name="selfDelivery"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        )}
                      />
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
                      <Autocomplete
                        {...areasNPProps}
                        id="npArea"
                        value={npAreaValue}
                        onChange={(event, newValue) => {
                          setNpAreaValue(newValue);
                          // formik.handleChange(event);
                          handleSelectArea(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="npArea"
                            id="npArea"
                            label="Область"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onBlur={formik.handleBlur}
                          />
                        )}
                      />
                      {formik.errors.npArea &&
                      formik.touched.npArea &&
                      radioDeliveryValue === 'b' ? (
                        <div className={styles.formError}>
                          {formik.errors.npArea}
                        </div>
                      ) : null}
                    </div>
                    <div className={styles.formGroup}>
                      <Autocomplete
                        {...citiesNPProps}
                        id="npCityAutocomplete"
                        value={npCityValue}
                        onChange={(event, newValue) => {
                          setNpCityValue(newValue);
                          handleSelectCity(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="npCity"
                            id="npArea"
                            label="Город"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onBlur={formik.handleBlur}
                            disabled={filteredCitiesNP.length === 0}
                          />
                        )}
                      />
                      {formik.errors.npCity &&
                      formik.touched.npCity &&
                      radioDeliveryValue === 'b' ? (
                        <div className={styles.formError}>
                          {formik.errors.npCity}
                        </div>
                      ) : null}
                    </div>

                    {/* <div className={styles.formGroup}>
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
                    </div> */}

                    <div className={styles.formGroup}>
                      <Autocomplete
                        {...officeNPProps}
                        id="npOfficeAutocomplete"
                        value={npOfficeValue}
                        onChange={(event, newValue) => {
                          setNpOfficeValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="npOffice"
                            id="npOffice"
                            label="Отделение"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            onBlur={formik.handleBlur}
                            disabled={warehousesNP.length === 0}
                          />
                        )}
                      />
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
                      <div className={styles.formGroup}>
                        <TextField
                          name="address"
                          required
                          id="address"
                          label="Адрес"
                          variant="outlined"
                          fullWidth
                          size="small"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          margin="normal"
                        />
                        {formik.errors.address && formik.touched.address ? (
                          <div className={styles.formError}>
                            {formik.errors.address}
                          </div>
                        ) : null}
                      </div>
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
              </div>
            </RadioGroup>
          </MuiThemeProvider>
        </div>
        <div className={styles.formSectionTitle}>
          <h2>Комментарий к заказу</h2>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.formGroup}>
            <TextField
              value={comment}
              name="comment"
              id="comment"
              label="Комментарий к заказу"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(e) => {
                handleCommentChange(e);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              margin="normal"
              multiline
              rows={4}
            />
          </div>
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
