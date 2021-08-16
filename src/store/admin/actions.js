/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import getProducts from '../../api/getProducts';
import getCatalog from '../../api/getCatalog';
import {
  SET_ADMIN_PRODUCTS,
  REMOVE_PRODUCT,
  MODAL_REMOVE_PRODUCT,
  MODAL_REMOVE_PRODUCT_CLOSE,
  EDIT_PRODUCT,
  SET_CATALOG,
  MODAL_EDIT_CATEGORY_OPEN,
  MODAL_EDIT_CATEGORY_CLOSE,
  EDIT_CATEGORY,
  MODAL_DELETE_CATEGORY_OPEN,
  MODAL_DELETE_CATEGORY_CLOSE,
  IS_ADMIN,
  DELETE_CATEGORY,
  IS_LOGGED_IN,
  CURRENT_USER_SET_UP,
  EXIT,
  UPDATE_CUSTOMER,
  SET_CURRENT_PAGE_ADMIN
} from './types';
import updateCustomer from '../../api/updateCustomer';
import getAllProductsAdmin from '../../api/getAllProductsAdmin';

export const adminProducts = (page) => (dispatch) => {
  getAllProductsAdmin(page).then((data) => {
    console.log('DATA', data);
    dispatch({
      type: SET_ADMIN_PRODUCTS,
      payload: {
        products: data.data.products,
        productsQuantity: data.data.productsQuantity,
      }
    });
  });
};
export const setCatalog = () => (dispatch) => {
  getCatalog().then((data) => {
    // console.log(data);
    dispatch({ type: SET_CATALOG, payload: data });
  });
};
export const updateCustomerAction = (form) => (dispatch) => {
  updateCustomer(form).then((newUserResponse) => {
    console.log('UPDATED USER', newUserResponse);
    dispatch({ type: UPDATE_CUSTOMER, payload: newUserResponse.data });
  })
    .catch((err) => {
      console.log(err.response);
      alert(err.response.data);
      /* Do something with error, e.g. show error to user */
    });
};
// export const setNewCatalog = () => (dispatch) => {
//   getCatalog().then((data) => {
//     console.log(data);
//     dispatch({ type: CREATE_CATEGORY, payload: data });
//   });
// };
export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: { productID: product._id },
});
export const deleteCategoryAction = (categoryId) => ({
  type: DELETE_CATEGORY,
  payload: { categoryId },
});
export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});
export const modalDeleteOpen = () => ({
  type: MODAL_REMOVE_PRODUCT,
});
export const modalDeleteClose = () => ({
  type: MODAL_REMOVE_PRODUCT_CLOSE,
});
export const modalEditCategoryOpenAction = () => ({
  type: MODAL_EDIT_CATEGORY_OPEN,
});
export const modalEditCategoryCloseAction = () => ({
  type: MODAL_EDIT_CATEGORY_CLOSE,
});
export const modalDeleteCategoryOpenAction = () => ({
  type: MODAL_DELETE_CATEGORY_OPEN,
});
export const modalDeleteCategoryCloseAction = () => ({
  type: MODAL_DELETE_CATEGORY_CLOSE,
});
export const editCategoryAction = (category) => ({
  type: EDIT_CATEGORY,
  payload: category,
});
export const isAdminAction = () => ({
  type: IS_ADMIN
});
export const isLoggedInAction = (userData) => ({
  type: IS_LOGGED_IN,
  payload: userData,
});
export const userFromLocalStorageAction = (userFromLocalData) => ({
  type: CURRENT_USER_SET_UP,
  payload: userFromLocalData,
});
export const exitAction = () => ({
  type: EXIT,
});
export const setCurrentPageAdminAction = (page) => {
  localStorage.setItem('currentPageAdmin', page);
  return ({
    type: SET_CURRENT_PAGE_ADMIN,
    payload: page,
  });
};
