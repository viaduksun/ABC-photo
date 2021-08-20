/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import createCategory from '../../../api/createCategory';
import TextInput from '../Input/TextInput';
import FormikControl from '../FormikControl';
import Button from '../../UI/Button/Button';
import { setCatalog } from '../../../store/admin/actions';
import styles from './CreateCategory.module.scss';
import { authorizationPopupAction } from '../../../store/madals/actions';
import Loader from '../../UI/Loader/Loader';

const CreateCategoryForm = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.admin.catalog);
  const optionPlaceholder = (
    <option value="" selected disabled hidden>
      Выберите родительскую категорию
    </option>
  );
  const optionCategoryNull = (
    <option value="null">Ссылка верхнего уровня</option>
  );
  const optionsMainCategory = catalog.map((category) => {
    if (category.parentId === 'null') {
      return (
        <option value={category._id} key={category.value}>
          {category.name}
        </option>
      );
    }
    return null;
  });
  optionsMainCategory.push(optionCategoryNull, optionPlaceholder);
  // ========= CREATE FUNC =================
  const handleCreateCategory = (values, { setSubmitting, resetForm }) => {
    console.log('FORM', values);
    const { id, name, parentId, imgUrl, description } = values;
    setSubmitting(true);
    const newCategory = {
      id,
      name,
      parentId,
      imgUrl,
      description,
    };
    createCategory(newCategory)
      .then((newCategory) => {
        dispatch(setCatalog());
        /* Do something with newProduct */
        dispatch(authorizationPopupAction('Новая категория создана успешно'));
        setSubmitting(false);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const productSchema = Yup.object().shape({
    id: Yup.string().required('Is required'),
    name: Yup.string().required('Is required'),
    parentId: Yup.string().required('Is required'),
    imgUrl: Yup.string().required('Is required'),
    description: Yup.string(),
  });

  return (
    <div className={styles.formBlock}>
      <h2 className={styles.formBlockTitle}>Создать категорию</h2>
      <Formik
        initialValues={{
          id: '',
          name: '',
          parentId: '',
          imgUrl: '',
          description: '',
        }}
        onSubmit={handleCreateCategory}
        validationSchema={productSchema}
      >
        {(formik) => (
          <Form className={styles.formBody}>
            {formik.isSubmitting && (
              <div className="loaderWrapp">
                <Loader />
              </div>
            )}
            <div className={styles.inputsWrapper}>
              <TextInput label="Идентификатор" name="id" type="text" />
              <TextInput label="Название" name="name" type="text" />
              <FormikControl
                control="select"
                label="Родительская категория"
                name="parentId"
                type="select"
                options={optionsMainCategory}
              />
              <TextInput label="Изображение" name="imgUrl" type="text" />
              <FormikControl
                control="textarea"
                label="Описание"
                name="description"
                type="text"
              />
            </div>
            <div className="form-btn-group">
              <Button type="submit" addClass="admin-primary">
                Create
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCategoryForm;
