import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_DETAIL_STARTED,
  GET_PRODUCTS_DETAIL_SUCCESS,
  GET_PRODUCTS_DETAIL_FAILURE,
} from "../../constants/storeApp/storeApp.constant";
import config from "../../enviroment/enviroment";
import axios from "axios";

export const getProducts = (searchText, navigate) => (dispatch) => {
  const endPoint = `${config.apiEndPoint}/api/items?q=:`;
  const urlProducts = `/items?search=${searchText}`;
  navigate(urlProducts);

  dispatch({
    type: GET_PRODUCTS_STARTED,
  });

  axios
    .get(`${endPoint}${searchText}`)
    .then((response) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_FAILURE,
        payload: err,
      });
    });
};

export const getProductsDetail = (idProduct, navigate) => (dispatch) => {
  const endPoint = `${config.apiEndPoint}/api/items/:${idProduct}`;
  const urlProductDetail = `/items/:${idProduct}`;
  navigate(urlProductDetail);

  dispatch({
    type: GET_PRODUCTS_DETAIL_STARTED,
  });

  axios
    .get(endPoint)
    .then((response) => {
      dispatch({
        type: GET_PRODUCTS_DETAIL_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS_DETAIL_FAILURE,
        payload: err,
      });
    });
};
