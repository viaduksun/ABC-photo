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

const CreateLensesProductForm = ({ currentCategory }) => {
  const dispatch = useDispatch();
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
      lenseTypeName,
      lenseTypeValue,

      bionetName,
      bionetValue,

      focusName,
      focusValue,

      apertureName,
      apertureValue,

      focusTypeName,
      focusTypeValue,
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
      lenseType: lenseTypeValue,
      bionet: bionetValue,
      focus: focusValue,
      aperture: apertureValue,
      focusType: focusTypeValue,
      description,
      imageUrls: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
      // === CUSTOM FIELDS ===
      characteristics: {
        brand: [brandName, brandValue],
        model: [modelName, modelValue],
        artical: [articalName, articalValue],
        waranty: [warantyName, warantyValue],
        lenseType: [lenseTypeName, lenseTypeValue],
        bionet: [bionetName, bionetValue],
        focus: [focusName, focusValue],
        aperture: [apertureName, apertureValue],
        focusType: [focusTypeName, focusTypeValue],
      },
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
    lenseTypeValue: Yup.string().required('Is required'),
    bionetValue: Yup.string().required('Is required'),
    focusValue: Yup.string().required('Is required'),
    apertureValue: Yup.string().required('Is required'),
    focusTypeValue: Yup.string().required('Is required'),
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
      <option value="Canon">Canon</option>
      <option value="Nikon">Nikon</option>
      <option value="Panasonic">Panasonic</option>
      <option value="Sony">Sony</option>
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
      <option value="yes">????</option>
      <option value="no">??????</option>
    </>
  );
  // === CUSTOM FIELDS ==========
  const lenseTypeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="??????????????????????????">??????????????????????????</option>
      <option value="????????????????????">????????????????????</option>
      <option value="?????????? ????????">?????????? ????????</option>
      <option value="??????????????????????????????????????">??????????????????????????????????????</option>
    </>
  );
  const bionetOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="Canon">Canon</option>
      <option value="Fujifilm">Fujifilm</option>
      <option value="Nikon">Nikon</option>
      <option value="Panasonic">Panasonic</option>
    </>
  );
  const focusOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="????????????????????">????????????????????</option>
      <option value="????????????????????">????????????????????</option>
    </>
  );
  const apertureOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="2.8 (????????????????????????)">2.8 (????????????????????????)</option>
      <option value="?????????? 3.2 (??????????????????????)">?????????? 3.2 (??????????????????????)</option>
      <option value="???? 2.8 (??????????????????????????????????)">
        ???? 2.8 (??????????????????????????????????)
      </option>
    </>
  );
  const focusTypeOptions = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="????????">????????</option>
      <option value="????????????">????????????</option>
    </>
  );

  return (
    <div className={styles.FormBody}>
      <h1 className={styles.FormBodyTitle}>{currentCategory.name}</h1>
      <Formik
        initialValues={{
          categoryName: '??????????????????????????',
          category: currentCategory.id,

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

          hitName: '?????? ????????????',
          hitValue: '',

          warantyName: '????????????????',
          warantyValue: '',

          description: '',
          imageUrl01: '',
          imageUrl02: '',
          imageUrl03: '',
          imageUrl04: '',
          // === CUSTOM FIELDS ===
          lenseTypeName: '?????? ??????????????????',
          lenseTypeValue: '',

          bionetName: '?????? ????????????????',
          bionetValue: '',

          focusName: '???????????????? ????????????????????',
          focusValue: '',

          apertureName: '??????????????????',
          apertureValue: '',

          focusTypeName: '???????????? ??????????????????????',
          focusTypeValue: '',
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
                <TextInput name="lenseTypeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="lenseTypeValue"
                  options={lenseTypeOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="bionetName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="bionetValue"
                  options={bionetOptions}
                />
              </div>

              <div className={styles.productInputsGroup}>
                <TextInput name="focusName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="focusValue"
                  options={focusOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="apertureName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="apertureValue"
                  options={apertureOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
                <TextInput name="focusTypeName" type="text" disabled />
                <FormikControl
                  control="selectSmall"
                  name="focusTypeValue"
                  options={focusTypeOptions}
                />
              </div>
              <div className={styles.productInputsGroup}>
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

export default CreateLensesProductForm;
