/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import createProduct from '../../../api/createProduct';
import TextInput from '../Input/TextInput';
import FormikControl from '../FormikControl';
import styles from './CreateProductsForms.module.scss';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import { authorizationPopupAction } from '../../../store/madals/actions';

const CreateMicroForm = ({ currentCategory }) => {
  const dispatch = useDispatch();
  const handleCreateProduct = (values, { setSubmitting, resetForm }) => {
    const {
      category,

      brandName,
      brandValue,

      modelName,
      modelValue,

      articalName,
      articalValue,

      currentPriceName,
      currentPriceValue,

      previousPriceName,
      previousPriceValue,

      quantityName,
      quantityValue,

      hitName,
      hitValue,

      warantyName,
      warantyValue,
      description,
      imageUrl01,
      imageUrl02,
      imageUrl03,
      imageUrl04,
      // === CUSTOM FIELDS ===
      microTypeName,
      microTypeValue,
    } = values;
    setSubmitting(true);
    const newProduct = {
      category,
      currentPrice: currentPriceValue,
      previousPrice: previousPriceValue,
      quantity: quantityValue,
      hit: hitValue,
      brand: brandValue,
      model: modelValue,
      artical: articalValue,
      waranty: warantyValue,
      microType: microTypeValue,
      description,
      imageUrls: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
      // === CUSTOM FIELDS ===
      characteristics: {
        brand: [brandName, brandValue],
        model: [modelName, modelValue],
        artical: [articalName, articalValue],
        waranty: [warantyName, warantyValue],
        microTypeName: [microTypeName, microTypeValue],
      },
    };
    createProduct(newProduct).then((res) => {
      dispatch(authorizationPopupAction('Продукт создан успешно'));
      setSubmitting(false);
      resetForm();
    });
  };
  const productSchema = Yup.object().shape({
    brandValue: Yup.string().required('Is required'),
    modelValue: Yup.string().required('Is required'),
    articalValue: Yup.number().required('Is required'),
    currentPriceValue: Yup.number().required('Is required'),
    previousPriceValue: Yup.number().required('Is required'),
    quantityValue: Yup.number().required('Is required'),
    hitValue: Yup.string().required('Is required'),
    warantyValue: Yup.string().required('Is required'),
    // === CUSTOM FIELDS ==========
    microTypeValue: Yup.string().required('Is required'),

    // =================================
    description: Yup.string().required('Is required'),
    imageUrl01: Yup.string().required('Is required'),
    imageUrl02: Yup.string().required('Is required'),
    imageUrl03: Yup.string().required('Is required'),
    imageUrl04: Yup.string().required('Is required'),
  });
  const brandOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Azden">Azden</option>
      <option value="Boya">Boya</option>
      <option value="Saramonic">Saramonic</option>
    </>
  );
  const warantyOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="36">36</option>
    </>
  );
  const optionsHit = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="yes">Да</option>
      <option value="no">Нет</option>
    </>
  );
  // === CUSTOM FIELDS ==========
  const microTypeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Направленные">Направленные</option>
      <option value="Петличные">Петличные</option>
      <option value="Конвертеры">Конвертеры</option>
      <option value="Адаптеры">Адаптеры</option>
    </>
  );

  return (
    <div className={styles.FormBody}>
      <h1 className={styles.FormBodyTitle}>{currentCategory.name}</h1>
      <Formik
        initialValues={{
          categoryName: 'Идентификатор',
          category: currentCategory.id,

          brandName: 'Производитель',
          brandValue: '',

          modelName: 'Модель',
          modelValue: '',

          articalName: 'Артикул',
          articalValue: '',

          currentPriceName: 'Текущая цена',
          currentPriceValue: '',

          previousPriceName: 'Предыдущая цена',
          previousPriceValue: '',

          quantityName: 'Количество на складе',
          quantityValue: '',

          hitName: 'Хит продаж',
          hitValue: '',

          warantyName: 'Гарантия',
          warantyValue: '',

          description: '',
          imageUrl01: '',
          imageUrl02: '',
          imageUrl03: '',
          imageUrl04: '',
          // === CUSTOM FIELDS ===
          microTypeName: 'Тип микрофона',
          microTypeValue: '',
        }}
        onSubmit={handleCreateProduct}
        validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form">
            {formik.isSubmitting && (
              <div className="loaderWrapp">
                <Loader />
              </div>
            )}
            <div className={styles.productInputsWrapper}>
              <div className={styles.productInputsGroup}>
                <TextInput name="categoryName" type="text" disabled />
                <TextInput
                  name="category"
                  type="text"
                  value={currentCategory.id}
                  disabled
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="brandName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="brandValue"
                  options={brandOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="modelName" type="text" disabled />
                <TextInput name="modelValue" type="text" />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="articalName" type="text" disabled />
                <TextInput name="articalValue" type="number" />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="currentPriceName" type="text" disabled />
                <TextInput name="currentPriceValue" type="number" />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="previousPriceName" type="text" disabled />
                <TextInput name="previousPriceValue" type="number" />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="quantityName" type="text" disabled />
                <TextInput name="quantityValue" type="number" />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="hitName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="hitValue"
                  options={optionsHit}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="warantyName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="warantyValue"
                  options={warantyOptions}
                />
              </div>
              {/* ======= CUSTOM FIELDS ==== */}
              <div className={styles.productInputsGroup}>
                <TextInput name="microTypeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="microTypeValue"
                  options={microTypeOptions}
                />
              </div>
              <div className={styles.productTextInputsGroup}>
                <FormikControl
                  control="textarea"
                  label="Описание"
                  name="description"
                  type="text"
                />
              </div>
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
              <Button type="submit" addClass="admin-primary">
                Create product
              </Button>
              {/* <button type="reset" className="btn cart-body-order reset">
                Reset data
              </button> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateMicroForm;
