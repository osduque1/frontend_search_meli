import React from "react";
import { mount } from "enzyme";
import Breadcrumbs from "./Breadcrumbs";

describe("Test for Breadcrumbs", () => {
  test("should render without error", () => {
    const wrappper = mount(<Breadcrumbs />);

    expect(wrappper.exists()).toBe(true);
  });
});
