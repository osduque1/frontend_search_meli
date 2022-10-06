import storeAppReducer from "./storeApp.reducer";
import {
  GET_PRODUCTS_STARTED,
  // GET_PRODUCTS_SUCCESS,
  // GET_PRODUCTS_FAILURE,
  // GET_PRODUCTS_DETAIL_STARTED,
  // GET_PRODUCTS_DETAIL_SUCCESS,
  // GET_PRODUCTS_DETAIL_FAILURE,
} from "../../constants/storeApp/storeApp.constant.js";

const initialState = {
  products: {
    responseData: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
  productDetail: {
    responseData: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
};
describe("Test reducer storeAppReducer", () => {
  test("reducer GET_PRODUCTS_STARTED get products", () => {
    const action = {
      type: GET_PRODUCTS_STARTED,
      payload: {
        productDetail: {
          isError: false,
          isSuccess: false,
          responseData: {},
        },
        products: {
          isError: false,
          isLoading: true,
          isSuccess: true,
        },
      },
    };
    const expectedState = {
      productDetail: {
        isError: false,
      },
      products: {
        isError: false,
        isLoading: true,
        isSuccess: false,
        responseData: {},
      },
    };
    expect(storeAppReducer(undefined, action)).toEqual(expectedState);
  });
});
