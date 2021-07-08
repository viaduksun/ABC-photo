/* eslint-disable no-case-declarations */
import { SET_POPULAR_PRODUCTS } from './types';

const initialState = {
  popularModels: [],
  isLoadingPopularModels: true,
};

export const popularModelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_PRODUCTS:
      console.log('payload', action.payload.data);
      const popularModelsProducts = action.payload.data.filter((item) => item.hitSale === 'да');
      return {
        ...state,
        popularModels: popularModelsProducts,
        isLoadingPopularModels: false,
      };

    default:
      return state;
  }
};
