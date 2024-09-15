import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct number of NotificationItem components when listNotifications is provided", () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: "<p>Notification 1</p>" },
        type: "default",
        value: "",
      },
      {
        id: 2,
        html: { __html: "<p>Notification 2</p>" },
        type: "urgent",
        value: "",
      },
    ];
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={true}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(
      listNotifications.length
    );
  });

  it("renders 'No new notification for now' when listNotifications is empty", () => {
    const wrapper = shallow(
      <Notifications listNotifications={[]} displayDrawer={true} />
    );
    expect(wrapper.text()).toContain("No new notification for now");
  });

  it("does not render 'Here is the list of notifications' when listNotifications is empty", () => {
    const wrapper = shallow(
      <Notifications listNotifications={[]} displayDrawer={true} />
    );
    expect(wrapper.text()).not.toContain("Here is the list of notifications");
  });

  it("renders the correct number of NotificationItem components when listNotifications is not empty", () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: "<p>Notification 1</p>" },
        type: "default",
        value: "",
      },
      {
        id: 2,
        html: { __html: "<p>Notification 2</p>" },
        type: "urgent",
        value: "",
      },
    ];
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={true}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(
      listNotifications.length
    );
    it("calls markAsRead with the correct id when a NotificationItem is clicked", () => {
      const listNotifications = [
        {
          id: 1,
          html: { __html: "<p>Notification 1</p>" },
          type: "default",
          value: "",
        },
      ];
      const mockMarkAsRead = jest.fn();
      const wrapper = shallow(
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={true}
          markAsRead={mockMarkAsRead}
        />
      );

      const notificationItem = wrapper.find(NotificationItem).first();
      notificationItem.simulate("click");

      expect(mockMarkAsRead).toHaveBeenCalledWith(1);
    });
  });
});
