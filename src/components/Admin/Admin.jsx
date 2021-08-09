/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import createProduct from '../api/createProduct';
import userRegister from '../api/register';
import Login from '../api/login';
import TextInput from '../components/UI/Input/TextInput';
// import { validateRegister } from '../validations/registerValidation';
import { sony02 } from '../Data/products';

const ApiTest = () => {
  // const [values, setValues] = useState({
  //   email: '',
  //   Password: '',
  //   confirmPassword: '',
  // });
  const takenEmailsFromDB = [
    'test01@gmail.com',
    'test02@gmail.com',
    'test03@gmail.com',
  ];
  const handleRegister = (values, { setSubmitting }) => {
    console.log('Register');
    const { firstName, lastName, email, login, phone, password, isAdmin } =
      values;
    const isFormValid =
      firstName && lastName && email && login && phone && password && isAdmin;
    if (isFormValid) {
      setSubmitting(true);

      setTimeout(() => {
        setSubmitting(false);
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
        userRegister(form);
      }, 1000);
    }
  };

  const handleLogin2 = (values, { setSubmitting }) => {
    console.log('handleLogin2');
    const { loginOrEmail, password } = values;
    setSubmitting(true);
    const loginData = {
      loginOrEmail,
      password,
    };
    console.log(loginData);
    Login(loginData)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
      })
      .then(() => setSubmitting(false));
  };
  const handleCreateProduct2 = () => {
    console.log('CREATE');
    createProduct(sony02);
  };
  const handleCreateProduct = (values, { setSubmitting }) => {
    const {
      brand,
      model,
      currentPrice,
      previousPrice,
      quantity,
      artical,
      hitSale,
      categories,
      waranty,
      type,
      set,
      megapixels,
      matrixType,
      matrixSize,
      screenDiagonal,
      sensorScreen,
      digitalMagnification,
      stabilization,
      opticalMagnification,
      focusDistance,
      imageUrl01,
      imageUrl02,
      imageUrl03,
      imageUrl04,
    } = values;
    setSubmitting(true);
    const newProduct = {
      brand,
      model,
      currentPrice,
      previousPrice,
      quantity,
      artical,
      hitSale,
      categories,
      waranty,
      type,
      set,
      megapixels,
      matrixType,
      matrixSize,
      screenDiagonal,
      sensorScreen,
      digitalMagnification,
      stabilization,
      opticalMagnification,
      focusDistance,
      imageURLs: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
    };
    createProduct(newProduct);
    console.log(newProduct);
    setSubmitting(false);
  };

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
  const productSchema = Yup.object().shape({
    brand: Yup.string().required('Is required'),
    name: Yup.string().required('Is required'),
    currentPrice: Yup.string().required('Is required'),
    previousPrice: Yup.string().required('Is required'),
    quantity: Yup.string().required('Is required'),
    artical: Yup.string().required('Is required'),
    hitSale: Yup.string().required('Is required'),
    categories: Yup.string().required('Is required'),
  });
  const loginSchema = Yup.object().shape({
    loginOrEmail: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .max(12, 'Must be 12 characters or less')
      .min(7, 'Must be 7 characters or more')
      .required('Password is required'),
  });
  return (
    <div className="container">
      <h1>Admin panel</h1>
      <div className="formBlock register">
        <h2 className="form-name">Register form</h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            login: '',
            phone: '',
            password: '',
            isAdmin: 'true',
          }}
          onSubmit={handleRegister}
          validationSchema={registrationSchema}
        >
          {(formik) => (
            <Form className="cart-form">
              <div className="cart-inputs-area">
                <TextInput label="First name" name="firstName" type="text" />
                <TextInput label="Last name" name="lastName" type="text" />
                <TextInput label="Email" name="email" type="email" />
                <TextInput label="Login" name="login" type="text" />
                <TextInput label="Phone" name="phone" type="text" />
                <TextInput label="Password" name="password" type="text" />
                <TextInput label="" name="isAdmin" type="hidden" />
              </div>
              <div className="form-btn-group">
                <button type="submit" className="btn cart-body-order">
                  Regiser
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="formBlock login">
        <h2 className="form-name ">Login form</h2>
        <Formik
          initialValues={{
            loginOrEmail: '',
            password: '',
          }}
          onSubmit={handleLogin2}
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
      <div className="formBlock create">
        <h2 className="form-name">Create product</h2>
        <Formik
          initialValues={{
            brand: '',
            model: '',
            set: '',
            currentPrice: '',
            previousPrice: '',
            quantity: '',
            artical: '',
            hitSale: '',
            categories: '',
            waranty: '',
            type: '',
            megapixels: '',
            matrixType: '',
            matrixSize: '',
            screenDiagonal: '',
            sensorScreen: '',
            digitalMagnification: '',
            stabilization: '',
            opticalMagnification: '',
            focusDistance: '',
            imageUrl01: '',
            imageUrl02: '',
            imageUrl03: '',
            imageUrl04: '',
          }}
          onSubmit={handleCreateProduct2}
          // validationSchema={productSchema}
        >
          {(formik) => (
            <Form className="product-form">
              <div className="product-inputs-area">
                <TextInput label="Производитель" name="brand" type="text" />
                <TextInput label="Модель" name="model" type="text" />
                <TextInput label="Комплектация" name="set" type="text" />
                <TextInput
                  label="Текущая цена"
                  name="currentPrice"
                  type="text"
                />
                <TextInput
                  label="Предыдущая цена"
                  name="previousPrice"
                  type="text"
                />
                <TextInput
                  label="Количество на складе"
                  name="quantity"
                  type="number"
                />
                <TextInput label="Артикул" name="artical" type="text" />
                <TextInput
                  label="Хит продаж (да/нет)"
                  name="hitSale"
                  type="text"
                />
                <TextInput label="Категория" name="categories" type="text" />

                <TextInput label="Гарантия" name="waranty" type="text" />
                <TextInput label="Тип фотоаппарата" name="type" type="text" />
                <TextInput
                  label="Количество мегапикселей"
                  name="megapixels"
                  type="text"
                />
                <TextInput label="Тип матрицы" name="matrixType" type="text" />
                <TextInput
                  label="Размер матрицы"
                  name="matrixSize"
                  type="text"
                />
                <TextInput
                  label="Диагональ экрана"
                  name="screenDiagonal"
                  type="text"
                />
                <TextInput
                  label="Сенсорный экран"
                  name="sensorScreen"
                  type="text"
                />
                <TextInput
                  label="Цифровой зум"
                  name="digitalMagnification"
                  type="text"
                />
                <TextInput
                  label="Стабилизация"
                  name="stabilization"
                  type="text"
                />
                <TextInput
                  label="Оптический зум"
                  name="opticalMagnification"
                  type="text"
                />
                <TextInput
                  label="Фокусное расстояние"
                  name="focusDistance"
                  type="text"
                />
                <TextInput
                  label="Ссылка на изобажение 1"
                  name="imageUrl01"
                  type="text"
                />
                <TextInput
                  label="Ссылка на изобажение 2"
                  name="imageUrl02"
                  type="text"
                />
                <TextInput
                  label="Ссылка на изобажение 3"
                  name="imageUrl03"
                  type="text"
                />
                <TextInput
                  label="Ссылка на изобажение 4"
                  name="imageUrl04"
                  type="text"
                />
              </div>
              <div className="form-btn-group">
                <button type="submit" className="btn cart-body-order">
                  Create product
                </button>
                <button type="reset" className="btn cart-body-order reset">
                  Reset data
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ApiTest;
