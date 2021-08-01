/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import styles from './LoginModal.module.scss';
import userRegister from '../../api/register';
import TextInput from '../UI/Input/TextInput';
import Button from '../UI/Button/Button';
import { loginModalCloseAction } from '../../store/madals/actions';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const takenEmailsFromDB = [
    'test01@gmail.com',
    'test02@gmail.com',
    'test03@gmail.com',
  ];
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePasswordConfirm, setVisiblePasswordConfirm] = useState(false);
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const registrationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Введите ваше имя'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Введите вашу фамилию'),
    email: Yup.string()
      .lowercase()
      .email('Email is invalid')
      .notOneOf(takenEmailsFromDB, 'Email already taken')
      .required('Введите емэйл'),
    login: Yup.string()
      .min(3, 'Login must be between 3 and 10 characters')
      .max(10, 'Login must be between 3 and 10 characters')
      .required('Введите логин'),
    phone: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Введите телефон'),
    password: Yup.string()
      .matches(lowercaseRegex, 'Один символ в нижнем регистре обязателен')
      .matches(uppercaseRegex, 'Один символ в верхнем регистре обязателен')
      .matches(numericRegex, 'Один числовой символ обязателен')
      .min(7, 'Введите не менее 7 символов')
      .max(30, 'Введите не более 30 символов')
      .required('Введите пароль'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      .required('Введите пароль'),
  });

  const handleRegister = (values, { setSubmitting, resetForm }) => {
    console.log('Register');
    const {
      firstName,
      lastName,
      email,
      login,
      phone,
      password,
      passwordConfirm,
      isAdmin,
    } = values;
    const isFormValid =
      firstName &&
      lastName &&
      email &&
      login &&
      phone &&
      password &&
      passwordConfirm &&
      isAdmin;
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
      userRegister(form)
        .then((res) => {
          if (res) {
            // console.log(res);
            resetForm();
            setSubmitting(false);
            const userName = res.data.firstName;
            dispatch(loginModalCloseAction());
            alert(`Hello, ${userName}! You have been registered successfully!`);
          }
        })
        .catch((err) => {
          if (err.response) {
            // console.log(err.response);
            // console.log(err.response.data.message);
            alert(err.response.data.message);
          }
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
          passwordConfirm: '',
          isAdmin: 'false',
        }}
        onSubmit={handleRegister}
        validationSchema={registrationSchema}
      >
        {(formik) => (
          <Form className={styles.FormWrapper}>
            <div className={styles.InputsWrapper}>
              <TextInput label="Имя" name="firstName" type="text" />
              <TextInput label="Фамилия" name="lastName" type="text" />
              <TextInput label="Емэйл" name="email" type="email" />
              <TextInput label="Логин" name="login" type="text" />
              <TextInput label="Телефон" name="phone" type="text" />
              <div className={styles.PasswordBlock}>
                <TextInput
                  label="Пароль"
                  name="password"
                  type={visiblePassword ? 'text' : 'password'}
                />
                <BsEye
                  display={visiblePassword ? 'block' : 'none'}
                  onClick={() =>
                    setVisiblePassword((visibility) => !visibility)
                  }
                  className={styles.PasswordIcon}
                />
                <BsEyeSlash
                  display={visiblePassword ? 'none' : 'block'}
                  onClick={() =>
                    setVisiblePassword((visibility) => !visibility)
                  }
                  className={styles.PasswordIcon}
                />
              </div>
              <div className={styles.PasswordBlock}>
                <TextInput
                  label="Подтверждение пароля"
                  name="passwordConfirm"
                  type={visiblePasswordConfirm ? 'text' : 'password'}
                />
                <BsEye
                  display={visiblePasswordConfirm ? 'block' : 'none'}
                  onClick={() =>
                    setVisiblePasswordConfirm((visibility) => !visibility)
                  }
                  className={styles.PasswordIcon}
                />
                <BsEyeSlash
                  display={visiblePasswordConfirm ? 'none' : 'block'}
                  onClick={() =>
                    setVisiblePasswordConfirm((visibility) => !visibility)
                  }
                  className={styles.PasswordIcon}
                />
              </div>

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
