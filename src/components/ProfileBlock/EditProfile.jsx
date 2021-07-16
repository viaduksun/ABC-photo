/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import styles from './ProfileBlock.module.scss';
import Button from '../UI/Button/Button';

const EditProfile = () => {
  const handleSubmitForm = (values, { setSubmitting }) => {
    const { firstName, lastName, sex, birth, email, phone } = values;
    // const isPasswordMatch = newPassword === confirmPassword;
    const isFormValid = firstName && lastName && sex && birth && email && phone;

    if (isFormValid) {
      setSubmitting(true);

      setSubmitting(false);
      const form = {
        firstName: values.firstName,
        lastName: values.lastName,
        age: values.age,
        address: values.address,
        phone: values.phone,
      };
      console.log(form);
    }
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    age: Yup.number()
      .max(99, 'Must be 2 characters or less')
      .required('Age is required'),
    sex: Yup.string()
      .max(40, 'Must be 40 characters or less')
      .required('Address is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Phone is required'),
  });

  console.log('Edit');
  return (
    <div className={styles.edit_Prpfile_Wrapper}>
      <h2>Профиль пользователя</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          sex: '',
          email: '',
          phone: '',
          birth: '',
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validate}
      >
        {(formik) => (
          <Form className={styles.formWrapper}>
            <div className={styles.inputsWrapper}>
              <TextInput label="Имя" name="firstName" type="text" />
              <TextInput label="Фамилия" name="lastName" type="text" />
              <TextInput label="Пол" name="sex" type="text" />
              <TextInput label="Телефон" name="phone" type="text" />
              <TextInput label="Email" name="email" type="email" />
              <TextInput label="Дата рождения" name="birth" type="select" />
            </div>
            <div className="form-btn-group">
              <Button addClass="cart_green">Готово</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
