import React from "react";
import { shallow } from "enzyme";
import WishList from "../WishList";

// jest.mock("../defaultMenuItems");

describe("components > app ? shop > wishlist > WishList", () => {
  const l = { t: jest.fn() };

  const componentCreation = (props: any) => {
    return <WishList {...props} />;
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
