import React from "react";
import { shallow } from "enzyme";
import SectionHeader from "../SectionHeader";

// jest.mock("../defaultMenuItems");

describe("components > common > components > SectionHeader", () => {
  const componentCreation = (props: any) => {
    return <SectionHeader {...props} />;
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
