import React from "react";
import { mount } from "enzyme";
import CardInfo from "./CardInfo";

describe("Test for CardInfo", () => {
  test("should render without error", () => {
    const wrapper = mount(<CardInfo />);

    expect(wrapper.exists()).toBe(true);
  });

  test("should render without error and not results", () => {
    const wrapper = mount(<CardInfo />);
    const cardEmpty = wrapper
      .find(".CardInfo__Container")
      .find("h2")
      .contains("¡No se encontraron coincidencias en su búsqueda!");

    expect(cardEmpty).toBe(true);
  });

  test("should render with error", () => {
    const wrapper = mount(<CardInfo error={true} />);

    expect(wrapper.exists()).toBe(true);
  });

  test("should render with error and not results", () => {
    const wrapper = mount(<CardInfo error={true} />);
    const cardEmpty = wrapper
      .find(".CardInfo__Container")
      .find("h2")
      .contains("¡Se presentó un problema técnico!");

    expect(cardEmpty).toBe(true);
  });
});
