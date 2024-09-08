import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({
  displayDrawer = false,
  listNotifications = [],
}) {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
          </ul>
          <button
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
            }}
            aria-label="close"
            onClick={handleClick}
          >
            x
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
