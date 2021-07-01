/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Select from './Select/Select';
import styles from './OrderingInfo.module.scss';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
    paddingLeft: 0
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const OrderingInfo = () => {
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const validation = yup.object().shape({
    name: yup.string().typeError('Должна быть строка').required('Введите имя'),
    phone: yup.string().matches(phoneRegExp, 'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.').required('Введите номер телефона +380 XX XXX XXXX'),
    email: yup.string().email('Введите корректный email')
    
  });

  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChangeDelivery = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.OrderingInfo}>
      <div className={styles.ContactsData}>
        <div className={styles.ContactsDataTitleBlock}>
          <h2 className={styles.ContactsDataTitleBlock}>Контактные данные</h2>
          <p>*Поля, обязательные для заполнения</p>
        </div>
        <Formik
          initialValues={{
          name: '',
          phone: '',
          email: ''
        }}
          validateOnBlur
          validationSchema={validation}
        >
          {({
values, errors, touched, handleChange, handleBlur
}) => (
  <form className={styles.ContactsDataFormBlock}>
    <div className={styles.ContactsDataField}>
      <label htmlFor="name">Имя получителя*</label>
      <input name="name" id="name" type="text" placeholder="Иван Петрович" onChange={handleChange} onBlur={handleBlur} value={values.name} />
      {touched.name && errors.name && <p className={styles.Error}>{errors.name }</p>}
    </div>
    <div className={styles.ContactsDataField}>
      <label htmlFor="phone">Телефон*</label>
      <input name="phone" id="phone" type="text" placeholder="+380631113344" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
      {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone }</p>}
    </div>
    <div className={styles.ContactsDataField}>
      <label htmlFor="email">E-mail</label>
      <input name="email" id="email" type="text" placeholder="Ivanov444@gmail.com" onChange={handleChange} onBlur={handleBlur} value={values.email} />
      {touched.email && errors.email && <p className={styles.Error}>{errors.email }</p>}
    </div>
  </form>
    )}
        </Formik>
      </div>
      <div className={styles.Delivery}>
        <h2>Способы доставки</h2>
        <form className={styles.DeliveryForm}>
          <div>
            <GreenRadio
              checked={selectedValue === 'a'}
              onChange={handleChangeDelivery}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
              id="pointOfDelivery"
            />
            <label htmlFor="pointOfDelivery">Самовывоз из пункта выдачи</label>
            {selectedValue === 'a' && <Select />}
          </div>
          <div>
            <GreenRadio
              checked={selectedValue === 'b'}
              onChange={handleChangeDelivery}
              value="b"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
              id="newMail"
            />
            <label htmlFor="newMail">Новая почта (в отделение)</label>
            {selectedValue === 'b' && <Select />}
          </div>
          <div>
            <GreenRadio
              checked={selectedValue === 'c'}
              onChange={handleChangeDelivery}
              value="c"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
              id="courierDelivery"
            />
            <label htmlFor="courierDelivery">Курьерская доставка</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderingInfo;