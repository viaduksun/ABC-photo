/* eslint-disable no-underscore-dangle */
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
import { useDispatch, useSelector } from 'react-redux';
import editCategory from '../../../api/editCategory';
import TextInput from '../Input/TextInput';
import FormikControl from '../FormikControl';
import { editCategoryAction } from '../../../store/admin/actions';
import { authorizationPopupAction } from '../../../store/madals/actions';
import Loader from '../../UI/Loader/Loader';

const EditCategoryForm = ({ currentCategory }) => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.admin.catalog);

  // ===== getting parent category name
  const parentCategory = currentCategory.parentId;

  // ==== Gettig main categories for select menu ===
  const optionCategoryNull = <option value="null">---</option>;
  const optionsMainCategory = catalog.map((category) => {
    if (category.parentId === 'null') {
      return (
        <option value={category.name} key={category.value}>
          {category.name}
        </option>
      );
    }
    return null;
  });
  optionsMainCategory.push(optionCategoryNull);
  // =============================================
  const handleEditCategory = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    const { _id, id, name, parentId, imgUrl, description } = values;
    const editedCategory = {
      _id,
      id,
      name,
      parentId,
      imgUrl,
      description,
    };
    console.log(editedCategory);
    // === 1 sending changes on DB ===
    editCategory(currentCategory.id, editedCategory).then(() => {
      dispatch(authorizationPopupAction('Категория обновлена успешно'));
      // === 2 changeing category in REDUX ===
      dispatch(editCategoryAction(editedCategory));
      setSubmitting(false);
    });
  };
  const productSchema = Yup.object().shape({
    _id: Yup.string().required('Is required'),
    id: Yup.string().required('Is required'),
    name: Yup.string().required('Is required'),
    parentId: Yup.string().required('Is required'),
    imgUrl: Yup.string().required('Is required'),
    description: Yup.string().required('Is required'),
  });

  return (
    <div className="formBlock">
      <Formik
        initialValues={{
          _id: currentCategory._id,
          id: currentCategory.id,
          name: currentCategory.name,
          parentId: parentCategory,
          imgUrl: currentCategory.imgUrl,
          description: currentCategory.description,
        }}
        onSubmit={handleEditCategory}
        // validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form" id="edit-category">
            {formik.isSubmitting && (
              <div className="loaderWrapp">
                <Loader />
              </div>
            )}
            <div className="product-inputs-area">
              <TextInput name="_id" type="hidden" />
              <TextInput label="Идентификатор" name="id" type="text" />
              <TextInput label="Название" name="name" type="text" />
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCategoryForm;
