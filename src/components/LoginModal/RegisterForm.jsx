/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './LoginModal.module.scss';
import userRegister from '../../api/register';
import TextInput from '../UI/Input/TextInput';
import Button from '../UI/Button/Button';

const RegisterForm = () => {
  const takenEmailsFromDB = [
    'test01@gmail.com',
    'test02@gmail.com',
    'test03@gmail.com',
  ];
  const registrationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(7, 'Must be 7 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .notOneOf(takenEmailsFromDB, 'Email already taken')
      .required('Email is required'),
    login: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    phone: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Phone is required'),
    password: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .required('Phone is required'),
  });

  const handleRegister = (values, { setSubmitting, resetForm }) => {
    console.log('Register');
    const { firstName, lastName, email, login, phone, password, isAdmin } =
      values;
    const isFormValid =
      firstName && lastName && email && login && phone && password && isAdmin;
    if (isFormValid) {
      setSubmitting(true);

      const form = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        login: values.login,
        phone: values.phone,
        password: values.password,
        isAdmin: values.isAdmin,
      };
      console.log(form);
      userRegister(form).then((res) => {
        resetForm();
        setSubmitting(false);
        console.log(res);
        const userName = res.data.firstName;
        alert(`Hello, ${userName}! You have been registered successfully!`);
      });
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          login: '',
          phone: '',
          password: '',
          isAdmin: 'false',
        }}
        onSubmit={handleRegister}
        validationSchema={registrationSchema}
      >
        {(formik) => (
          <Form className={styles.FormWrapper}>
            <div className={styles.InputsWrapper}>
              <TextInput label="First name" name="firstName" type="text" />
              <TextInput label="Last name" name="lastName" type="text" />
              <TextInput label="Email" name="email" type="email" />
              <TextInput label="Login" name="login" type="text" />
              <TextInput label="Phone" name="phone" type="text" />
              <TextInput label="Password" name="password" type="text" />
              <TextInput label="" name="isAdmin" type="hidden" />
            </div>
            <div className={styles.BtnsWrapper}>
              <Button type="submit" addClass="registerForm">
                Зарегистрироваться
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
