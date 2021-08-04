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

const CreatePhotoCameraProductForm = ({ currentCategory }) => {
  // const handleCreateProduct2 = () => {
  //   console.log('CREATE2');
  //   createProductLocalHost5000();
  // };
  console.log(currentCategory);
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

      setName,
      setValue,

      hitName,
      hitValue,

      warantyName,
      warantyValue,

      typeName,
      typeValue,

      matrixTypeName,
      matrixTypeValue,

      matrixSizeName,
      matrixSizeValue,

      megapixelsName,
      megapixelsValue,

      sensorScreenName,
      sensorScreenValue,

      screenBraicingName,
      screenBraicingValue,

      hotShoeName,
      hotShoeValue,

      maxSizeName,
      maxSizeValue,

      description,
      imageUrl01,
      imageUrl02,
      imageUrl03,
      imageUrl04,
    } = values;
    setSubmitting(true);
    const newProduct = {
      category,
      currentPrice: currentPriceValue,
      previousPrice: previousPriceValue,
      quantity: quantityValue,
      hit: hitValue,
      artical: articalValue,
      brand: brandValue,
      model: modelValue,
      set: setValue,
      type: typeValue,
      matrixType: matrixTypeValue,
      matrixSize: matrixSizeValue,
      megapixels: megapixelsValue,
      sensorScreen: sensorScreenValue,
      screenBraicing: screenBraicingValue,
      hotShoe: hotShoeValue,
      maxSize: maxSizeValue,
      characteristics: {
        artical: [articalName, articalValue],
        brand: [brandName, brandValue],
        model: [modelName, modelValue],
        set: [setName, setValue],
        type: [typeName, typeValue],
        matrixType: [matrixTypeName, matrixTypeValue],
        matrixSize: [matrixSizeName, matrixSizeValue],
        megapixels: [megapixelsName, megapixelsValue],
        sensorScreen: [sensorScreenName, sensorScreenValue],
        screenBraicing: [screenBraicingName, screenBraicingValue],
        hotShoe: [hotShoeName, hotShoeValue],
        maxSize: [maxSizeName, maxSizeValue],
        waranty: [warantyName, warantyValue],
      },
      description,
      imageUrls: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
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
    setValue: Yup.string().required('Is required'),
    typeValue: Yup.string().required('Is required'),
    matrixTypeValue: Yup.string().required('Is required'),
    matrixSizeValue: Yup.string().required('Is required'),
    megapixelsValue: Yup.string().required('Is required'),
    sensorScreenValue: Yup.string().required('Is required'),
    screenBraicingValue: Yup.string().required('Is required'),
    hotShoeValue: Yup.string().required('Is required'),
    maxSizeValue: Yup.string().required('Is required'),
    // =================================
    description: Yup.string().required('Is required'),
    imageUrl01: Yup.string().required('Is required'),
    imageUrl02: Yup.string().required('Is required'),
    imageUrl03: Yup.string().required('Is required'),
    imageUrl04: Yup.string().required('Is required'),
  });
  const optionsSet = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="С объективом" selected>
        С объективом
      </option>
      <option value="Без объектива">Без объектива</option>
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
  const optionsType = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Зеркальный">Зеркальный</option>
      <option value="Компактный">Компактный</option>
      <option value="Мгновенной печати">Мгновенной печати</option>
      <option value="Системный">Системный</option>
      <option value="Суперзум">Суперзум</option>
    </>
  );
  const optionsMatrixType = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="CCD (ПЗС)">CCD (ПЗС)</option>
      <option value="CMOS (КМОП)">CMOS (КМОП)</option>
      <option value="Live-MOS (NMOS)">Live-MOS (NMOS)</option>
    </>
  );
  const optionsMatrixSize = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="1` (13.2 х 8.8 мм)">1" (13.2 х 8.8 мм)</option>
      <option value="1/3` (4.52 х 3.39 мм)">1/3" (4.52 х 3.39 мм)</option>
      <option value="APS-C (22.3 х 14.8 мм)">APS-C (22.3 х 14.8 мм)</option>
      <option value="Full Frame (36 х 24 мм)">Full Frame (36 х 24 мм)</option>
    </>
  );
  const optionsMegapixels = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="8">8</option>
      <option value="16">16</option>
      <option value="21">21</option>
      <option value="34">34</option>
    </>
  );
  const optionsSensorScreen = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Да">Да</option>
      <option value="Нет">Нет</option>
    </>
  );
  const screenBraicingOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Наклонный">Наклонный</option>
      <option value="Поворотный">Поворотный</option>
      <option value="Фиксированный">Фиксированный</option>
    </>
  );
  const hotShoeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Да">Да</option>
      <option value="Нет">Нет</option>
    </>
  );
  const maxSizeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="1280 x 720 пикс.">1280 x 720 пикс.</option>
      <option value="3264 x 2448 пикс.">3264 x 2448 пикс.</option>
      <option value="4608 x 3456 пикс.">4608 x 3456 пикс.</option>
    </>
  );
  const brandOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Canon">Canon</option>
      <option value="Nikon">Nikon</option>
      <option value="Sony">Sony</option>
      <option value="Olympus">Olympus</option>
      <option value="Fuji">Fuji</option>
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
          category: 'photocameras',

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

          setName: 'Комплектация',
          setValue: '',

          hitName: 'Хит продаж',
          hitValue: '',

          warantyName: 'Гарантия',
          warantyValue: '',

          typeName: 'Тип фотоаппарата',
          typeValue: '',

          matrixTypeName: 'Тип матрицы',
          matrixTypeValue: '',

          matrixSizeName: 'Размер матрицы',
          matrixSizeValue: '',

          megapixelsName: 'Количество мегапикселей',
          megapixelsValue: '',

          sensorScreenName: 'Сенсорный ЖК-экран',
          sensorScreenValue: '',

          screenBraicingName: 'Крепление ЖК-дисплея',
          screenBraicingValue: '',

          hotShoeName: '«Горячий башмак» для внешней вспышки',
          hotShoeValue: '',

          maxSizeName: 'Максимальный размер изображения',
          maxSizeValue: '',

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
              <div className={styles.productInputsGroup}>
                <TextInput name="setName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="setValue"
                  options={optionsSet}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="typeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="typeValue"
                  options={optionsType}
                />
              </div>

              <div className={styles.productInputsGroup}>
                <TextInput name="matrixTypeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="matrixTypeValue"
                  options={optionsMatrixType}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="matrixSizeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="matrixSizeValue"
                  options={optionsMatrixSize}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="megapixelsName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="megapixelsValue"
                  options={optionsMegapixels}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="sensorScreenName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="sensorScreenValue"
                  options={optionsSensorScreen}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="screenBraicingName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="screenBraicingValue"
                  options={screenBraicingOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="hotShoeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="hotShoeValue"
                  options={hotShoeOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="maxSizeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="maxSizeValue"
                  options={maxSizeOptions}
                />
              </div>
              <div className={styles.productTextsGroup}>
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

export default CreatePhotoCameraProductForm;
