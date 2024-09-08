import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  describe("Without listNotifications prop", () => {
    beforeEach(() => {
      wrapper.setProps({ displayDrawer: true });
    });

    it("renders without crashing", () => {
      expect(wrapper.exists()).toEqual(true);
    });

    it("displays the default notification items when listNotifications is not provided", () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(3); // Default items
    });

    it('renders the text "Here is the list of notifications"', () => {
      expect(wrapper.find("p").text()).toBe(
        "Here is the list of notifications"
      );
    });

    it("renders the 'No new notification for now' message when listNotifications is empty", () => {
      wrapper.setProps({ listNotifications: [] });
      expect(wrapper.find("p").text()).toBe("No new notification for now");
    });
  });

  describe("With listNotifications prop", () => {
    beforeEach(() => {
      const listNotifications = [
        {
          id: 1,
          type: "default",
          html: { __html: "Test HTML" },
          value: "New course available",
        },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: "Urgent Test" } },
      ];
      wrapper.setProps({ displayDrawer: true, listNotifications });
    });

    it("renders the correct number of NotificationItem components", () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it("does not render 'No new notification for now' message when listNotifications is not empty", () => {
      expect(wrapper.find("p").text()).not.toBe("No new notification for now");
    });

    it("renders the correct NotificationItem components based on the listNotifications prop", () => {
      const notifications = wrapper.find(NotificationItem);
      expect(notifications.at(0).prop("type")).toBe("default");
      expect(notifications.at(0).prop("html")).toEqual({ __html: "Test HTML" });
      expect(notifications.at(0).prop("value")).toBe("New course available");

      expect(notifications.at(1).prop("type")).toBe("urgent");
      expect(notifications.at(1).prop("html")).toBeUndefined();
      expect(notifications.at(1).prop("value")).toBe("New resume available");

      expect(notifications.at(2).prop("type")).toBe("urgent");
      expect(notifications.at(2).prop("html")).toEqual({
        __html: "Urgent Test",
      });
      expect(notifications.at(2).prop("value")).toBeUndefined();
    });
  });
});
