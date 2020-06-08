import React from "react";
import { shallow } from "enzyme";
import List from "../List";

// jest.mock("../defaultMenuItems");

describe("components > app > shop > list > List", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return <List {...props} />;
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
