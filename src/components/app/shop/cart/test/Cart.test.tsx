import React from "react";
import { MemoryRouter } from "react-router";
import { shallow } from "enzyme";
import Cart from "../Cart";

// jest.mock("../defaultMenuItems");

describe("components > app > shop > cart > Cart", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return (
      <MemoryRouter>
        <Cart {...props} />
      </MemoryRouter>
    );
  };

  const shallowWrapper = (props = {}) => {
    return shallow(componentCreation(props));
  };

  beforeEach(() => {});

  afterEach(() => {});

  test("Component is mounted", () => {
    const wrapper = shallowWrapper();
    expect(wrapper.exists()).toBeTruthy();
  });
});
