/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import editProductApi from '../../api/editProduct';
import TextInput from './Input/TextInput';
import FormikControl from './FormikControl';
import { editProductModalClose } from '../../store/madals/actions';
import Button from '../UI/Button/Button';
import { editProduct } from '../../store/admin/actions';

const EditProduct = ({ product }) => {
  const formik = useFormikContext();
  const dispatch = useDispatch();
  const productId = product._id;

  const handleEditProduct = (values, { setSubmitting }) => {
    const {
      _id,
      brand,
      name,
      currentPrice,
      previousPrice,
      quantity,
      artical,
      hitSale,
      categories,
      waranty,
      type,
      set,
      megapixels,
      matrixType,
      matrixSize,
      screenDiagonal,
      sensorScreen,
      digitalMagnification,
      stabilization,
      opticalMagnification,
      focusDistance,
      description,
      imageUrl01,
      imageUrl02,
      imageUrl03,
      imageUrl04,
    } = values;
    setSubmitting(true);
    const newProduct = {
      _id,
      brand,
      name,
      currentPrice,
      previousPrice,
      quantity,
      artical,
      hitSale,
      categories,
      waranty,
      type,
      set,
      megapixels,
      matrixType,
      matrixSize,
      screenDiagonal,
      sensorScreen,
      digitalMagnification,
      stabilization,
      opticalMagnification,
      focusDistance,
      description,
      imageUrls: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
    };
    editProductApi(productId, newProduct);
    console.log(newProduct);
    setSubmitting(false);
    dispatch(editProductModalClose());
    dispatch(editProduct(newProduct));
  };
  const productSchema = Yup.object().shape({
    brand: Yup.string().required('Is required'),
    name: Yup.string().required('Is required'),
    currentPrice: Yup.string().required('Is required'),
    previousPrice: Yup.string().required('Is required'),
    quantity: Yup.string().required('Is required'),
    artical: Yup.string().required('Is required'),
    hitSale: Yup.string().required('Is required'),
    categories: Yup.string().required('Is required'),
    waranty: Yup.string().required('Is required'),
    type: Yup.string().required('Is required'),
    set: Yup.string().required('Is required'),
    megapixels: Yup.string().required('Is required'),
    matrixType: Yup.string().required('Is required'),
    screenDiagonal: Yup.string().required('Is required'),
    sensorScreen: Yup.string().required('Is required'),
    digitalMagnification: Yup.string().required('Is required'),
    stabilization: Yup.string().required('Is required'),
    opticalMagnification: Yup.string().required('Is required'),
    focusDistance: Yup.string().required('Is required'),
    description: Yup.string().required('Is required'),
    imageUrl01: Yup.string().required('Is required'),
    imageUrl02: Yup.string().required('Is required'),
    imageUrl03: Yup.string().required('Is required'),
    imageUrl04: Yup.string().required('Is required'),
  });

  return (
    <div className="formBlock create">
      <Formik
        initialValues={{
          _id: product._id,
          brand: product.brand,
          name: product.name,
          set: product.set,
          currentPrice: product.currentPrice,
          previousPrice: product.previousPrice,
          quantity: product.quantity,
          artical: product.artical,
          hitSale: product.hitSale,
          categories: product.categories,
          waranty: product.waranty,
          type: product.type,
          megapixels: product.megapixels,
          matrixType: product.matrixType,
          matrixSize: product.matrixSize,
          screenDiagonal: product.screenDiagonal,
          sensorScreen: product.sensorScreen,
          digitalMagnification: product.digitalMagnification,
          stabilization: product.stabilization,
          opticalMagnification: product.opticalMagnification,
          focusDistance: product.focusDistance,
          description: product.description,
          imageUrl01: product.imageUrls[0],
          imageUrl02: product.imageUrls[1],
          imageUrl03: product.imageUrls[2],
          imageUrl04: product.imageUrls[3],
        }}
        onSubmit={handleEditProduct}
        validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form">
            <div className="product-inputs-area">
              <TextInput label="" name="_id" type="hidden" />
              <TextInput label="Производитель" name="brand" type="text" />
              <TextInput label="Модель" name="name" type="text" />
              <TextInput
                label="Комплектация (c/без объектива)"
                name="set"
                type="text"
              />
              <TextInput label="Текущая цена" name="currentPrice" type="text" />
              <TextInput
                label="Предыдущая цена"
                name="previousPrice"
                type="text"
              />
              <TextInput
                label="Количество на складе"
                name="quantity"
                type="number"
              />
              <TextInput label="Артикул" name="artical" type="number" />
              <TextInput
                label="Хит продаж (да/нет)"
                name="hitSale"
                type="text"
              />
              <TextInput label="Категория" name="categories" type="text" />

              <TextInput label="Гарантия" name="waranty" type="number" />
              <TextInput label="Тип фотоаппарата" name="type" type="text" />
              <TextInput
                label="Количество мегапикселей"
                name="megapixels"
                type="text"
              />
              <TextInput label="Тип матрицы" name="matrixType" type="text" />
              <TextInput label="Размер матрицы" name="matrixSize" type="text" />
              <TextInput
                label="Диагональ экрана"
                name="screenDiagonal"
                type="text"
              />
              <TextInput
                label="Сенсорный экран"
                name="sensorScreen"
                type="text"
              />
              <TextInput
                label="Цифровой зум"
                name="digitalMagnification"
                type="text"
              />
              <TextInput
                label="Стабилизация"
                name="stabilization"
                type="text"
              />
              <TextInput
                label="Оптический зум"
                name="opticalMagnification"
                type="text"
              />
              <TextInput
                label="Фокусное расстояние"
                name="focusDistance"
                type="text"
              />
              <FormikControl
                control="textarea"
                label="Описание"
                name="description"
                type="text"
              />

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
              <Button type="submit" addClass="admin-edit">
                Apply changes
              </Button>
              {/* <button type="submit" className="btn admin-edit">
                Apply changes
              </button> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProduct;
