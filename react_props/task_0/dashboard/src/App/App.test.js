import React from "react";
import { shallow } from "enzyme";

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
