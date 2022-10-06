import React from "react";
import { mount } from "enzyme";
import Loader from "./Loader";

describe("Test for Loader", () => {
  test("should render without error", () => {
    const wrappper = mount(<Loader />);

    expect(wrappper.exists()).toBe(true);
  });
});
