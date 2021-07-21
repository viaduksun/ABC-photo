/* eslint-disable no-underscore-dangle */
import getProducts from '../../api/getProducts';
import getCatalog from '../../api/getCatalog';
import {
  SET_PRODUCTS,
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
  EXIT
} from './types';

export const adminProducts = () => (dispatch) => {
  getProducts().then((data) => {
    console.log('DATA', data);
    dispatch({ type: SET_PRODUCTS, payload: data });
  });
};
export const setCatalog = () => (dispatch) => {
  getCatalog().then((data) => {
    // console.log(data);
    dispatch({ type: SET_CATALOG, payload: data });
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
