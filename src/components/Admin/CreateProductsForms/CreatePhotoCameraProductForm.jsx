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
// import createProductLocalHost5000 from '../../../api/createProductLocalHost5000';
import TextInput from '../Input/TextInput';
import FormikControl from '../FormikControl';
import styles from './CreateProductsForms.module.scss';
import Button from '../../UI/Button/Button';
import { authorizationPopupAction } from '../../../store/madals/actions';
import Loader from '../../UI/Loader/Loader';

const CreatePhotoCameraProductForm = ({ currentCategory }) => {
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
    createProduct(newProduct).then((res) => {
      dispatch(authorizationPopupAction('?????????????? ???????????? ??????????????'));
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
      <option value="?? ????????????????????" selected>
        ?? ????????????????????
      </option>
      <option value="?????? ??????????????????">?????? ??????????????????</option>
    </>
  );
  const optionsHit = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="yes">????</option>
      <option value="no">??????</option>
    </>
  );
  const optionsType = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="????????????????????">????????????????????</option>
      <option value="????????????????????">????????????????????</option>
      <option value="???????????????????? ????????????">???????????????????? ????????????</option>
      <option value="??????????????????">??????????????????</option>
      <option value="????????????????">????????????????</option>
    </>
  );
  const optionsMatrixType = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="CCD (??????)">CCD (??????)</option>
      <option value="CMOS (????????)">CMOS (????????)</option>
      <option value="Live-MOS (NMOS)">Live-MOS (NMOS)</option>
    </>
  );
  const optionsMatrixSize = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="1` (13.2 ?? 8.8 ????)">1" (13.2 ?? 8.8 ????)</option>
      <option value="1/3` (4.52 ?? 3.39 ????)">1/3" (4.52 ?? 3.39 ????)</option>
      <option value="APS-C (22.3 ?? 14.8 ????)">APS-C (22.3 ?? 14.8 ????)</option>
      <option value="Full Frame (36 ?? 24 ????)">Full Frame (36 ?? 24 ????)</option>
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
      <option value="????">????</option>
      <option value="??????">??????</option>
    </>
  );
  const screenBraicingOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="??????????????????">??????????????????</option>
      <option value="????????????????????">????????????????????</option>
      <option value="??????????????????????????">??????????????????????????</option>
    </>
  );
  const hotShoeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="????">????</option>
      <option value="??????">??????</option>
    </>
  );
  const maxSizeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="1280 x 720 ????????.">1280 x 720 ????????.</option>
      <option value="3264 x 2448 ????????.">3264 x 2448 ????????.</option>
      <option value="4608 x 3456 ????????.">4608 x 3456 ????????.</option>
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
          categoryName: '??????????????????????????',
          category: 'photocameras',

          brandName: '??????????????????????????',
          brandValue: '',

          modelName: '????????????',
          modelValue: '',

          articalName: '??????????????',
          articalValue: '',

          currentPriceName: '?????????????? ????????',
          currentPriceValue: '',

          previousPriceName: '???????????????????? ????????',
          previousPriceValue: '',

          quantityName: '???????????????????? ???? ????????????',
          quantityValue: '',

          setName: '????????????????????????',
          setValue: '',

          hitName: '?????? ????????????',
          hitValue: '',

          warantyName: '????????????????',
          warantyValue: '',

          typeName: '?????? ????????????????????????',
          typeValue: '',

          matrixTypeName: '?????? ??????????????',
          matrixTypeValue: '',

          matrixSizeName: '???????????? ??????????????',
          matrixSizeValue: '',

          megapixelsName: '???????????????????? ????????????????????????',
          megapixelsValue: '',

          sensorScreenName: '?????????????????? ????-??????????',
          sensorScreenValue: '',

          screenBraicingName: '?????????????????? ????-??????????????',
          screenBraicingValue: '',

          hotShoeName: '???????????????? ?????????????? ?????? ?????????????? ??????????????',
          hotShoeValue: '',

          maxSizeName: '???????????????????????? ???????????? ??????????????????????',
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
                  label="????????????????"
                  name="description"
                  type="text"
                />
              </div>
              <TextInput
                label="???????????? ???? ???????????????????? 1"
                name="imageUrl01"
                type="text"
              />
              <TextInput
                label="???????????? ???? ???????????????????? 2"
                name="imageUrl02"
                type="text"
              />
              <TextInput
                label="???????????? ???? ???????????????????? 3"
                name="imageUrl03"
                type="text"
              />
              <TextInput
                label="???????????? ???? ???????????????????? 4"
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
