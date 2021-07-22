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
// import createProductLocalHost5000 from '../../../api/createProductLocalHost5000';
import TextInput from '../Input/TextInput';
import FormikControl from '../FormikControl';
import styles from './CreateProductsForms.module.scss';
import Button from '../../UI/Button/Button';

const CreateVideoCameraProductForm = ({ currentCategory }) => {
  // const handleCreateProduct2 = () => {
  //   console.log('CREATE2');
  //   createProductLocalHost5000();
  // };
  // console.log(currentCategory);
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
      recordTypeName,
      recordTypeValue,

      lenceTypeName,
      lenceTypeValue,

      formatName,
      formatValue,

      resolutionName,
      resolutionValue,

      connectorsName,
      connectorsValue,
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
      recordType: recordTypeValue,
      lenceType: lenceTypeValue,
      format: formatValue,
      resolution: resolutionValue,
      connectors: connectorsValue,
      waranty: warantyValue,
      description,
      imageUrls: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
      // === CUSTOM FIELDS ===
      characteristics: {
        brand: [brandName, brandValue],
        model: [modelName, modelValue],
        artical: [articalName, articalValue],
        recordType: [recordTypeName, recordTypeValue],
        lenceType: [lenceTypeName, lenceTypeValue],
        format: [formatName, formatValue],
        resolution: [resolutionName, resolutionValue],
        connectors: [connectorsName, connectorsValue],
        waranty: [warantyName, warantyValue],
      },
    };
    createProduct(newProduct);
    // console.log(newProduct);
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
    recordTypeValue: Yup.string().required('Is required'),
    lenceTypeValue: Yup.string().required('Is required'),
    formatValue: Yup.string().required('Is required'),
    resolutionValue: Yup.string().required('Is required'),
    connectorsValue: Yup.string().required('Is required'),
    // =================================
    description: Yup.string().required('Is required'),
    imageUrl01: Yup.string().required('Is required'),
    imageUrl02: Yup.string().required('Is required'),
    imageUrl03: Yup.string().required('Is required'),
    imageUrl04: Yup.string().required('Is required'),
  });

  const optionsHit = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="yes">Да</option>
      <option value="no">Нет</option>
    </>
  );
  const connectorsOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="HDMI">HDMI</option>
      <option value="USB">USB</option>
      <option value="MICRO">для микрофона</option>
    </>
  );
  const formatOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="AVCHD">AVCHD</option>
      <option value="MOV">MOV</option>
      <option value="MP4">MP4</option>
    </>
  );
  const lenceTypeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Leica Dicomar">Leica Dicomar</option>
      <option value="G Lens HXR-MC2500">G Lens HXR-MC2500</option>
    </>
  );
  const recordTypeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="flash">Flash</option>
      <option value="SSD-диск">SSD-диск</option>
    </>
  );
  const resolutionOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="2">3264 x 2448 пикс.</option>
      <option value="3">4608 x 3456 пикс.</option>
    </>
  );
  const brandOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="1">Canon</option>
      <option value="2">Panasonic</option>
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

          recordTypeName: 'Носитель для записи',
          recordTypeValue: '',

          lenceTypeName: 'Объектив',
          lenceTypeValue: '',

          formatName: 'Формат видеофайлов',
          formatValue: '',

          resolutionName: 'Разрешение видеозаписи',
          resolutionValue: '',

          connectorsName: 'Разъёмы',
          connectorsValue: '',

          description: '',
          imageUrl01: '',
          imageUrl02: '',
          imageUrl03: '',
          imageUrl04: '',
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
                <TextInput name="recordTypeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="recordTypeValue"
                  options={recordTypeOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="lenceTypeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="lenceTypeValue"
                  options={lenceTypeOptions}
                />
              </div>

              <div className={styles.productInputsGroup}>
                <TextInput name="formatName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="formatValue"
                  options={formatOptions}
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
                <TextInput name="connectorsName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="connectorsValue"
                  options={connectorsOptions}
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

export default CreateVideoCameraProductForm;
