import React from "react";
import { MemoryRouter } from "react-router";
import { shallow } from "enzyme";
import List from "../List";

// jest.mock("../defaultMenuItems");

describe("components > app > shop > list > List", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return (
      <MemoryRouter>
        <List {...props} />
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
