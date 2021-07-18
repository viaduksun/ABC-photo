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
import createProduct from '../../../api/createProduct';
import TextInput from '../Input/TextInput';
import FormikControl from '../FormikControl';
import styles from './CreateProductsForms.module.scss';
import Button from '../../UI/Button/Button';

const CreateActionCameraProductForm = ({ currentCategory }) => {
  const handleCreateProduct = (values, { setSubmitting, resetForm }) => {
    console.log(values);
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
      matrixName,
      matrixValue,

      resolutionName,
      resolutionValue,

      featuresName,
      featuresValue,

      wirelessName,
      wirelessValue,

      colorName,
      colorValue,
    } = values;
    setSubmitting(true);
    const newProduct = {
      category,
      brand: [brandName, brandValue],
      model: [modelName, modelValue],
      artical: [articalName, articalValue],
      currentPrice: [currentPriceName, currentPriceValue],
      previousPrice: [previousPriceName, previousPriceValue],
      quantity: [quantityName, quantityValue],
      hit: [hitName, hitValue],
      waranty: [warantyName, warantyValue],
      description,
      imageUrls: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
      // === CUSTOM FIELDS ===
      matrix: [matrixName, matrixValue],

      features: [featuresName, featuresValue],

      wireless: [wirelessName, wirelessValue],

      cameraColor: [colorName, colorValue],

      resolution: [resolutionName, resolutionValue],
    };
    createProduct(newProduct);
    console.log(newProduct);
    setSubmitting(false);
    resetForm();
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
    matrixValue: Yup.string().required('Is required'),
    resolutionValue: Yup.string().required('Is required'),
    featuresValue: Yup.string().required('Is required'),
    wirelessValue: Yup.string().required('Is required'),
    colorValue: Yup.string().required('Is required'),
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
      <option value="Gopro">Gopro</option>
      <option value="Sony">Sony</option>
      <option value="Airon">Airon</option>
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
  const resolutionOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="2">1920 x 1080 пикс.</option>
      <option value="2">3264 x 2448 пикс.</option>
      <option value="3">4608 x 3456 пикс.</option>
    </>
  );
  const matrixOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="8">8</option>
      <option value="12">12</option>
      <option value="23">23</option>
    </>
  );
  const featuresOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="HDR">HDR</option>
      <option value="WDR">WDR</option>
      <option value="быстрая зарядка">быстрая зарядка</option>
      <option value="голосовое управление">голосовое управление</option>
    </>
  );
  const wirelessOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Bluetooth">Bluetooth</option>
      <option value="GPS">GPS</option>
      <option value="Wi-Fi">Wi-Fi</option>
    </>
  );
  const colorOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Белый">Белый</option>
      <option value="Белый">Серый</option>
      <option value="Белый">Синий</option>
      <option value="Белый">Черный</option>
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
          matrixName: 'Разрешение матрицы',
          matrixValue: '',

          resolutionName: 'Максимальное разрешение съемки',
          resolutionValue: '',

          featuresName: 'Особенности',
          featuresValue: '',

          wirelessName: 'Беспроводные коммуникации',
          wirelessValue: '',

          colorName: 'Цвет',
          colorValue: '',
        }}
        onSubmit={handleCreateProduct}
        validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form">
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
                <TextInput name="matrixName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="matrixValue"
                  options={matrixOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="resolutionName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="resolutionValue"
                  options={resolutionOptions}
                />
              </div>

              <div className={styles.productInputsGroup}>
                <TextInput name="featuresName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="featuresValue"
                  options={featuresOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="wirelessName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="wirelessValue"
                  options={wirelessOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="colorName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="colorValue"
                  options={colorOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
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

export default CreateActionCameraProductForm;
