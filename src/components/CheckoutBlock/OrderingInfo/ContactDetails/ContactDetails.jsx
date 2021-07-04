import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './ContactDetails.module.scss';

const ContactDetails = () => {
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const validation = yup.object().shape({
      name: yup.string().typeError('Должна быть строка').required('Введите имя'),
      phone: yup.string().matches(phoneRegExp, 'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.').required('Введите номер телефона +380 XX XXX XXXX'),
      email: yup.string().email('Введите корректный email')
      
    });
    return (
      <div className={styles.ContactDetails}>
        <div className={styles.ContactDetailsTitleBlock}>
          <h2>Контактные данные</h2>
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
  <form className={styles.ContactDetailsFormBlock}>
    <div className={styles.ContactDetailsField}>
      <label htmlFor="name">Имя получителя*</label>
      <input name="name" id="name" type="text" placeholder="Иван Петрович" onChange={handleChange} onBlur={handleBlur} value={values.name} />
      {touched.name && errors.name && <p className={styles.Error}>{errors.name }</p>}
    </div>
    <div className={styles.ContactDetailsField}>
      <label htmlFor="phone">Телефон*</label>
      <input name="phone" id="phone" type="text" placeholder="+380631113344" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
      {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone }</p>}
    </div>
    <div className={styles.ContactDetailsField}>
      <label htmlFor="email">E-mail</label>
      <input name="email" id="email" type="text" placeholder="Ivanov444@gmail.com" onChange={handleChange} onBlur={handleBlur} value={values.email} />
      {touched.email && errors.email && <p className={styles.Error}>{errors.email }</p>}
    </div>
  </form>
    )}
        </Formik>
      </div>
    );
};

export default ContactDetails;