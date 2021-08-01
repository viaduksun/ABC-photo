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
import createCategory from '../../api/createCategory';
import TextInput from './Input/TextInput';
import FormikControl from './FormikControl';
import Button from '../UI/Button/Button';
import { setCatalog } from '../../store/admin/actions';

const CreateCategoryForm = () => {
  // const handleCreateCategory2 = () => {
  //   console.log('CREATE2');
  //   createProductLocalHost5000();
  // };
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
    const { id, name, path, parentId, imgUrl, description } = values;
    setSubmitting(true);
    const newCategory = {
      id,
      name,
      path,
      parentId,
      imgUrl,
      description,
    };
    createCategory(newCategory)
      .then((newCategory) => {
        dispatch(setCatalog());
        /* Do something with newProduct */
        console.log('Category was created successfully!', newCategory);
        alert('Category was created successfully!');
      })
      .catch((err) => {
        /* Do something with error, e.g. show error to user */
        console.log(err);
      });
    // console.log(newCategory);
    setSubmitting(false);
    resetForm();
  };
  const productSchema = Yup.object().shape({
    id: Yup.string().required('Is required'),
    name: Yup.string().required('Is required'),
    path: Yup.string().required('Is required'),
    parentId: Yup.string().required('Is required'),
    imgUrl: Yup.string().required('Is required'),
    description: Yup.string().required('Is required'),
  });

  return (
    <div className="formBlock create">
      <h2 className="form-name">Create new category</h2>
      <Formik
        initialValues={{
          id: '',
          name: '',
          path: '',
          parentId: '',
          imgUrl: '',
          description: '',
        }}
        onSubmit={handleCreateCategory}
        validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form">
            <div className="product-inputs-area">
              <TextInput label="Идентификатор" name="id" type="text" />
              <TextInput label="Название" name="name" type="text" />
              <TextInput
                label="Путь"
                name="path"
                type="text"
                placeholder="/products"
              />
              {/* <TextInput
                label="Родительская категория"
                name="parentId"
                type="text"
              /> */}
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
              {/* <TextInput
                label="Уровень вложенности"
                name="level"
                type="number"
              /> */}
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