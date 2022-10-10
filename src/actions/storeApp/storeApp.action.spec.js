import * as actions from "./storeApp.action";
import axios from "axios";

jest.mock("axios");

const navigate = jest.fn();

describe("Test storeApp.action actions", () => {
  beforeEach(() => {
    axios.get.mockClear();
  });

  test("getProducts Action axios GET_PRODUCTS_SUCCESS", () => {
    const dispatch = jest.fn();
    axios.get.mockResolvedValueOnce(Promise.resolve());

    const response = actions.getProducts("Test", navigate)(dispatch);

    expect(response).toEqual(undefined);
  });

  test("getProducts Action axios GET_PRODUCTS_FAILURE", () => {
    const dispatch = jest.fn();
    axios.get.mockResolvedValueOnce(Promise.reject());

    const response = actions.getProducts("Test", navigate)(dispatch);

    expect(response).toEqual(undefined);
  });

  test("getProductsDetail Action axios GET_PRODUCTS_SUCCESS", () => {
    const dispatch = jest.fn();
    axios.get.mockResolvedValueOnce(Promise.resolve());

    const response = actions.getProductsDetail("Test", navigate)(dispatch);

    expect(response).toEqual(undefined);
  });

  test("getProductsDetail Action axios GET_PRODUCTS_FAILURE", () => {
    const dispatch = jest.fn();
    axios.get.mockResolvedValueOnce(Promise.reject());

    const response = actions.getProductsDetail("Test", navigate)(dispatch);

    expect(response).toEqual(undefined);
  });
});
