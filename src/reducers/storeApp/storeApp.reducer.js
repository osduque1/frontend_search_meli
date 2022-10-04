/* eslint-disable import/no-anonymous-default-export */
import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_DETAIL_STARTED,
  GET_PRODUCTS_DETAIL_SUCCESS,
  GET_PRODUCTS_DETAIL_FAILURE
} from '../../constants/storeApp/storeApp.constant.js';

export const initialState = {
  products: {
    responseData: {},
    isLoading: false,
    isError: false,
    isSuccess: false
  },
  productDetail: {
    responseData: {},
    isLoading: false,
    isError: false,
    isSuccess: false
  }
};

export default (state = initialState, { type, payload } = {}) => {
  const localState = state || initialState;

  switch (type) {
    case GET_PRODUCTS_STARTED:
      return {
        ...localState,
        products: {
          ...localState.products,
          isLoading: true,
          isError: false,
          isSuccess: false
        }
      };
      
    case GET_PRODUCTS_SUCCESS:
      return {
        ...localState,
        products: {
          ...localState.products,
          responseData: payload,
          isLoading: false,
          isSuccess: true
        }
      };

    case GET_PRODUCTS_FAILURE:
      return {
        ...localState,
        products: {
          ...localState.products,
          responseData: payload,
          isLoading: false,
          isError: true
        }
      };

    case GET_PRODUCTS_DETAIL_STARTED:
      return {
        ...localState,
        productDetail: {
          ...localState.productDetail,
          isLoading: true,
          isError: false,
          isSuccess: false
        }
      };
      
    case GET_PRODUCTS_DETAIL_SUCCESS:
      return {
        ...localState,
        productDetail: {
          ...localState.productDetail,
          responseData: payload,
          isLoading: false,
          isSuccess: true
        }
      };

    case GET_PRODUCTS_DETAIL_FAILURE:
      return {
        ...localState,
        productDetail: {
          ...localState.productDetail,
          responseData: payload,
          isLoading: false,
          isError: true
        }
      };

    default:
      return { ...localState };
  }
};
