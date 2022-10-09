import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Breadcrumbs from "./Breadcrumbs";
import product from "../../mocks/products.json";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const defaultProps = {
  storeApp: {
    products: {
      responseData: {},
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
        <Breadcrumbs {...setupProps} />
      </MemoryRouter>
    </Provider>
  );
};

describe("Test for Breadcrumbs", () => {
  test("should render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test("should render with products", () => {
    const props = {
      storeApp: {
        products: {
          responseData: product,
        },
        productDetail: {
          isLoading: false,
          isError: false,
        },
      },
    };

    const wrapper = setup(props);
    const listBreadcrumb = wrapper
      .find(".Breadcrumbs")
      .find("li")
      .contains("Juegos de Mesa y Cartas");
      
    expect(listBreadcrumb).toBe(true);
  });
});
