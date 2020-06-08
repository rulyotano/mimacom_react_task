import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import Shop from "../Shop";

// jest.mock("../defaultMenuItems");

describe("components > app > shop > Shop", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return (
      <MemoryRouter>
        <Shop {...props} />
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
