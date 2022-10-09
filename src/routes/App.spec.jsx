import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import product from "../mocks/products.json";
import App from "./App";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const defaultProps = {
  storeApp: {
    products: {
      responseData: product,
      isLoading: false,
      isError: false,
    },
    productDetail: {
      isLoading: false,
      isError: false,
    },
  },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const store = mockStore(setupProps);
  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <App {...setupProps} />
      </MemoryRouter>
    </Provider>
  );
};

describe("Test for App", () => {
  test("should render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
