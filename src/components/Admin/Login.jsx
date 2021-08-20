/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import LoginApi from '../../api/login';
import TextInput from '../UI/Input/TextInput';
import { isAdminAction } from '../../store/admin/actions';
import { authorizationPopupAction } from '../../store/madals/actions';

const Login = () => {
  const dispatch = useDispatch();
  const loginSchema = Yup.object().shape({
    loginOrEmail: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .max(12, 'Must be 12 characters or less')
      .min(7, 'Must be 7 characters or more')
      .required('Password is required'),
  });

  const handleLogin = (values, { setSubmitting, resetForm }) => {
    const { loginOrEmail, password } = values;
    setSubmitting(true);
    const loginData = {
      loginOrEmail,
      password,
    };
    LoginApi(loginData)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        resetForm();
        if (res.data.isAdmin) {
          dispatch(isAdminAction());
        }
      })
      .then(() => {
        dispatch(authorizationPopupAction('Авторизация прошла успешно'));
        // alert('Login successful');
        
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        dispatch(authorizationPopupAction('Неверный логин или пароль'));
        // alert(
        //   'Login failed'
        // ); /* Show error to customer, may be incorrect password or something else */
      });
  };
  return (
    <div className="formBlock login">
      <h2 className="form-name ">Login form</h2>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
        }}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
      >
        {(formik) => (
          <Form className="cart-form">
            <div className="cart-inputs-area">
              <TextInput label="Email" name="loginOrEmail" type="email" />
              <TextInput label="Password" name="password" type="password" />
            </div>
            <div className="form-btn-group">
              <button type="submit" className="btn cart-body-order">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
