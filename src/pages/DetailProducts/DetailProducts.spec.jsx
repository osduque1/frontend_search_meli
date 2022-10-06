import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import DetailProducts from "./DetailProducts";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const defaultProps = {
  storeApp: {
    productDetail: {
      responseData: {},
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
  },
};

const store = mockStore(defaultProps);
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <DetailProducts {...setupProps} />
      </MemoryRouter>
    </Provider>
  );
};

describe("Test for DetailProducts", () => {
  test("should render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
