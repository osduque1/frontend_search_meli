import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import DetailProducts from "./DetailProducts";
import detailProduct from "../../mocks/detailProduct.json";

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

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const store = mockStore(setupProps);
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

  test("should render with productDetail", () => {
    const props = {
      storeApp: {
        productDetail: {
          responseData: detailProduct,
        },
      },
    };

    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render card Loader, loading true", () => {
    const props = {
      storeApp: {
        productDetail: {
          isLoading: true,
        },
      },
    };

    const wrapper = setup(props);
    const cardLoader = wrapper
      .find(".Loader__Container")
      .find("h5")
      .contains("¡Cargando!");

    expect(cardLoader).toBe(true);
  });

  test("should render card Error, error true", () => {
    const props = {
      storeApp: {
        productDetail: {
          isError: true,
        },
      },
    };

    const wrapper = setup(props);
    const cardError = wrapper
      .find(".CardInfo__Container")
      .find("h2")
      .contains("¡Se presentó un problema técnico!");

    expect(cardError).toBe(true);
  });

  test("should render card Empty search", () => {
    const props = {
      storeApp: {
        productDetail: {
          responseData: {
            Code: "202",
          },
        },
      },
    };

    const wrapper = setup(props);
    const cardInfoEmpty = wrapper
      .find(".CardInfo__Container")
      .find("h2")
      .contains("¡No se encontraron coincidencias en su búsqueda!");

    expect(cardInfoEmpty).toBe(true);
  });
  
  test("should execute event click Back button", () => {
    const backHistory = jest.fn();
    const props = {
      storeApp: {
        productDetail: {
          responseData: detailProduct,
        },
      },
    };

    const wrapper = setup(props);
    const backBtn = wrapper.find(".DetailProducts__Back");
    backBtn.simulate("click");
    expect(backHistory).toBeCalled();
  });
});
