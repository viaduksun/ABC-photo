/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import {
  SET_PRODUCTS, REMOVE_PRODUCT, MODAL_REMOVE_PRODUCT, MODAL_REMOVE_PRODUCT_CLOSE, EDIT_PRODUCT, SET_CATALOG, MODAL_EDIT_CATEGORY_OPEN, MODAL_EDIT_CATEGORY_CLOSE, EDIT_CATEGORY, MODAL_DELETE_CATEGORY_OPEN, MODAL_DELETE_CATEGORY_CLOSE, IS_ADMIN, DELETE_CATEGORY, IS_LOGGED_IN, CURRENT_USER_SET_UP, EXIT
} from './types';

const initialState = {
  products: [],
  catalog: [],
  isLoadingProducts: true,
  isLoadingCategories: true,
  isModalRemoveProductOpen: false,
  isModalEditCategoryOpen: false,
  isModalRemoveCategoryOpen: false,
  isAdmin: false,
  isLoggedIn: false,
  currentUser: {},
};

export const admin = (state = initialState, action) => {
  switch (action.type) {
    case EXIT:
      return {
        ...state,
        isAdmin: false,
        isLoggedIn: false,
        currentUser: {}
      };
    case IS_ADMIN:
      return {
        ...state,
        isAdmin: true
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload
      };
    case CURRENT_USER_SET_UP:
      // console.log('CURRENT_USER_SET_UP', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
        currentUser: action.payload
      };
    case MODAL_EDIT_CATEGORY_CLOSE:
      return {
        ...state,
        isModalEditCategoryOpen: false
      };
    case MODAL_EDIT_CATEGORY_OPEN:
      return {
        ...state,
        isModalEditCategoryOpen: true
      };
    case MODAL_DELETE_CATEGORY_OPEN:
      return {
        ...state,
        isModalRemoveCategoryOpen: true
      };
    case MODAL_DELETE_CATEGORY_CLOSE:
      return {
        ...state,
        isModalRemoveCategoryOpen: false
      };
    case SET_PRODUCTS:
      // console.log('SET_PRODUCTS', action.payload.data);
      return {
        ...state,
        products: action.payload.data,
        isLoadingProducts: false
      };
    case SET_CATALOG:
      return {
        ...state,
        catalog: action.payload.data,
        isLoadingProducts: false
      };
    case MODAL_REMOVE_PRODUCT:
      return {
        ...state,
        isModalRemoveProductOpen: true
      };
    case MODAL_REMOVE_PRODUCT_CLOSE:
      return {
        ...state,
        isModalRemoveProductOpen: false
      };
    case REMOVE_PRODUCT:
      const newProducts = state.products.filter((product) => product._id !== action.payload.productID);
      return {
        ...state,
        products: newProducts,
        isModalRemoveProductOpen: false
      };
    case DELETE_CATEGORY:
      console.log('DELETE_CATEGORY', action.payload);
      const newCatalog = state.catalog.filter((category) => category.id !== action.payload.categoryId);
      return {
        ...state,
        catalog: newCatalog,
        isModalRemoveCategoryOpen: false,
      };
    // case CREATE_CATEGORY:
    //   console.log('CREATE_CATEGORY', action.payload);
    //   const newCatalog = state.catalog.push(action.payload.categoryId);
    //   return {
    //     ...state,
    //     catalog: newCatalog,
    //     isModalRemoveCategoryOpen: false,
    //   };
    case EDIT_PRODUCT:
      // console.log('STATE', state);
      // console.log('PAYLOAD_', action.payload);
      const productFromEditForm = action.payload;
      // const targetProduct = state.products.find((product) => product._id === productFromEditForm._id);
      // const productsEditedArr = state.products.filter((product) => product._id !== productFromEditForm._id);
      const productsEditedArr = state.products.map((product) => {
        if (product._id === productFromEditForm._id) {
          return Object.assign(product, productFromEditForm);
        }
        return product;
      });
      console.log('NEW', productsEditedArr);
      // console.log('TARGET', targetProduct);
      // const updatedProduct = Object.assign(targetProduct, productFromEditForm);
      // productsEditedArr.push(updatedProduct);
      // console.log('UP-PRO', updatedProduct);
      return {
        ...state,
        products: productsEditedArr,
      };
    case EDIT_CATEGORY:
      const categoryFromEditForm = action.payload;
      // const targetProduct = state.products.find((product) => product._id === productFromEditForm._id);
      // const productsEditedArr = state.products.filter((product) => product._id !== productFromEditForm._id);
      const categoryEditedArr = state.catalog.map((category) => {
        if (category._id === categoryFromEditForm._id) {
          return Object.assign(category, categoryFromEditForm);
        }
        return category;
      });
      return {
        ...state,
        catalog: categoryEditedArr,
        isModalEditCategoryOpen: false,
      };

    default:
      return state;
  }
};
