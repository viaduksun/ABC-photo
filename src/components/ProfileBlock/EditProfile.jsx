/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from './TextInput';
import styles from './ProfileBlock.module.scss';
import Button from '../UI/Button/Button';
import { updateCustomerAction } from '../../store/admin/actions';

const EditProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.admin.currentUser);

  const handleSubmitForm = (values, { setSubmitting }) => {
    console.log('SUBMIT');
    const { firstName, lastName, login, email, phone } = values;
    // const isPasswordMatch = newPassword === confirmPassword;
    const isFormValid = firstName && lastName && email && phone;

    if (isFormValid) {
      setSubmitting(true);
      const form = {
        firstName,
        lastName,
        login,
        phone,
        email,
      };
      console.log(form);
      dispatch(updateCustomerAction(form));
      setSubmitting(false);
    }
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Введите ваше имя'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Введите вашу фамилию'),
    login: Yup.string()
      .min(3, 'Login must be between 3 and 10 characters')
      .max(10, 'Login must be between 3 and 10 characters')
      .required('Введите логин'),

    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Введите телефон'),
  });

  console.log('Edit');
  return (
    <div className={styles.edit_Prpfile_Wrapper}>
      <h2>Профиль пользователя</h2>
      <Formik
        initialValues={{
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          login: currentUser.login,
          email: currentUser.email,
          phone: currentUser.phone,
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validate}
      >
        {(formik) => (
          <Form className={styles.formWrapper}>
            <div className={styles.inputsWrapper}>
              <TextInput label="Имя*" name="firstName" type="text" />
              <TextInput label="Фамилия*" name="lastName" type="text" />
              <TextInput label="Логин*" name="login" type="text" />
              <TextInput label="Телефон*" name="phone" type="text" />
              <TextInput label="Email*" name="email" type="email" />
            </div>
            <div className="form-btn-group">
              <Button type="submit" addClass="cart_green">
                Готово
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
