import React from "react";
import { mount } from "enzyme";
import CardInfo from "./CardInfo";

describe("Test for CardInfo", () => {
  test("should render without error", () => {
    const wrappper = mount(<CardInfo />);

    expect(wrappper.exists()).toBe(true);
  });
});
