import { SET_POPULAR_PRODUCTS } from './types';

const initialState = {
  popularModels: [],
  isLoadingPopularModels: true,
};

export const popularModelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_PRODUCTS:
      return {
        ...state,
        popularModels: action.payload.data,
        isLoadingPopularModels: false,
      };

    default:
      return state;
  }
};
