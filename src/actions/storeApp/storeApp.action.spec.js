import {
  GET_PRODUCTS_STARTED,
  // GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  // GET_PRODUCTS_DETAIL_STARTED,
  // GET_PRODUCTS_DETAIL_SUCCESS,
  // GET_PRODUCTS_DETAIL_FAILURE,
} from "../../constants/storeApp/storeApp.constant";
import * as actions from "./storeApp.action";

const navigate = jest.fn();

describe("Test storeApp.action actions", () => {
  test("getProducts Action request", () => {
    const action = actions.getProducts('prueba', navigate);

    expect(action).toMatchObject({
      type: GET_PRODUCTS_STARTED,
    });
  });

  test("getProducts Action error", () => {
    const payload = actions.getProducts('prueba', navigate);
    expect(payload).toMatchObject({
      type: GET_PRODUCTS_FAILURE,
      payload: "test",
    });
  });
});
