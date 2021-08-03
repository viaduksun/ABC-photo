/* eslint-disable no-alert */
/* eslint-disable no-tabs */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import styles from './ProfileBlock.module.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import TextInput from './TextInput';
import styles from './ProfileBlock.module.scss';
import Button from '../UI/Button/Button';
import editCustomerPassword from '../../api/editCustomerPassword';
import Loader from '../UI/Loader/Loader';

const ChangePassword = () => {
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);
  const [visibleThird, setVisibleThird] = useState(false);

  const handleSubmitForm = (values, { setSubmitting }) => {
    // eslint-disable-next-line object-curly-newline
    const { existPassword, newPassword, newPasswordRepeat } = values;
    const isFormValid = existPassword && newPassword && newPasswordRepeat;

    if (isFormValid) {
      setSubmitting(true);

      const form = {
        existPassword: values.existPassword,
        newPassword: values.newPassword,
        newPasswordRepeat: values.newPasswordRepeat,
      };
      const passwords = {
        password: existPassword,
        newPassword,
      };
      console.log(passwords);
      editCustomerPassword(passwords)
        .then((response) => {
          /* Do something with loggedInCustomer */
          console.log('editedCustomer', response);
          setSubmitting(false);
          if (response.data.password) {
            alert('Вы ввели неправильный текущий пароль');
          }
          if (response.data.message) {
            alert('Пароль изменен успешно');
          }
        })
        .catch((err) => {
          /* Do something with error */
          console.log(err);
        });
    }
  };

  const validate = Yup.object({
    existPassword: Yup.string()
      // *Прописать логику для подтверждения существующего пароля*
      // .oneOf(passwordExist, 'Вы ввели неправильный пароль')
      .required('Введите пароль'),
    newPassword: Yup.string()
      .min(7, 'Используйте более 7 символов ')
      .max(10, 'Используйте 10 символов ')
      .matches(/[a-zA-Z]/, 'Только латинские буквы')
      .required('Вы не ввели новый пароль'),
    newPasswordRepeat: Yup.string()
      .required('Вы не ввели новый пароль')
      .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают'),
  });

  return (
    <div className={styles.edit_Prpfile_Wrapper}>
      <h2>Смена пароля</h2>
      <Formik
        initialValues={{
          existPassword: '',
          newPassword: '',
          newPasswordRepeat: '',
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validate}
      >
        {(formik) => (
          <Form className={styles.formWrapper}>
            <div className={styles.inputsWrapper}>
              <div>
                <div className={styles.Password}>
                  <TextInput
                    label="Текущий пароль"
                    name="existPassword"
                    type={visibleFirst ? 'text' : 'password'}
                    position="relative"
                  />
                  <BsEye
                    display={visibleFirst ? 'block' : 'none'}
                    onClick={() => setVisibleFirst((visibility) => !visibility)}
                    className={styles.PasswordIcon}
                  />
                  <BsEyeSlash
                    display={visibleFirst ? 'none' : 'block'}
                    onClick={() => setVisibleFirst((visibility) => !visibility)}
                    className={styles.PasswordIcon}
                  />
                </div>
              </div>
              <div className={styles.Password}>
                <TextInput
                  label="Новый пароль"
                  name="newPassword"
                  type={visibleSecond ? 'text' : 'password'}
                />
                <BsEye
                  display={visibleSecond ? 'block' : 'none'}
                  onClick={() => setVisibleSecond((visibility) => !visibility)}
                  className={styles.PasswordIcon}
                />
                <BsEyeSlash
                  display={visibleSecond ? 'none' : 'block'}
                  onClick={() => setVisibleSecond((visibility) => !visibility)}
                  className={styles.PasswordIcon}
                />
              </div>
              <div className={styles.Password}>
                <TextInput
                  label="Подтверждение пароля"
                  name="newPasswordRepeat"
                  type={visibleThird ? 'text' : 'password'}
                />
                <BsEye
                  display={visibleThird ? 'block' : 'none'}
                  onClick={() => setVisibleThird((visibility) => !visibility)}
                  className={styles.PasswordIcon}
                />
                <BsEyeSlash
                  display={visibleThird ? 'none' : 'block'}
                  onClick={() => setVisibleThird((visibility) => !visibility)}
                  className={styles.PasswordIcon}
                />
              </div>
            </div>
            <div className="form-btn-group">
              <Button
                addClass="cart_green"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Готово
              </Button>
            </div>
            {formik.isSubmitting && <Loader />}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
