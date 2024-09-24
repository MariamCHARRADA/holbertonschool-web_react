import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import { StyleSheetTestUtils } from "aphrodite";

describe("<App />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection(); // Prevent style injection
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection(); // Resume style injection after tests
  });

  it("renders App component without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it("renders Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it("renders Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it("renders Login component when isLoggedIn is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it("renders CourseList component when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it("calls logOut and displays alert when Ctrl+h is pressed", () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    const wrapper = mount(<App logOut={logOutMock} />);

    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
    wrapper.unmount();
  });
});
