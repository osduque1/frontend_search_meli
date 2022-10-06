import React from "react";
import { mount } from "enzyme";
import AppProvider from "./AppProvider";

describe("Test for AppProvider", () => {
  test("should render without error", () => {
    const wrappper = mount(<AppProvider />);

    expect(wrappper.exists()).toBe(true);
  });
});
