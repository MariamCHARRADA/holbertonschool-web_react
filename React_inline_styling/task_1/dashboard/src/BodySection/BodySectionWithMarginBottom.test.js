import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("<BodySectionWithMarginBottom />", () => {
  it("should render a BodySection component and pass props correctly", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection).length).toBe(1);

    expect(wrapper.find(BodySection).props().title).toBe("test title");

    expect(wrapper.find(BodySection).props().children.type).toBe("p");
    expect(wrapper.find(BodySection).props().children.props.children).toBe(
      "test children node"
    );
  });
});
