import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import App from "./App";

const initialState = {
  products: {
    responseData: "",
    isLoading: false,
    isError: false,
  },
};

const setupComponent = (Component, props = {}) => (
  <Component {...props}>
    <div />
  </Component>
);

const mockStore = configureStore();

describe("Test for App container", () => {
  test("should render contains BrowserRouter", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(setupComponent(App, { store }));
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  });
});
