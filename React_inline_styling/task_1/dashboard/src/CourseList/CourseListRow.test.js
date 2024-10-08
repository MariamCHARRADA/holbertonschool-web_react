import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("renders one cell with colspan = 2 when isHeader is true and textSecondCell is null", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    const th = wrapper.find("th");
    expect(th).toHaveLength(1);
    expect(th.text()).toEqual("Header");
    expect(th.prop("colSpan")).toEqual(2);
  });

  it("renders two cells when isHeader is true and textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );
    const ths = wrapper.find("th");
    expect(ths).toHaveLength(2);
    expect(ths.at(0).text()).toEqual("Header 1");
    expect(ths.at(1).text()).toEqual("Header 2");
  });

  it("renders two td elements when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data 1"
        textSecondCell="Data 2"
      />
    );
    const tds = wrapper.find("td");
    expect(tds).toHaveLength(2);
    expect(tds.at(0).text()).toEqual("Data 1");
    expect(tds.at(1).text()).toEqual("Data 2");
  });
  it("applies background color #deb5b545 when isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#deb5b545"
    );
  });

  it("applies background color #deb5b545 when isHeader is true and textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#deb5b545"
    );
  });

  it("applies background color #f5f5f5ab when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data 1"
        textSecondCell="Data 2"
      />
    );
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#f5f5f5ab"
    );
  });
});
