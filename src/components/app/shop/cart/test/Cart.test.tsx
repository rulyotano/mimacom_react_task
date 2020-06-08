import React from "react";
import { shallow } from "enzyme";
import Cart from "../Cart";

// jest.mock("../defaultMenuItems");

describe("components > app > shop > cart > Cart", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return <Cart {...props} />;
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
