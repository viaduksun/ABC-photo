/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import FormikControl from '../FormikControl';
import Button from '../../UI/Button/Button';
import styles from './CreateProductsForms.module.scss';

const SelectCategoryForm = ({ handleSelect }) => {
  console.log('CreateProductsFormContainer');
  const catalog = useSelector((state) => state.admin.catalog);
  console.log(catalog);
  const optionPlaceholder = (
    <option value="" disabled hidden>
      Выберите категорию для получения шаблона формы создания продукта
    </option>
  );
  const optionsMainCategory = catalog.map((category) => {
    if (category.parentId !== 'null') {
      return (
        <option value={category._id} key={category._id}>
          {category.name}
        </option>
      );
    }
    return null;
  });
  optionsMainCategory.push(optionPlaceholder);

  // const handleSelect = (values) => {
  //   console.log(values);
  // };
  // const handleOnChange = (values) => {
  //   console.log('CHANGE', values);
  // };
  // =================================================================
  const productSchema = Yup.object().shape({
    parentId: Yup.string().required('Is required'),
  });

  return (
    <div className={styles.FormBody}>
      <Formik
        initialValues={{
          categoryId: '',
        }}
        onSubmit={handleSelect}

        // validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form">
            <div className="product-inputs-area">
              <FormikControl
                control="select"
                name="categoryId"
                type="select"
                options={optionsMainCategory}
                // handleOnChange={handleOnChange}
              />
            </div>
            <div className="form-btn-group">
              <Button type="submit" addClass="admin-primary">
                Выбрать
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SelectCategoryForm;
