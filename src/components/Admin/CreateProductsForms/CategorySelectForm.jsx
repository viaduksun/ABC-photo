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

const SelectCategoryForm = () => {
  console.log('CreateProductsFormContainer');
  const catalog = useSelector((state) => state.admin.catalog);

  const optionPlaceholder = (
    <option value="" selected disabled hidden>
      Выберите категорию продукта
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
  const handleSelect = (values, { setSubmitting }) => {
    console.log(values);
    const { parentId } = values;
    setSubmitting(true);
    const newProduct = {
      parentId,
    };

    console.log(newProduct);
    setSubmitting(false);
  };
  const productSchema = Yup.object().shape({
    parentId: Yup.string().required('Is required'),
  });

  return (
    <div className="formBlock create">
      <Formik
        initialValues={{
          parentId: '',
        }}
        onSubmit={handleSelect}
        // validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form">
            <div className="product-inputs-area">
              <FormikControl
                control="select"
                label="Родительская категория"
                name="parentId"
                type="select"
                options={optionsMainCategory}
              />
            </div>
            <div className="form-btn-group">
              <button type="submit" className="btn cart-body-order">
                Select
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SelectCategoryForm;
