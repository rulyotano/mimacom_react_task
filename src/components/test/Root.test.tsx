import React from "react";
import { shallow } from "enzyme";
import Root from "../Root";

// jest.mock("../defaultMenuItems");

describe("components > Root", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return <Root {...props} />;
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
