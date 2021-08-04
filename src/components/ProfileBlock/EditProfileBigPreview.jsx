/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { BsCaretLeft } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import TextInput from './TextInput';
import styles from './ProfileBlock.module.scss';
import Button from '../UI/Button/Button';
import { updateCustomerAction } from '../../store/admin/actions';
import uploadImg from '../../api/uploadImg';
import Loader from '../UI/Loader/Loader';

const EditProfile = () => {
  const dispatch = useDispatch();
  const [imageSelected, setImageSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [previewSource, setPreviewSource] = useState('');
  const [previewBigActive, setPreviewBigActive] = useState(false);
  const [cloudUrl, setCloudUrl] = useState('');
  const currentUser = useSelector((state) => state.admin.currentUser);

  const previewFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setPreviewBigActive(true);
    };
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // setImageSelected(file);
    previewFile(file);
  };

  const handleUploadImg = () => {
    setIsLoading(true);
    if (!previewSource) return;
    console.log('UPLOAD CLICK');
    // console.log('previewSource', previewSource);
    // uploadImg(imageSelected)
    uploadImg(previewSource)
      .then((result) => {
        setPreviewBigActive(false);
        console.log('upload: ', result);
        setCloudUrl(result.data.url);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handleUploadImg = () => {
  //   if (!previewSource) return;
  //   uploadImg(previewSource)
  //     .then((result) => {
  //       console.log('upload: ', result);
  //       setCloudUrl(result.data.url);
  //     })
  //     .catch((err) => {
  //       console.log(
  //         err
  //       ); /* Show error to customer, may be incorrect password or something else */
  //     });
  // };
  const handleSubmitForm = (values, { setSubmitting }) => {
    console.log('SUBMIT', cloudUrl);
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
        avatar: cloudUrl,
      };
      console.log(form);
      dispatch(updateCustomerAction(form));
      setSubmitting(false);
      setPreviewBigActive(false);
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
          avatar: cloudUrl,
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validate}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formWrapper}>
            <div className={styles.inputsWrapper}>
              <TextInput label="Имя*" name="firstName" type="text" />
              <TextInput label="Фамилия*" name="lastName" type="text" />
              <TextInput label="Логин*" name="login" type="text" />
              <TextInput label="Телефон*" name="phone" type="text" />
              <TextInput label="Емэйл*" name="email" type="email" />
              <div className={styles.avatarBlockWrapper}>
                <p className={styles.avatarBlockTitle}>Аватар</p>
                <div className={styles.avatarBlock}>
                  {previewSource && previewBigActive && (
                    <div className={styles.previewAvatarBigWrapper}>
                      <div className={styles.previewAvatarBig}>
                        <img src={previewSource} alt="avatar" />
                      </div>
                    </div>
                  )}
                  <div className={styles.previewAvatar}>
                    {previewSource && <img src={previewSource} alt="avatar" />}
                    {!previewSource && currentUser.avatar && (
                      <img src={currentUser.avatar} alt="avatar" />
                    )}
                    {!previewSource && !currentUser.avatar && (
                      <FaUserAlt className={styles.previewAvatarIcon} />
                    )}
                  </div>
                  <input
                    type="file"
                    onChange={handleFileInputChange}
                    className={styles.fileInput}
                    id="upload"
                  />
                  <label htmlFor="upload" className={styles.fileInputLabel}>
                    <BsCaretLeft className={styles.fileSelectIcon} />
                    Выберите файл
                  </label>

                  <Button
                    type="button"
                    onClick={handleUploadImg}
                    addClass="btn-small"
                  >
                    Применить
                  </Button>
                </div>
              </div>
            </div>
            <div className="form-btn-group">
              <Button
                type="submit"
                addClass="cart_green"
                disabled={isSubmitting}
              >
                Готово
              </Button>
            </div>
            {isSubmitting && (
              <div className={styles.loaderWrapper}>
                <Loader />
              </div>
            )}
          </Form>
        )}
      </Formik>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default EditProfile;
