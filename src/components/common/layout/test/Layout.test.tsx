import React from "react";
import { shallow } from "enzyme";
import Layout from "../Layout";

// jest.mock("../defaultMenuItems");

describe("components > common > layout > Layout", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return <Layout {...props} />;
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

  test("Should render children", () => {
    const P_KEY = "test-p";
    const wrapper = shallowWrapper({ children: <p id={P_KEY}>Some Test Component</p> });

    const pWrapper = wrapper.find(`p#${P_KEY}`);
    expect(pWrapper).toHaveLength(1);
  });
});
