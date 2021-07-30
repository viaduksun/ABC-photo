/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BsX } from 'react-icons/bs';
import styles from './ModalSubscribeProduct.module.scss';
import addSubscriber from '../../../api/addSubscriber';

// eslint-disable-next-line react/prop-types
const ModalSubscribeProduct = ({ active, setActive, singleProduct }) => {
  const handleClose = () => {
    setActive(false);
  };

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const validation = yup.object().shape({
    name: yup.string().typeError('Должна быть строка').required('Введите имя'),
    phone: yup.string().matches(phoneRegExp, 'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.').required('Введите номер телефона +380 XX XXX XXXX'),
    email: yup.string().email('Введите корректный email')
  });

  // eslint-disable-next-line no-unused-vars
  const handleOnSubmitForm = (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const form = {
        name: values.name,
        phone: values.phone,
        email: values.email,
      };
      console.log(form);
      addSubscriber(singleProduct, form).then((res) => {
        setSubmitting(false);
        resetForm();
        console.log(res);
      });
  };

  return (
    <div
      className={active ? styles.Modal_active : styles.Modal}
      onClick={handleClose}
    >
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.ModalClose}
          onClick={handleClose}
        >
          <BsX />
        </button>
        <h2 className={styles.Title}>Заполните форму</h2>
        <div className={styles.ContactDetails}>
          <Formik
            initialValues={{
          name: '',
          phone: '',
          email: ''
        }}
            onSubmit={handleOnSubmitForm}
            validateOnBlur
            validationSchema={validation}
          >
            {({
values, errors, touched, handleChange, handleBlur
}) => (
  <form className={styles.ContactDetailsFormBlock} onSubmit={handleOnSubmitForm}>
    <div className={styles.ContactDetailsField}>
      <label htmlFor="name">Имя</label>
      <input name="name" id="name" type="text" placeholder="Иван Петрович" onChange={handleChange} onBlur={handleBlur} value={values.name} />
      {touched.name && errors.name && <p className={styles.Error}>{errors.name }</p>}
    </div>
    <div className={styles.ContactDetailsField}>
      <label htmlFor="phone">Телефон</label>
      <input name="phone" id="phone" type="text" placeholder="+380631113344" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
      {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone }</p>}
    </div>
    <div className={styles.ContactDetailsField}>
      <label htmlFor="email">E-mail</label>
      <input name="email" id="email" type="text" placeholder="Ivanov444@gmail.com" onChange={handleChange} onBlur={handleBlur} value={values.email} />
      {touched.email && errors.email && <p className={styles.Error}>{errors.email }</p>}
    </div>
    <button type="submit" className={styles.SubmitButton}>Отправить</button>
  </form>
    )}
          </Formik>
        </div>
 
      </div>
    </div>
  );
};

export default ModalSubscribeProduct;
